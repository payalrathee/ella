package com.estore.ella.dto;

import com.estore.ella.validations.CreateProductGroup;
import com.estore.ella.validations.UpdateProductGroup;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.hibernate.validator.constraints.Range;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Data
public class FiltersDto {

    private List<String> brands;

    private List<String> category;

    @Pattern(regexp = "^(in_stock|out_of_stock)?$", message = "Stock must be either in_stock or out_of_stock")
    private String stock;

    @Pattern(regexp = "^(name_desc|name_asc|price_desc|price_asc|date_asc|date_desc|discount_asc|discount_desc)?$", message = "Sort must be price_asc, price_desc, name_asc or name_desc")
    private String sort;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    private Double minPrice;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    private Double maxPrice;

    @DecimalMin(value = "0.0", message = "Please enter a valid discount")
    private Double minDiscount;

    @Range(min = 0)
    private Integer count;

}
