export const sortOptions = [
    { name: 'Most Popular', href: '#', current: false },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

export const subCategories = [
    { name: 'Makeup', href: '#' },
    { name: 'Haircare', href: '#' },
    { name: 'Skin', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Fragrance', href: '#' },
]

export const filters = [
    {
        id: 'brand',
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

]

export const singleFIlter = [{
    id: 'discount',
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
]