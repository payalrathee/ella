import axios from "axios";
import { RESET_PRODUCT_LOADING, SET_PRODUCT_LOADING, SET_PRODUCT, SET_PRODUCTS, SET_FILTER, RESET_FILTER } from "./productActionTypes";
import { resetError, setError } from "../utility/utilityActions";
import axiosInstance from "../../axiosInstance";

export function setProduct(product) {
    return {
        type: SET_PRODUCT,
        payload: product
    }
}

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export function setFilters(filters) {
    return {
        type: SET_FILTER,
        payload: filters
    }
}

export function resetFilters() {
    return {
        type: RESET_FILTER,
        payload: {}
    }
}

export function setProductLoading() {
    return {
        type: SET_PRODUCT_LOADING,
        payload: true
    }
}

export function resetProductLoading() {
    return {
        type: RESET_PRODUCT_LOADING,
        payload: false
    }
}

export function filterProducts() {
    
    return async(dispatch, getState) => {
        let filters = getState().product.filters;
        let minPrice = 0;
        let maxPrice = 0;
        switch(filters.price) {
            case 'verylow':
                maxPrice = 500;
                break;
            case 'low':
                minPrice = 500;
                maxPrice = 2000;
                break;
            case 'medium':
                minPrice = 2000;
                maxPrice = 5000;
                break;
            case 'high':
                minPrice = 5000;
                maxPrice = 10000;
                break;
            case 'veryhigh':
                minPrice = 10000;
                maxPrice = 30000;
                break;
            case 'premium':
                minPrice = 30000;
                break;
        }

        const request_body = {
            brands: filters.brands,
            category: filters.category,
            minPrice: minPrice,
            maxPrice: maxPrice,
            minDiscount: filters.minDiscount,
            stock: filters.stock,
            sort: filters.sort
        }

        dispatch(resetError());
        dispatch(setProductLoading());
        try {

            const response = await axiosInstance.post("/filter/0", request_body);
            dispatch(setProducts(response.data));
            dispatch(resetProductLoading());
        } catch(error) {
            dispatch(setError({msg: error.response.data.message, code: error.response.status}));
            console.log("Error: ", error)
        }
    }
}

export function fetchProduct(id) {
    return async(dispatch) => {
        dispatch(resetError());
        dispatch(setProductLoading());
        try {

            const response = await axiosInstance.get(`/api/v1/product/${id}`);
            dispatch(setProduct(response.data));
            dispatch(resetProductLoading());
        } catch(error) {
            dispatch(setError({msg: error.response.data.message, code: error.response.status}));
            console.log("Error: ", error)
        }
    }
}