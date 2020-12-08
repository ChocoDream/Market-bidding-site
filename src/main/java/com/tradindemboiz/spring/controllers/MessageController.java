package com.tradindemboiz.spring.controllers;

import com.tradindemboiz.spring.dtos.ConversationReadDto;
import com.tradindemboiz.spring.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/users/{id}/conversations")
    public ResponseEntity<ConversationReadDto> getConversations(@PathVariable long id) {
        var messages = messageService.getConversations(id);
        var conversationsDto = new ConversationReadDto(messages);
        return ResponseEntity.ok(conversationsDto);
    }

    @GetMapping("/users/{participantId1}/conversations/{participantId2}")
    public ResponseEntity<ConversationReadDto> getConversationMessages(@PathVariable long participantId1, @PathVariable long participantId2) {
        var messages = messageService.getConversationMessages(participantId1, participantId2);
        var conversationDto = new ConversationReadDto(messages);
        return ResponseEntity.ok(conversationDto);
    }
}
