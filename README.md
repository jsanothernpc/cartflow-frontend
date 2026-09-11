# CartFlow - E-Commerce Frontend

CartFlow is a full-stack e-commerce application that provides users with a complete online shopping experience, including product browsing, authentication, cart management, checkout, Razorpay test payments, order confirmation emails, and an AI-powered chatbot.

This repository contains the **React frontend** of the CartFlow application.

## Live Demo

🌐 **Live Application:**  
https://avenue-von-blond-homeless.trycloudflare.com

> The live demo is hosted using a Cloudflare Quick Tunnel. The URL may change when the tunnel is recreated or restarted.

## Related Repository

🔗 **Backend Repository:**  
Add your backend GitHub repository link here.

---

## Features

- User registration and login
- Product listing and product browsing
- Product search and filtering
- Product details
- Add products to cart
- Update cart item quantities
- Remove products from cart
- Checkout flow
- Razorpay test payment integration
- Order confirmation
- Email confirmation after successful payment
- AI-powered shopping chatbot
- Responsive user interface
- API integration with Spring Boot backend services

---

## Tech Stack

### Frontend

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Axios
- React Router

### Backend Integration

- Spring Boot
- REST APIs
- JWT-based authentication
- MySQL / Amazon RDS
- Razorpay Payment Gateway
- Email Service
- AI Chat API

### Deployment

- AWS EC2
- Nginx
- Amazon RDS
- Cloudflare Quick Tunnel

---

## Application Architecture

```text
                         User Browser
                              |
                              | HTTPS
                              v
                    Cloudflare Quick Tunnel
                              |
                              v
                         Nginx :80
                              |
              +---------------+----------------+
              |               |                |
              v               v                v
       React Frontend   Ecommerce API     Payment API
       /var/www/cartflow    :8086             :8087
                              |                |
                              v                v
                         Amazon RDS       Razorpay API
                              |
                              v
                       Email / AI Services
```

---

## Project Structure

```text
CartFlow-Frontend/
│
├── public/
│
├── src/
│   ├── api/
│   │   ├── aiApi.js
│   │   ├── axiosConfig.js
│   │   └── paymentAxios.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── Product-Images/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## API Configuration

The frontend communicates with the backend through relative API paths.

### Ecommerce API

```javascript
const API_URL = "/api";
```

Examples:

```text
/api/products
/api/users
/api/cart
/api/orders
```

### AI API

```javascript
const API_URL = "/api/ai/chat/completions";
```

### Payment API

The payment service is accessed through the Nginx reverse proxy:

```text
/payment-api/
```

Using relative API paths allows the same frontend build to work behind the deployed Nginx server without hardcoding the EC2 IP address in the frontend code.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/jsanothernpc/cartflow-frontend.git
```

Move into the project directory:

```bash
cd cartflow-frontend
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will usually be available at:

```text
http://localhost:5173
```

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

The generated production files will be placed inside the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The frontend is deployed on an AWS EC2 instance.

### Deployment Process

1. Build the React application locally.
2. Generate the production files using Vite.
3. Upload the contents of the `dist` directory to the EC2 instance.
4. Serve the frontend using Nginx.
5. Configure Nginx as a reverse proxy for the backend services.
6. Access the application through the Cloudflare HTTPS tunnel.

### Production Frontend Directory

```text
/var/www/cartflow
```

### Nginx Responsibilities

Nginx is responsible for:

- Serving the React static files
- Forwarding ecommerce API requests to port `8086`
- Forwarding payment API requests to port `8087`
- Supporting React client-side routing
- Acting as the entry point for the deployed application

---

## Security Notes

- Private API keys and credentials should not be committed to GitHub.
- Environment files containing secrets should be excluded using `.gitignore`.
- Backend services are accessed through Nginx instead of exposing their ports publicly.
- Database credentials and payment secrets are stored on the server and are not included in the frontend source code.

---

## Future Improvements

- Add product reviews and ratings
- Add wishlist functionality
- Add order history page
- Add product pagination
- Add automated frontend deployment using GitHub Actions
- Configure a permanent custom domain
- Add automated testing
- Improve UI/UX and accessibility

---

## Author

**Ayushman Pathak**

GitHub: [@jsanothernpc](https://github.com/jsanothernpc)