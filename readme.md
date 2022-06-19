# Detailed instructions )

## Install

Install dependencies
```bash
npm install
```

## Run

Production mode
```bash
npm run start:prod
```

Development mode
```bash
npm run start:dev
```
In POSTMAN or THUNDER CLIENT use methods GET, POST, PUT, DELETE to get, create, update or delete `User` respectively.

 Users are stored as `objects` that have following properties:
    - `id` — unique identifier (`string`, `uuid`) generated on server side;
    - `username` — user's name (`string`, **required**);
    - `age` — user's age (`number`, **required**);
    - `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**).

## URL

Use URL `http://localhost:5001/api/users/[${userId}]`

`userId` - optional parameter for GET, required for PUT and DELETE - for access to specific `User` by its ID.

## Port

You can change `PORT` in `.env` file or in `server.js` file directly. 