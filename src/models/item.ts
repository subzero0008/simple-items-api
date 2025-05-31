// src/models/item.ts

// Define the structure of an Item object
// Each Item has a unique identifier 'id' and a 'name' property
export interface Item {
  id: string;   // Unique identifier for the item, typically a UUID string
  name: string; // Name of the item
}
