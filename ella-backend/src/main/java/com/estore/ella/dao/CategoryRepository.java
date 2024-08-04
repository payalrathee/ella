package com.estore.ella.dao;

import com.estore.ella.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

    public Category getCategoryByNameAndParentCategory(String name, Category parent);
}
