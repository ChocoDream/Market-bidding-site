package com.tradindemboiz.spring.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradindemboiz.spring.dtos.MessageCreateDto;
import com.tradindemboiz.spring.dtos.SocketDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class SocketService {

    @Autowired
    private MessageService messageService;
    @Autowired
    private UserService userService;

    ObjectMapper objectMapper = new ObjectMapper();

    private List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();
    private Map<String, WebSocketSession> loggedInSessions = new ConcurrentHashMap<>();

    // The two following methods "prepares" the message/payload, checks if the object being sent
    // is valid and can be stringyfied.
    public void prepareSendToOne(WebSocketSession webSocketSession, Object obj) {
        try {
            sendToOne(webSocketSession, objectMapper.writeValueAsString(obj));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void prepareSendToAll(Object obj) {
        try {
            sendToAll(objectMapper.writeValueAsString(obj));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }


    // De två metoderna "sendToOne" och "sendToAll" nedan äger själva logiken som skickar ut meddelanden/laster till klienterna.
    public void sendToOne(WebSocketSession webSocketSession, String message) throws IOException {
        webSocketSession.sendMessage(new TextMessage(message));
    }

    public void sendToAll(String message) {
        TextMessage msg = new TextMessage(message);
        for (WebSocketSession webSocketSession : sessions) {
            try {
                webSocketSession.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void addSession(WebSocketSession session) {
        sessions.add(session);

    }

    public void removeSession(WebSocketSession session) {
        sessions.remove(session);
        loggedInSessions.values().remove(session);
    }

    public void addToLoggedInSessions(String key, WebSocketSession session) {
        loggedInSessions.put(key, session);
    }

    public void saveNewMessage(MessageCreateDto messageCreateDto, WebSocketSession session) {
        var newMessage = messageService.saveNewMessage(messageCreateDto);
        var socketDto = new SocketDto("newMessage", newMessage);
        var recipient = userService.findById(newMessage.getRecipient_id());
        if (recipient != null) {
            var recipientSession = loggedInSessions.getOrDefault(recipient.getUsername(), null);
            if (recipientSession != null && recipientSession != session) {
                prepareSendToOne(recipientSession, socketDto);
            }
        }
        prepareSendToOne(session, socketDto);
    }
}
