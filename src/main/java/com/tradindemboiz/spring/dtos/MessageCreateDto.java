package com.tradindemboiz.spring.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageCreateDto {
    private long recipientId;
    private long senderId;
    private String content;
}
