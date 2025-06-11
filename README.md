# devops-project
This project is a Node.js authentication backend service that uses JWT for authentication and MongoDB for user storage. It provides secure login functionality and middleware for protecting routes.

How to start:

1. Clone the project
2. Move to the devops-auth-back folder
3. Run npm install inside the folder
4. Create a .env file including a DB_CONNECTION(from mongoDb) and a JWT_SECRET variable
5. Run npm start


Available routes:

GET http://localhost/
GET http://localhost/api/_health
POST http://localhost/api/login (with a body {username: "user", password: "pass"}
GET http://localhost/api/cidr-to-mask (provide value)
GET http://localhost/api/mask-to-cidr (provide value)

If you want to create dummy users you can run inside the util folder the file createUsers.js

Note:
Run: npm test
to test the routes

