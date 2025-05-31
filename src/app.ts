import express, { Application } from 'express';
import itemsRouter from './routes/items';

const app: Application = express();  // Create a new Express application instance
const PORT = process.env.PORT || 3000;  // Use the PORT environment variable or default to 3000

// Middleware to parse incoming JSON payloads in request bodies
app.use(express.json());

// Mount the items router on the '/items' path
// All requests to '/items' will be handled by itemsRouter
app.use('/items', itemsRouter);

// Health check endpoint to verify the server is running
app.get('/', (req, res) => {
  res.send('Items API is running');
});

// Start the server and listen for incoming requests on the specified PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
