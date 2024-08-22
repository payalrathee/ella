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

        if (criteria.getBrands() != null && !criteria.getBrands().isEmpty()) {
            CriteriaBuilder.In<String> inClause = criteriaBuilder.in(root.get("brand"));
            for (String brand : criteria.getBrands()) {
                inClause.value(brand);
            }
            predicates.add(inClause);
        }

        if(criteria.getStock() != null && !criteria.getStock().isBlank()) {
            if(criteria.getStock().equals("in_stock")) {
                predicates.add(criteriaBuilder.greaterThan(root.get("quantity"), 0));
            } else if(criteria.getStock().equals("out_of_stock")) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("quantity"), 0));
            }
        }

        if(criteria.getMinPrice() != null && criteria.getMinPrice() != 0) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), criteria.getMinPrice()));
        }

        if(criteria.getMaxPrice() != null && criteria.getMaxPrice() != 0) {
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), criteria.getMaxPrice()));
        }

        if(criteria.getMinDiscount() != null && criteria.getMinDiscount() != 0) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("discount"), criteria.getMinDiscount()));
        }

        // Apply category predicates with OR between them
//        if (criteria.getCategory() != null && !criteria.getCategory().isEmpty()) {
//            Predicate categoryPredicate = criteriaBuilder.or(
//                    criteriaBuilder.equal(root.get("category").get("name"), criteria.getCategory()),
//                    criteriaBuilder.equal(root.get("category").get("parentCategory").get("name"), criteria.getCategory()),
//                    criteriaBuilder.equal(root.get("category").get("parentCategory").get("parentCategory").get("name"), criteria.getCategory())
//            );
//            predicates.add(categoryPredicate);
//        }

        if (criteria.getSort() != null && !criteria.getSort().isBlank()) {
            List<Order> orders = new ArrayList<>();
            if (criteria.getSort().equals("price_asc")) {
                orders.add(criteriaBuilder.asc(root.get("price")));
            } else if (criteria.getSort().equals("price_desc")) {
                orders.add(criteriaBuilder.desc(root.get("price")));
            } else if (criteria.getSort().equals("name_asc")) {
                orders.add(criteriaBuilder.asc(root.get("title")));
            } else if (criteria.getSort().equals("name_desc")) {
                orders.add(criteriaBuilder.desc(root.get("title")));
            } else if (criteria.getSort().equals("date_asc")) {
                orders.add(criteriaBuilder.asc(root.get("createdAt")));
            } else if (criteria.getSort().equals("date_desc")) {
                orders.add(criteriaBuilder.desc(root.get("createdAt")));
            } else if (criteria.getSort().equals("discount_asc")) {
                orders.add(criteriaBuilder.asc(root.get("discount")));
            } else if (criteria.getSort().equals("discount_desc")) {
                orders.add(criteriaBuilder.desc(root.get("discount")));
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
