package com.unicomer.backendtechforb.models;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = Card.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Card {

    public interface CreateCard {
    }

    public static final String TABLE_NAME = "card";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    @Column(name = "name", length = 100, nullable = false, unique = true)
    @NotNull(groups = CreateCard.class)
    @NotEmpty(groups = CreateCard.class)
    @Size(groups = CreateCard.class, min = 2, max = 100)
    private String name;

    @Column(name = "number", nullable = false)
    @NotNull(groups = CreateCard.class)
    @DecimalMin(value = "0", inclusive = false, groups = CreateCard.class)
    private BigDecimal number;

    @Column(name = "securityCode", nullable = false)
    @NotNull(groups = CreateCard.class)
    @DecimalMin(value = "0", inclusive = false, groups = CreateCard.class)
    private BigDecimal securityCode;

    @Column(name = "expirationDate", nullable = false)
    @NotNull(groups = CreateCard.class)
    @NotBlank(groups = CreateCard.class)
    private String expirationDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getNumber() {
        return number;
    }

    public void setNumber(BigDecimal number) {
        this.number = number;
    }

    public BigDecimal getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(BigDecimal securityCode) {
        this.securityCode = securityCode;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }
}
