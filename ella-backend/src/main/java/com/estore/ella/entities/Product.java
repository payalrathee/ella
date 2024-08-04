package com.estore.ella.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @NotBlank(message = "Title can't be empty")
    @Size(min = 1, max = 100, message = "Title must be between 1 and 100 characters")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Title must be alphanumeric")
    @Column(name = "title", nullable = false)
    private String title;

    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Description must be alphanumeric")
    @Column(name = "description")
    private String desc;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    @Column(name = "price", nullable = false)
    private Double price;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    @Column(name = "discounted_price")
    private Double discountedPrice;

    @Range(min = 0, max = 1000, message = "Please enter a valid quantity")
    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Size(min = 1, max = 50, message = "Brand must be between 1 and 50 characters")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Brand must be alphanumeric")
    @Column(name = "brand")
    private String brand;

    @Size(min = 1, max = 30, message = "Color must be between 1 and 30 characters")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Color must be alphanumeric")
    @Column(name = "color")
    private String color;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Review> reviews;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> ratings;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Media> media;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category")
    private Category category;

    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt;
}
