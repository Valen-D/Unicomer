package com.unicomer.backendtechforb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.unicomer.backendtechforb.models.Card;
import com.unicomer.backendtechforb.repositories.CardRepository;

@Service
public class CardService {
    
    @Autowired
    private CardRepository cardRepository;

    CardService(UserService userService) {
    }

    @Transactional
    public Card create(Card obj) {

        obj.setId(null);
        obj = this.cardRepository.save(obj);

        return obj;

    }

    public List<Card> findAllCards() {
        return cardRepository.findAll();
    }

    public List<Card> findAllByUserId(Long userId) {

        List<Card> cards = this.cardRepository.findByUser_Id(userId);
    
    return cards;
    }
}
