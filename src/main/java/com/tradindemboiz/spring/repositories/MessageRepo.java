package com.tradindemboiz.spring.repositories;

import com.tradindemboiz.spring.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Long> {
}
