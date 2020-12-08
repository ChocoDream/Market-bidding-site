package com.tradindemboiz.spring.repositories;

import com.tradindemboiz.spring.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends JpaRepository<Message, Long> {
//    @Query(value = "SELECT * FROM messages WHERE recipient_id = ?1 OR sender_id = ?1 ORDER BY timestamp DESC", nativeQuery = true)
    @Query(value = "SELECT * FROM messages WHERE recipient_id = ?1 OR sender_id = ?1 GROUP BY recipient_id ORDER BY timestamp DESC", nativeQuery = true)
    List<Message>  findAllConversations(Long id);

    @Query(value = "SELECT * FROM messages WHERE (recipient_id = ?1 AND sender_id = ?2) OR (recipient_id = ?2 AND sender_id = ?1) ORDER BY timestamp DESC", nativeQuery = true)
    List<Message> findAllConversationMessages(long participant1, long participant2);

}
