package com.estore.ella.services;

import com.estore.ella.entities.Category;
import com.estore.ella.exceptions.CategoryException;
import org.springframework.stereotype.Service;

public interface CategoryService {

    public Category getCategory(String name, Category parent) throws CategoryException;
    public Category addCategory(Category category);
}
