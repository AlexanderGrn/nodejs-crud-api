//@ts-check

import {
    findAll,
    findUser,
    createNewUser,
    updUser
} from '../models/userModel.js';

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

async function createUser(request, response) {
    try {
        let body = "";

        request.on('data', (chunk) => {
            body += chunk.toString();
        })

        request.on('end', async () => {
            const { username, age, hobbies } = JSON.parse(body);
            const user = {
                username,
                age,
                hobbies
            }

            if (username
                && age
                && hobbies) {
                const newUser = await createNewUser(user);
                response.writeHead(201, { 'Content-Type': 'application/json' });
                return response.end(JSON.stringify(newUser));
            } else {
                response.writeHead(400, { 'Content-Type': 'application/json' });
                return response.end(JSON.stringify({ message: "User do not have required property" }));
            }
        });

    } catch (err) {
        console.log(err);
    }
}

async function updateUser(request, response, userId) {
    try {
        const user = await findUser(userId);

        if (!user) {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User not found" }));
        } else {
            let body = "";

            request.on('data', (chunk) => {
                body += chunk.toString();
            })

            request.on('end', async () => {
                const { username, age, hobbies } = JSON.parse(body);
                const userData = {
                    id: userId,
                    username: username || user.username,
                    age: age || user.username,
                    hobbies: hobbies || user.hobbies
                }
                const updatedUser = await updUser(userId, userData);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                return response.end(JSON.stringify(updatedUser));
            });
        }

    } catch (err) {
        console.log(err);
    }
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser
}