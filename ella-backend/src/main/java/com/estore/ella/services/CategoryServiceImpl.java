package com.estore.ella.services;

import com.estore.ella.dao.CategoryRepository;
import com.estore.ella.entities.Category;
import com.estore.ella.exceptions.CategoryException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category getCategory(String name, Category parent) throws CategoryException {

        return categoryRepository.getCategoryByNameAndParentCategory(name, parent);
    }

    @Override
    public Category addCategory(Category category) {

        return categoryRepository.save(category);

    }
}
