package com.tradindemboiz.spring.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tradindemboiz.spring.dtos.MessageCreateDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "messages")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long recipient_id;
    private long sender_id;
    private String content;
    private long timestamp;

    @ManyToOne
    @JoinColumn(name = "recipient_id", updatable = false, insertable = false)
    @JsonIgnore
    private User recipient;

    @ManyToOne
    @JoinColumn(name = "sender_id", updatable = false, insertable = false)
    @JsonIgnore
    private User sender;

    public Message(MessageCreateDto messageCreateDto) {
        this.recipient_id = messageCreateDto.getRecipientId();
        this.sender_id = messageCreateDto.getSenderId();
        this.content = messageCreateDto.getContent();
        this.timestamp = new Date().getTime();
    }
}
