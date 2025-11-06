
A full-featured e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js).
It allows users to browse products, view product details, add items to the cart, and proceed with authentication and secure access using JWT.


---

🚀 Features

🧑‍💻 User Features

🔐 User Authentication using JWT (Login/Signup)

💾 Password encryption with bcrypt

🏠 Home Page showing all available products

📄 Single Product Page — View full details using dynamic params

🛒 Add to Cart / Remove from Cart

➕ Increment/Decrement Quantity in the cart

💰 Subtotal and Total Calculation

🧭 Filter Products by Category

☁️ Product Images stored in Cloudinary

🔁 Session Handling (using JWT stored in LocalStorage)
test razorpay payments



---

⚙️ Tech Stack

Area	Technology

Frontend	React.js, Axios, React Router DOM
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
Authentication	JWT (JSON Web Token), bcrypt
Image Storage	Cloudinary
Others	Middleware, CORS, dotenv



---

📦 Project Structure

MERN-Ecommerce/
│
├── backend/
│   ├── models/          # Mongoose models (User, Product, Cart)
│   ├── routes/          # API routes
│   ├── middleware/      # JWT verification, error handling
│   ├── controllers/     # Logic for routes
│   ├── server.js        # Express server entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components (Navbar, ProductCard, etc.)
│   │   ├── pages/       # Home, Product, Cart, Login, Signup
│   │   ├── context/     # State management (CartContext, AuthContext)
│   │   ├── App.js       # Main app router
│   │   └── index.js
│
├── .env                 # Environment variables
├── package.json
└── README.md


---

🔒 Authentication Flow

1. User signs up → Password hashed using bcrypt


2. On login → JWT generated and stored in localStorage


3. Protected routes (like cart) use JWT middleware to verify tokens




---

🕓 Future Improvements

admin panel







💡 Key Learnings

Implemented complete JWT authentication workflow

Built reusable React components

Used MongoDB for data persistence and Cloudinary for image storage

Gained experience in API integration, middleware handling, and state management



---

👨‍💻 Author

Saka Venkata Sai
Full Stack Developer | MERN | Crypto Projects | Problem Solver
sakavenkatasai@gmail.com


