package com.unicomer.backendtechforb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.unicomer.backendtechforb.models.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

    List<Card> findAll();

    List<Card> findByUser_Id(Long id);
}
