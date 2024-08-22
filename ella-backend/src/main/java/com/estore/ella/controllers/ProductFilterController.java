package com.estore.ella.controllers;

import com.estore.ella.dto.FiltersDto;
import com.estore.ella.dto.ProductDto;
import com.estore.ella.entities.Product;
import com.estore.ella.services.ProductService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ProductFilterController {

    @Autowired
    private ProductService productService;

    public static Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

    @PostMapping("/filter/{page_no}")
    public ResponseEntity<List<ProductDto>> filterProducts(@Valid @RequestBody FiltersDto filters, @PathVariable("page_no") Integer pageNumber) {

        LOGGER.info("Request received to filter products");

        Page<Product> productPage = productService.filterProducts(filters, pageNumber);
        List<Product> products = productPage.getContent();

        List<ProductDto> productList = new ArrayList<>();
        for(Product product : products) {
            productList.add(productService.formatProduct(product));
        }
        System.out.println(products.size());

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
