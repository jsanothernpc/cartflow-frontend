# CartFlow - E-Commerce Frontend

CartFlow is a full-stack e-commerce application that provides users with a complete online shopping experience, including user authentication, product browsing, cart management, checkout, Razorpay test payments, order confirmation emails, and an AI-powered shopping chatbot.

This repository contains the **React frontend** of the CartFlow application.

## Live Demo

🌐 **Live Application:**  
https://avenue-von-blond-homeless.trycloudflare.com

> The live demo is hosted using a Cloudflare Quick Tunnel. The URL may change if the tunnel is recreated or restarted.

## Related Repository

🔗 **Backend Repository:**  
https://github.com/jsanothernpc/cartflow-backend

---

## Features

- User registration and login
- User authentication
- Product listing and browsing
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
- REST API integration with Spring Boot backend services

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

### Backend and Integrations

- Spring Boot
- REST APIs
- JWT-based authentication
- MySQL hosted on Amazon RDS
- Razorpay Payment Gateway
- Email Service
- AI Chat API

### Deployment and Infrastructure

- AWS EC2
- Nginx
- Amazon RDS
- Cloudflare Quick Tunnel

---

## Application Architecture

```text
                         User Browser
                              |
                            HTTPS
                              |
                              v
                    Cloudflare Quick Tunnel
                              |
                              v
                         Nginx :80
                              |
              +---------------+----------------+
              |                                |
              v                                v
       React Frontend                    Spring Boot APIs
       /var/www/cartflow                 |            |
                                         |            |
                                         v            v
                                  Ecommerce API   Payment API
                                     :8086            :8087
                                         |            |
                                         v            v
                                    Amazon RDS    Razorpay API
                                         |
                                         v
                                  Email / AI APIs
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

> The exact folder structure may vary as the project evolves.

---

## API Configuration

The frontend communicates with the backend through relative API paths. This allows the application to work behind the Nginx reverse proxy without hardcoding the EC2 public IP address in the frontend source code.

### Ecommerce API

The ecommerce backend is accessed through the `/api` path.

```javascript
const API_URL = "/api";
```

Example API routes:

```text
/api/products
/api/users
/api/cart
/api/orders
```

### AI API

The AI chatbot uses the following API path:

```javascript
const API_URL = "/api/ai/chat/completions";
```

### Payment API

The payment service is accessed through the Nginx reverse proxy:

```text
/payment-api/
```

Nginx forwards payment requests to the Spring Boot payment service running internally on port `8087`.

---

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/jsanothernpc/cartflow-frontend.git
```

### Navigate to the Project Directory

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

The frontend is deployed on an AWS EC2 instance and served using Nginx.

### Deployment Process

1. Install project dependencies.
2. Build the React application using Vite.
3. Generate the production files in the `dist` directory.
4. Upload the production files to the EC2 instance.
5. Serve the frontend using Nginx.
6. Configure Nginx as a reverse proxy for the backend services.
7. Use Cloudflare Quick Tunnel to provide HTTPS access to the application.

### Production Frontend Directory

```text
/var/www/cartflow
```

### Nginx Responsibilities

Nginx is responsible for:

- Serving the React static files
- Forwarding ecommerce API requests to the ecommerce backend
- Forwarding payment API requests to the payment backend
- Supporting React client-side routing
- Acting as the main entry point for the deployed application

---

## Security Notes

- Private API keys and credentials must not be committed to GitHub.
- Environment files containing secrets should be excluded using `.gitignore`.
- Database credentials should be stored securely on the server.
- Razorpay secret keys should never be exposed in frontend code.
- Backend services are accessed through Nginx rather than being publicly exposed.
- AWS access keys and private SSH keys must not be committed to the repository.

---

## Future Improvements

- Add product reviews and ratings
- Add wishlist functionality
- Add order history
- Add product pagination
- Add automated frontend deployment using GitHub Actions
- Configure a permanent custom domain
- Add automated frontend testing
- Improve UI/UX and accessibility
- Add advanced product filtering and sorting

---

## Author

**Ayushman Pathak**

GitHub:  
https://github.com/jsanothernpc