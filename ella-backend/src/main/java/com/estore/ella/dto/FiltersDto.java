package com.estore.ella.dto;

import com.estore.ella.validations.CreateProductGroup;
import com.estore.ella.validations.UpdateProductGroup;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.data.repository.query.Param;

@Data
public class FiltersDto {

    @Size(min = 1, max = 50, message = "Brand must be between 1 and 50 characters")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Brand must be alphanumeric")
    private String brand;

    @Size(min = 1, max = 50, message = "Category must be between 1 and 50 characters")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Category must be alphanumeric")
    private String category;

    @Pattern(regexp = "^(in_stock|out_of_stock)$", message = "Stock must be either in_stock or out_of_stock")
    private String stock;

    @Pattern(regexp = "^(name_desc|name_asc|price_desc|price_asc)$", message = "Sort must be price_asc, price_desc, name_asc or name_desc")
    private String sort;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    private Double minPrice;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    private Double maxPrice;

    @DecimalMin(value = "0.0", message = "Please enter a valid price")
    private Double minDiscountedPrice;

}
