# Ella

Ella is an online cosmetic store offering a wide range of beauty products. The platform provides an interactive user interface and a comprehensive admin dashboard for managing products and categories.

![image](https://github.com/payalrathee/ella/assets/68552642/fcf78d9a-27ff-4bf6-9165-51dd933eaf15)

## Features

- Admin dashboard to manage products and categories
- Interactive UI for users
- Sorting and filtering of products
- Integrated payment gateway
- Secure authentication with JWT tokens

## Technologies Used

### Frontend
- HTML
- CSS
- React.js
- Tailwind CSS
- Material UI

### Backend
- Spring Boot
- Hibernate
- MySQL

### Security
- Spring Security
- JWT Token

## Installation

To install and run Ella locally, follow these steps:

### Prerequisites
- JDK 17
- STS/IntelliJ Idea
- MySQL
- Node.js
- npm (or yarn)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ella.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd ella/backend
    ```
3. Set up MySQL.
4. Update the `application.properties` file with your MySQL database credentials.
5. Build and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React application:
    ```bash
    npm start
    ```

## Usage

Once the application is running, you can:

1. Access the admin dashboard to manage products and categories.
2. Browse the interactive UI to view and purchase products.
3. Use sorting and filtering options to find specific products.
4. Complete purchases using the integrated payment gateway.

## Author

Ella was created by Payal Rathee.
