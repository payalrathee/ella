package com.estore.ella.services;

import com.estore.ella.dto.FiltersDto;
import com.estore.ella.dto.ProductDto;
import com.estore.ella.entities.Category;
import com.estore.ella.entities.Product;
import com.estore.ella.exceptions.CategoryException;
import com.estore.ella.exceptions.ProductException;
import com.estore.ella.dao.CategoryRepository;
import com.estore.ella.dao.ProductRepository;
import com.estore.ella.utilities.ProductSpecification;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryService categoryService;

    @Override
    public Product getProductById(int id) throws ProductException {

        Optional<Product> op= productRepository.findById(id);

        if(op.isEmpty()) {
            throw new ProductException("Product not found");
        }

        return op.get();
    }

    @Override
    public Product addProduct(@RequestBody Product product, List<String> categories) throws CategoryException {

        int i = 1;
        Category prevLevelCategory = null;
        categories.removeAll(Collections.singleton(null));
        for(String category : categories) {

            Category cat = categoryService.getCategory(category, prevLevelCategory);

            if(cat == null) {
                cat = new Category();
                cat.setName(category);
            }

            cat.setLevel(i);
            cat.setParentCategory(prevLevelCategory);
            cat = categoryService.addCategory(cat);
            prevLevelCategory = cat;
            i++;
        }

        product.setCategory(prevLevelCategory);

        product.setCreatedAt(LocalDateTime.now());

        product = productRepository.save(product);

        return product;
    }

    @Override
    public Product updateProduct(Product product, List<String> categories) throws CategoryException {

        int i = 1;
        Category prevLevelCategory = null;
        categories.removeAll(Collections.singleton(null));
        for(String category : categories) {

            Category cat = categoryService.getCategory(category, prevLevelCategory);

            if(cat == null) {
                cat = new Category();
                cat.setName(category);
            }

            cat.setLevel(i);
            cat.setParentCategory(prevLevelCategory);
            cat = categoryService.addCategory(cat);
            prevLevelCategory = cat;
            i++;
        }

        product.setCategory(prevLevelCategory);

        return productRepository.save(product);

    }

    @Override
    public Product deleteProduct(Product product) {

        productRepository.delete(product);
        return product;
    }

    @Override
    public Page<Product> filterProducts(FiltersDto filters, int pageNumber, int pageSize) {

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        ProductSpecification spec = new ProductSpecification(filters);

        Page<Product> products = productRepository.findAll(spec, pageable);

        return products;
    }

    @Override
    public ProductDto formatProduct(Product product) {

        ProductDto productDto = new ProductDto();
        BeanUtils.copyProperties(product, productDto);

        Category thirdLevel = product.getCategory();
        Category secondLevel = thirdLevel.getParentCategory();
        Category topLevel = secondLevel.getParentCategory();

        productDto.setTopLevelCategory(topLevel.getName());
        productDto.setSecondLevelCategory(secondLevel.getName());
        productDto.setThirdLevelCategory(thirdLevel.getName());

        return productDto;
    }
}
