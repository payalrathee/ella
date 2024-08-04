//package com.estore.ella.entities;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import jakarta.persistence.*;
//import jakarta.validation.constraints.DecimalMin;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotNull;
//import jakarta.validation.constraints.Pattern;
//import lombok.Data;
//import org.hibernate.validator.constraints.Range;
//
//import java.util.Date;
//import java.util.List;
//
//@Data
//@Entity
//@Table(name = "order")
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "id")
//    private Integer id;
//
//    @Pattern(regexp = "^(pending|delivered)$", message = "Status must be either pending or delivered")
//    @Column(name = "status")
//    private String status;
//
//    @Range(min=0, message = "Invalid item count")
//    @Column(name = "total_items")
//    private Integer totalItems;
//
//    @NotNull
//    @DecimalMin(value = "0.0", message = "Please enter a valid price")
//    @Column(name = "total_price")
//    private Double totalPrice;
//
//    @DecimalMin(value = "0.0", message = "Please enter a valid price")
//    @Column(name = "discounted_price")
//    private Double discountedPrice;
//
//    @NotNull
//    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private List<OrderItem> orderItems;
//
//    @NotNull
//    @OneToOne(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private Payment payment;
//
//    @NotNull
//    @JsonIgnore
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user")
//    private User user;
//
//    @NotNull
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "address")
//    private Address address;
//
//    @Column(name = "delivery_date")
//    private Date deliveryDate;
//
//    @Column(name = "created_at", nullable = false)
//    private Date createdAt;
//}
