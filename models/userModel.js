//@ts-check

const users = [
    {
        id: 1,
        username: 'Aaa',
        age: 21,
        hobbies: []

    },
    {
        id: 2,
        username: 'Bbb',
        age: 25,
        hobbies: ['sport', 'dancing']

    },
    {
        id: 3,
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

function findUser(id) {
    return new Promise((resolve, reject) => {
        const user = users.find(obj => obj.id == id);
        resolve(user);
    });
}

export {
    findAll,
    findUser
}