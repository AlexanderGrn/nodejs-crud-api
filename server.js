//@ts-check

import http from 'http';
import { } from 'dotenv/config';
import {
    getUsers,
    getUser,
    createUser,
    updateUser
} from './controllers/userController.js';

// const users = [
//     {
//         id: 1,
//         username: 'Aaa',
//         age: 21,
//         hobbies: []

//     },
//     {
//         id: 2,
//         username: 'Bbb',
//         age: 25,
//         hobbies: ['sport', 'dancing']

//     },
//     {
//         id: 3,
//         username: 'Ccc',
//         age: 35,
//         hobbies: ['fishing', 'cooking']

//     }
// ];

// const errors = {
//     '404': 'Rout not found',
//     '500': 'Server side error'
// };

const server = http.createServer((request, response) => {
    try {
        if (request.url === `/api/users` && request.method === 'GET') {
            getUsers(request, response);

        } else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === 'GET') {
            const userId = request.url.split('/')[3];
            getUser(request, response, userId);

        } else if (request.url === '/api/users' && request.method === 'POST') {
            reateUser(request, response);

        } else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === 'PUT') {
            const userId = request.url.split('/')[3];
            updateUser(request, response, userId);

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
