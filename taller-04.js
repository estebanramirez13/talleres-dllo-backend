const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const usersFilePath = './24-taller-04-datos.json';
let users = require(usersFilePath);

const saveUsersToFile = () => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};


app.get('/users/hobby', (req, res) => {
    const { hobby } = req.query;
    const filteredUsers = users.filter(user => user.hobbies.includes(hobby));
    res.json(filteredUsers);
});

app.get('/users/exists', (req, res) => {
    const { codigo } = req.query;
    const exists = users.some(user => user.codigo === codigo);
    res.json({ exists });
});


app.get('/users/hobby/count', (req, res) => {
    const { hobby } = req.query;
    const count = users.filter(user => user.hobbies.includes(hobby)).length;
    res.json({ count });
});

app.get('/users/is-free', (req, res) => {
    const freeUsers = users.filter(user => user.hobbies.length < 3);
    res.json(freeUsers);
});

app.post('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body;
    const user = users.find(user => user.codigo === codigo);

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (user.hobbies.length >= 3) {
        return res.status(400).json({ message: 'El usuario ya tiene 3 hobbies' });
    }

    user.hobbies.push(hobby);
    saveUsersToFile();
    res.json({ message: 'Hobby agregado con éxito', user });
});

app.post('/users', (req, res) => {
    const { nombre, apellido, codigo, hobbies } = req.body;

    if (!nombre || !apellido || !codigo || !hobbies || hobbies.length < 2) {
        return res.status(400).json({ message: 'El usuario debe tener al menos dos hobbies' });
    }

    const newUser = { nombre, apellido, codigo, hobbies };
    users.push(newUser);
    saveUsersToFile();
    res.json({ message: 'Usuario agregado con éxito', newUser });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});