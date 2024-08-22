import { RESET_PRODUCT_LOADING, SET_PRODUCT_LOADING, SET_PRODUCT, SET_PRODUCTS, ADD_FILTER, REMOVE_FILTER, SET_FILTER, RESET_FILTER } from "./productActionTypes";

const initState = {
    products: [],
    product: {},
    filters: {
        brands: [],
        category: [],
        price: '',
        minDiscount: '',
        stock: '',
        sort: '',
    },
    loading: false
}

export default function(state = initState, action) {
    switch(action.type) {
        case SET_PRODUCTS: 
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case SET_PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case ADD_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.key]: action.payload.value
                }
            }
        case REMOVE_FILTER:
            const {[action.payload.key]: _, ...rest} = state;
            return rest;
        case SET_FILTER:
            return {
                ...state,
                filters: action.payload
            }
        case RESET_FILTER: 
            return {
                ...state,
                filters: {
                    brands: [],
                    category: [],
                    price: '',
                    minDiscount: '',
                    stock: 'in_stock',
                    sort: 'name_asc',
                },
            }
        case SET_PRODUCT_LOADING: 
            return {
                ...state,
                loading: true
            }
        case RESET_PRODUCT_LOADING: 
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}