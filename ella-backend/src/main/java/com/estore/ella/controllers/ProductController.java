package com.estore.ella.controllers;

import com.estore.ella.dto.FiltersDto;
import com.estore.ella.dto.ProductDto;
import com.estore.ella.entities.Product;
import com.estore.ella.exceptions.CategoryException;
import com.estore.ella.exceptions.ProductException;
import com.estore.ella.services.CategoryService;
import com.estore.ella.services.ProductService;
import com.estore.ella.utilities.NullEscapeBeanUtility;
import com.estore.ella.validations.CreateProductGroup;
import com.estore.ella.validations.UpdateProductGroup;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v1/product")
public class ProductController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProductService productService;

    public static Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProduct(@PathVariable("id") int id) throws ProductException {

        LOGGER.info("Requestrecieved for get product");

        Product product = productService.getProductById(id);

        return new ResponseEntity(productService.formatProduct(product), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<ProductDto> addProduct(@Validated(CreateProductGroup.class) @RequestBody ProductDto productDto) throws CategoryException, ProductException {

        LOGGER.info("Request recieved for add product");

        Product product = new Product();
        BeanUtils.copyProperties(productDto, product);

        product = productService.addProduct(product, new ArrayList<>(Arrays.asList(productDto.getTopLevelCategory(), productDto.getSecondLevelCategory(), productDto.getThirdLevelCategory())));

        return new ResponseEntity(productService.formatProduct(product), HttpStatus.CREATED);

    }

    @PatchMapping("/")
    public ResponseEntity<ProductDto> updateProduct(@Validated(UpdateProductGroup.class) @RequestBody ProductDto productDto) throws ProductException, CategoryException {

        LOGGER.info("Request recieved for update product");

        Product product = productService.getProductById(productDto.getId());
        NullEscapeBeanUtility.copyNonNullProperties(productDto, product);
        product = productService.updateProduct(product, new ArrayList<>(Arrays.asList(productDto.getTopLevelCategory(), productDto.getSecondLevelCategory(), productDto.getThirdLevelCategory())));

        return new ResponseEntity(productService.formatProduct(product), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProductDto> deleteProduct(@PathVariable Integer id) throws ProductException {

        LOGGER.info("Request received for delete product");

        Product product = productService.getProductById(id);
        product = productService.deleteProduct(product);

        return new ResponseEntity(productService.formatProduct(product), HttpStatus.OK);
    }

}
