//@ts-check

import http from 'http';
import { } from 'dotenv/config';
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from './controllers/userController.js';


const server = http.createServer((request, response) => {
    try {
        if (request.url === `/api/users` && request.method === 'GET') {
            getUsers(request, response);

        } else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === 'GET') {
            const userId = request.url.split('/')[3];
            getUser(request, response, userId);

        } else if (request.url === '/api/users' && request.method === 'POST') {
            createUser(request, response);

        } else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === 'PUT') {
            const userId = request.url.split('/')[3];
            updateUser(request, response, userId);

        } else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === 'DELETE') {
            const userId = request.url.split('/')[3];
            deleteUser(request, response, userId);

        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Rout not found" }));
        }
    } catch (err) {
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: "Server side error" }));
    }
});

const PORT = process.env.PORT || 5000;

// console.log(process.env.PORT);

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
