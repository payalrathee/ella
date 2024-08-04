//package com.estore.ella.entities;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotNull;
//import jakarta.validation.constraints.Pattern;
//import lombok.Data;
//
//@Data
//@Entity
//@Table(name = "payment")
//public class Payment {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "id")
//    private Integer id;
//
//    @Pattern(regexp = "^(pending|complete)$", message = "Stock must be either pending or complete")
//    @Column(name = "status")
//    private String status;
//
//    @Pattern(regexp = "^(online|cash_on_delivery)$", message = "Stock must be either online or cash_on_delivery")
//    @Column(name = "method")
//    private String method;
//
//    @NotNull @NotBlank
//    @Column(name = "payment_id")
//    private String paymentId;
//
//    @NotNull @NotBlank
//    @Column(name = "link_id")
//    private String linkId;
//
//    @NotNull @NotBlank
//    @Column(name = "link_ref_id")
//    private String linkRefId;
//
//    @Pattern(regexp = "^(active|expired)$", message = "Stock must be either active or expired")
//    @Column(name = "link_status")
//    private String linkStatus;
//
//    @JsonIgnore
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "order")
//    private Order order;
//}
