//package com.estore.ella.entities;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import jakarta.persistence.*;
//import jakarta.validation.constraints.DecimalMin;
//import jakarta.validation.constraints.NotNull;
//import jdk.jfr.Enabled;
//import lombok.Data;
//import org.hibernate.validator.constraints.Range;
//
//@Data
//@Entity
//@Table(name = "order_item")
//public class OrderItem {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "id")
//    private  Integer id;
//
//    @NotNull
//    @Range(min = 0, message = "Invalid quantity")
//    @Column(name = "quantity")
//    private Integer quantity;
//
//    @DecimalMin(value = "0.0", message = "Please enter a valid price")
//    @Column(name = "total_price")
//    private Double totalPrice;
//
//    @DecimalMin(value = "0.0", message = "Please enter a valid price")
//    @Column(name = "discounted_price")
//    private Double discountedPrice;
//
//    @NotNull
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "product")
//    private Product product;
//
//    @JsonIgnore
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "order")
//    private Order order;
//}
