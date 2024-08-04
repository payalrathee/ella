package com.estore.ella.utilities;

import com.estore.ella.dto.FiltersDto;
import com.estore.ella.dto.ProductDto;
import com.estore.ella.entities.Product;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ProductSpecification implements Specification<Product> {

    private FiltersDto criteria;

    public ProductSpecification(FiltersDto criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        final List<Predicate> predicates = new ArrayList<>();

        if(criteria.getBrand() != null) {
            predicates.add(criteriaBuilder.like(root.get("brand"), "%" + criteria.getBrand() + "%"));
        }

        if(criteria.getStock() != null ) {
            if(criteria.getStock().equals("in_stock")) {
                predicates.add(criteriaBuilder.greaterThan(root.get("quantity"), 0));
            } else if(criteria.getStock().equals("out_of_stock")) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("quantity"), 0));
            }
        }

        if(criteria.getMinPrice() != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), criteria.getMinPrice()));
        }

        if(criteria.getMaxPrice() != null) {
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), criteria.getMaxPrice()));
        }

        if(criteria.getMinDiscountedPrice() != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("discountedPrice"), criteria.getMinDiscountedPrice()));
        }

        // Apply category predicates with OR between them
        if (criteria.getCategory() != null) {
            Predicate categoryPredicate = criteriaBuilder.or(
                    criteriaBuilder.equal(root.get("category").get("name"), criteria.getCategory()),
                    criteriaBuilder.equal(root.get("category").get("parentCategory").get("name"), criteria.getCategory()),
                    criteriaBuilder.equal(root.get("category").get("parentCategory").get("parentCategory").get("name"), criteria.getCategory())
            );
            predicates.add(categoryPredicate);
        }

        if (criteria.getSort() != null) {
            List<Order> orders = new ArrayList<>();
            if (criteria.getSort().equals("price_asc")) {
                orders.add(criteriaBuilder.asc(root.get("price")));
            } else if (criteria.getSort().equals("price_desc")) {
                orders.add(criteriaBuilder.desc(root.get("price")));
            } else if (criteria.getSort().equals("name_asc")) {
                orders.add(criteriaBuilder.asc(root.get("title")));
            } else if (criteria.getSort().equals("name_desc")) {
                orders.add(criteriaBuilder.desc(root.get("title")));
            }
            query.orderBy(orders);
        }

//        if(criteria.getCompanyName()!=null) {
//            predicates.add(cb.like(companyName, "%"+criteria.getCompanyName()+"%"));
//        }
//        if(criteria.getPeriod()!=null) {
//            predicates.add(cb.equal(period, criteria.getPeriod()));
//        }
//        if(criteria.getTravelStatus()!=null) {
//            predicates.add(cb.equal(travelStatus, criteria.getTravelStatus()));
//        }
//        if(criteria.getTravelType()!=null) {
//            predicates.add(cb.equal(travelType, criteria.getTravelType()));
//        }
//        if(criteria.getLastName()!=null ) {
//            predicates.add(cb.like(lastName, "%"+criteria.getLastName()+"%"));
//        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
    }
}
