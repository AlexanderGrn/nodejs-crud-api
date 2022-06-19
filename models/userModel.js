//@ts-check

import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        id: '1',
        username: 'Aaa',
        age: 21,
        hobbies: []

    },
    {
        id: '2',
        username: 'Bbb',
        age: 25,
        hobbies: ['sport', 'dancing']

    },
    {
        id: '3',
        username: 'Ccc',
        age: 35,
        hobbies: ['fishing', 'cooking']

    }
];

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

function findUser(userId) {
    return new Promise((resolve, reject) => {
        const user = users.find(obj => obj.id == userId);
        resolve(user);
    });
}

function createNewUser(user) {
    return new Promise((resolve, reject) => {
        const newUser = { id: uuidv4(), ...user };
        users.push(newUser);
        resolve(newUser);
    });
}

export {
    findAll,
    findUser,
    createNewUser
}
