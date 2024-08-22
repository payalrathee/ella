export const sortOptions = [
    { name: 'Price: Low to High', value: 'price_asc', current: true },
    { name: 'Price: High to Low', value:'price_desc', current: false },
]

export const subCategories = [
    { name: 'Makeup', href: '#' },
    { name: 'Haircare', href: '#' },
    { name: 'Skin', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Fragrance', href: '#' },
]

export const productFilters = [
    {
        id: 'brands',
        name: 'Brand',
        options: [
            { value: 'lakme', label: 'Lakme', checked: false },
            { value: 'maybelline', label: 'Maybelline', checked: false },
            { value: 'kay', label: 'Kay Beauty', checked: false },
            { value: 'loreal', label: 'Loreal', checked: false },
            { value: 'lotus', label: 'Lotus', checked: false },
            { value: 'nivea', label: 'Nivea', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'lipsticks', label: 'Lipstick', checked: false },
            { value: 'foundation', label: 'Foundation', checked: false },
            { value: 'bleech', label: 'Bleech', checked: false },
            { value: 'mascara', label: 'Mascara', checked: false },
            { value: 'kajal', label: 'Kajal', checked: false },
        ],
    },

]

export const singleFIlter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: 'verylow', label: 'Rs. 0 to Rs. 500', checked: false },
            { value: 'low', label: 'Rs. 500 to Rs. 2000', checked: false },
            { value: 'medium', label: 'Rs. 2000 to Rs. 5000', checked: false },
            { value: 'high', label: 'Rs. 5000 to Rs. 10000', checked: false },
            { value: 'veryhigh', label: 'Rs. 10000 to Rs. 30000', checked: false },
            { value: 'premium', label: 'Rs. 30000 and above', checked: false },
        ],
    },

    {
        id: 'minDiscount',
        name: 'Discounts',
        options: [
            { value: '10', label: '10% and above', checked: false },
            { value: '20', label: '20% and above', checked: false },
            { value: '30', label: '30% and above', checked: false },
            { value: '40', label: '40% and above', checked: false },
            { value: '50', label: '50% and above', checked: false },
            { value: '60', label: '60% and above', checked: false },
            { value: '70', label: '70% and above', checked: false },
        ],
    },
    {
        id: 'stock',
        name: 'Stock',
        options: [
            { value: 'in_stock', label: 'In stock', checked: false },
            { value: 'out_of_stock', label: 'Out of stcok', checked: false },
        ],
    },
]