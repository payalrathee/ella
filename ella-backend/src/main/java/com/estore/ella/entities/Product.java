package com.estore.ella.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "product")
@Getter @Setter @NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @NotBlank(message = "Title can't be empty")
    @Column(name = "title", nullable = false)
    private String title;

    @NotBlank(message = "Description can't be empty")
    @Column(name = "description", nullable = false)
    private String desc;

    @NotBlank(message = "Price can't be empty")
    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "discounted_price")
    private double discountedPrice;

    @NotBlank(message = "Quantity can't be empty")
    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "brand")
    private String brand;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Review> reviews;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> ratings;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Media> media;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category")
    private Category category;

    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt;
}
