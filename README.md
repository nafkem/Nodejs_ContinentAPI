DynamicExpAPI - Express API by [Your Name]
Welcome to DynamicExpAPI, a personal project built using Node.js and Express.js. This project demonstrates how to create and manage a basic 
RESTful API that handles various HTTP methods like GET, POST, PUT, and DELETE, with dynamic routing and parameter handling. 
The project is a part of my journey in backend development and API design.

Project Overview
The DynamicExpAPI allows users to interact with a set of endpoints that handle different HTTP requests. The API accepts data through query parameters,
path parameters, and request bodies, making it easy to create, retrieve, update, and delete data in a dynamic way.

Features
Basic Routing: A root endpoint (/) that returns a greeting message.
Dynamic Query Handling: Supports GET requests with query parameters (name and age).
Dynamic Path Parameters: Handles GET requests that take an ID as a path parameter to fetch data by ID.
POST Requests: Allows users to submit data through the request body (name and age).
PUT Requests: Update existing records based on ID, with data passed in the request body.
DELETE Requests: Delete records by their ID.
API Endpoints
Root Route

GET /
Description: Returns a simple greeting message.
Example Request: GET http://localhost:3000/


GET /api/data
Description: Returns a personalized message based on name and age passed as query parameters.
Example Request: GET http://localhost:3000/api/data?name=John&age=30
GET by ID

GET /api/data/
Description: Fetches data using a dynamic id passed in the URL, and optionally name and age as query parameters.
Example Request: GET http://localhost:3000/api/data/123?name=John&age=30

POST Route

POST /api/data
Description: Allows users to send data (name and age) in the request body.

POST http://localhost:3000/api/data
PUT Route (Update by ID)

PUT /api/data/
Description: Updates an existing record based on the id and accepts data (name and age) from the request body.

DELETE Route (Delete by ID)

DELETE /api/data/
Description: Deletes a record based on the dynamic id passed in the URL.

Technologies Used
Node.js: JavaScript runtime used to run the backend server.
Express.js: Web framework for creating the API and handling routes.
Thunder Client: Used for testing the API routes.

Getting Started
Prerequisites
Ensure you have Node.js installed on your machine.
Installation
Clone this repository:

git clone https://github.com/yourusername/DynamicExpAPI.git

Navigate into the project directory:
bcd DynamicExpAPI
Install the dependencies:

npm install
Running the API
To start the server:

node index.js
The API will start running at http://localhost:3000/.

Testing the API
You can test the API endpoints using Thunder Client, Postman.
Example:
thunder client http://localhost:3000/api/data?name=John&age=30


Project Structure

.
├── index.js           # Main server file where routes are defined
├── package.json       # Project dependencies and scripts
└── README.md          # Project description and instructions
