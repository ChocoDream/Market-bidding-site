package com.tradindemboiz.spring.services;

import com.tradindemboiz.spring.dtos.MessageCreateDto;
import com.tradindemboiz.spring.entities.Message;
import com.tradindemboiz.spring.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepo messageRepo;

    public Message saveNewMessage(MessageCreateDto messageCreateDto) {
        return messageRepo.save(new Message(messageCreateDto));
    }

    public List<Message> getConversations(long id) {
        return messageRepo.findAllConversations(id);
    }

    public List<Message> getConversationMessages(long participantId1, long participantId2) {
        return messageRepo.findAllConversationMessages(participantId1, participantId2);
    }

}
