package com.estore.ella.dto;

import com.estore.ella.validations.CreateProductGroup;
import com.estore.ella.validations.UpdateProductGroup;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

@Data
public class ProductDto {

    @NotNull(groups = UpdateProductGroup.class)
    @Min(value = 0, groups = UpdateProductGroup.class)
    private Integer id;

    @NotNull(groups = CreateProductGroup.class)
    @NotBlank(message = "Title can't be empty", groups = CreateProductGroup.class)
    @Size(min = 1, max = 100, message = "Title must be between 1 and 100 characters", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Title must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String title;

    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Description must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String desc;

    @NotNull(groups = CreateProductGroup.class)
    @DecimalMin(value = "0.0", message = "Please enter a valid price", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private Double price;

    @DecimalMin(value = "0.0", message = "Please enter a valid price", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private Double discountedPrice;

    @NotNull(groups = CreateProductGroup.class)
    @Range(min = 0, max = 1000, message = "Please enter a valid quantity", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private Integer quantity;

    @Size(min = 1, max = 50, message = "Brand must be between 1 and 50 characters", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Brand must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String brand;

    @Size(min = 1, max = 30, message = "Color must be between 1 and 30 characters", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Color must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String color;

    @Size(min = 1, max = 50, message = "Category must be between 1 and 50 characters", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Category must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String topLevelCategory;

    @Size(min = 1, max = 50, message = "Category must be between 1 and 50 characters", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Category must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String SecondLevelCategory;

    @Size(min = 1, max = 50, message = "Category must be between 1 and 50 characters", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Category must be alphanumeric", groups = {CreateProductGroup.class, UpdateProductGroup.class})
    private String ThirdLevelCategory;

}
