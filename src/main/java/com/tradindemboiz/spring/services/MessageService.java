package com.tradindemboiz.spring.services;

import com.tradindemboiz.spring.dtos.MessageCreateDto;
import com.tradindemboiz.spring.entities.Message;
import com.tradindemboiz.spring.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    @Autowired
    private MessageRepo messageRepo;

    public Message saveNewMessage(MessageCreateDto messageCreateDto) {
        return messageRepo.save(new Message(messageCreateDto));
    }

}
