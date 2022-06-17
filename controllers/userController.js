//@ts-check

import { findAll } from '../models/userModel.js';

async function getUsers(request, response) {
    try {
        const users = await findAll();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    } catch (err) {
        console.log(err);
    }
}

export {
    getUsers
}