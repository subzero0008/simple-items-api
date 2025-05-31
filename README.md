# simple-items-api
A RESTful API for managing items in memory using Node.js, Express, and TypeScript
## Features
- **GET `/items`**: Retrieve all items.
- **POST `/items`**: Add a new item (requires `name` in the request body).
- In-memory storage with UUID generation.
- TypeScript support for type safety.
Initialize a new Node.js project: npm init -y
Install production dependencies: npm install express@4.18.2 uuid
Install development dependencies: npm install --save-dev typescript ts-node nodemon @types/express@4.17.17 @types/node
Initialize TypeScript config: npx tsc --init
Add scripts to package.json: "scripts": {
  "dev": "nodemon src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
 Running the Project: Development mode npm run dev
Production mode: npm run build, npm start
!Testing the API: Using curl GET all items: curl http://localhost:3000/items
POST a new item:: curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Sample Item"}'
Using Postman: GET request:
http://localhost:3000/items
POST request with JSON body:
{
  "name": "Sample Item"
}
Expected Responses:
GET /items
[
  {
    "id": "123",
    "name": "Sample Item"
  }
]

POST /items (Success)
{
  "id": "123",
  "name": "Sample Item"
}
POST /items (Error)
{
  "error": "Name is required and must be a string"
}
Dependencies: Production
express: Web framework

uuid: Generate unique IDs

Development
typescript: Type checking

ts-node: Run TypeScript directly

nodemon: Auto-reload during development

@types/express: Type definitions for Express

@types/node: Type definitions for Node.js
 Example package.json Dependencies: 
 "dependencies": {
  "express": "^4.18.2",
  "uuid": "^9.0.0"
},
"devDependencies": {
  "@types/express": "^4.17.17",
  "@types/node": "^20.5.1",
  "nodemon": "^3.0.1",
  "ts-node": "^10.9.2",
  "typescript": "^5.2.2"
}








