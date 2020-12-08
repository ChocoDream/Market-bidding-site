package com.tradindemboiz.spring.dtos;

import com.tradindemboiz.spring.entities.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConversationReadDto {
    private List<Message> messages;
}
