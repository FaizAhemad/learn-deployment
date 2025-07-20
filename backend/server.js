const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Define allowed frontend origins
const allowedOrigins = [
    'http://localhost:5173',
    'https://your-frontend-project.vercel.app' // Replace with your actual deployed frontend URL
];

// ✅ Enable CORS with origin filtering
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or curl)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express server!' });
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
