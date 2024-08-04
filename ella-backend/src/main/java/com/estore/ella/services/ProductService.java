package com.estore.ella.services;

import com.estore.ella.dto.FiltersDto;
import com.estore.ella.dto.ProductDto;
import com.estore.ella.entities.Category;
import com.estore.ella.entities.Product;
import com.estore.ella.exceptions.CategoryException;
import com.estore.ella.exceptions.ProductException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product getProductById(int id) throws ProductException;
    public Product addProduct(Product product, List<String> categories) throws ProductException, CategoryException;
    public Product updateProduct(Product product, List<String> categories) throws CategoryException;
    public Product deleteProduct(Product product);
    public Page<Product> filterProducts(FiltersDto filters, int pageNumber, int pageSize);
    public ProductDto formatProduct(Product product);
}
