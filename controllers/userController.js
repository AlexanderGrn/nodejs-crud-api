//@ts-check

import { findAll, findUser } from '../models/userModel.js';

async function getUsers(request, response) {
    try {
        const users = await findAll();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    } catch (err) {
        console.log(err);
    }
}

async function getUser(request, response, userId) {
    try {
        const user = await findUser(userId);
        if (!user) {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User not found" }));
        } else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(user));
        }
    } catch (err) {
        console.log(err);
    }
}

export {
    getUsers,
    getUser
}