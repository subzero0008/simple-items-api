import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../models/item';

const router = Router();  // Create a new Express router instance

const items: Item[] = []; // In-memory array to store items

// GET /items
// Respond with the full list of items currently stored in memory
router.get('/', (req: Request, res: Response<Item[]>) => {
  res.status(200).json(items);
});

// POST /items
// Receive a new item (with a "name" field) in the request body, validate it,
// create a new item with a unique id, add it to the in-memory list,
// and respond with the newly created item
router.post('/', (req: Request<{}, {}, { name: string }>, res: Response<Item | { error: string }>) => {
  const { name } = req.body;

  // Validate that "name" exists and is a string
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  // Create a new item with a generated unique UUID and trimmed name
  const newItem: Item = {
    id: uuidv4(),
    name: name.trim()
  };

  // Add the new item to the in-memory items array
  items.push(newItem);

  // Respond with status 201 (Created) and the new item
  res.status(201).json(newItem);
});

export default router;  // Export the router to be used in the main app
