package com.tradindemboiz.spring.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradindemboiz.spring.dtos.MessageCreateDto;
import com.tradindemboiz.spring.dtos.SocketDto;
import com.tradindemboiz.spring.services.SocketService;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Controller
public class SocketController extends TextWebSocketHandler {
    private ObjectMapper objectMapper = new ObjectMapper();

    // NOTE: Can not use @Autowired here due to WebSocketConfig instantiating the SocketController and also adds some configs that we can not see.
    private SocketService socketService;

    public void setSocketService(SocketService socketService) {
        this.socketService = socketService;
    }

    // All trafic with sockets is handeled through this method.
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        var socketDto = objectMapper.readValue(message.getPayload(), SocketDto.class);
        switch (socketDto.getAction()) {
            case "loggedIn": {
                var username = convertPayload(socketDto.getPayload(), String.class);
                socketService.addToLoggedInSessions(username, session);
                break;
            }
            case "newMessage": {
                var newMessage = convertPayload(socketDto.getPayload(), MessageCreateDto.class);
                socketService.saveNewMessage(newMessage, session);
                break;
            }
            default: {
                break;
            }
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        socketService.addSession(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        socketService.removeSession(session);
    }

    private <T> T convertPayload(Object object, Class<T> type) {
        T t = null;
        try {
            var objectAsString = objectMapper.writeValueAsString(object);
            t = objectMapper.readValue(objectAsString, type);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return t;
    }
}
