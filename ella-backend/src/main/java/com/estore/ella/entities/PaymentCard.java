package com.estore.ella.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name="payment_card")
public class PaymentCard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @NotBlank(message = "Card holder name can't be empty")
    @Column(name = "card_holder", nullable = false)
    private String cardHolder;

    @Size(min=12)
    @NotBlank(message = "Card number can't be empty")
    @Column(name = "card_number", nullable = false)
    private Long cardNumber;

    @NotBlank(message = "Expiry date can't be empty")
    @Column(name = "expiry", nullable = false)
    private Date expiry;

    @Size(min=3)
    @NotBlank(message = "CVV can't be empty")
    @Column(name = "cvv")
    private int cvv;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user")
    private User user;

}
