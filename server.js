import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Enable CORS for all routes

// Route to get the API key
app.get('/api/api-key', (req, res) => {
  const apiKey = process.env.VITE_API_KEY; // Ensure you have this in your .env file
  res.json({ apiKey });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
