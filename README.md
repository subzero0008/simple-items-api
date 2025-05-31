# Simple Items API

A RESTful API for managing items in memory using Node.js, Express, and TypeScript.

---

## 
- **GET `/items`**: Retrieve all stored items.
- **POST `/items`**: Add a new item (requires `name` in the request body).
- In-memory storage with auto-generated UUIDs.
- TypeScript support for type safety.
- Error handling for invalid requests.

---

##  Setup

### Prerequisites
- Node.js (v18 or later)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/simple-items-api.git
   cd simple-items-api
### Install dependencies:
# Production dependencies
npm install express@4.18.2 uuid

### Development dependencies
npm install --save-dev typescript ts-node nodemon @types/express@4.17.17 @types/node
Initialize TypeScript:
npx tsc --init
###Configuration:Update package.json scripts:
"scripts": {
  "dev": "nodemon src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
 ### Running the Project
 Development Mode (Auto-reload):  npm run dev
Production Mode: npm run build
npm start
### TESTING  the API!!! Using curl, Get all items: curl http://localhost:3000/items 
Add a new item: curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Sample Item"}'     
### Using Postman
GET Request:
URL: http://localhost:3000/items
Method: GET

POST Request:
URL: http://localhost:3000/items
Method: POST
Headers: Content-Type: application/json
Body (raw JSON): {
  "name": "Sample Item"
}
 Expected Responses: Success Responses
GET /items: [
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Sample Item"
  }
]
POST /items (Success): {
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Sample Item"
}
Error Responses
POST /items (Invalid Input): {
  "error": "Name is required and must be a string"
}

### Dependencies
Production
express@4.18.2: Web framework

uuid: Unique ID generation

Development
typescript: Type checking

ts-node: Run TypeScript directly

nodemon: Auto-reload during development

@types/express@4.17.17: Type definitions

@types/node: Node.js type definitions
Example package.json{
  "dependencies": {
    "express": "4.18.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@types/express": "4.17.17",
    "@types/node": "^20.5.1",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.2.2"
  }
}
 


