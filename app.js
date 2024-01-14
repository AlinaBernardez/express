const express = require('express');
const users = require('./users')
const app = express();

const getSpecialty = (path) => {
    if(path == '/marketing') return users.filter(user => user.specialty == 'marketing')
    else if(path == '/developers') return users.filter(user => user.specialty == 'developers')
    else if(path == '/ventas') return users.filter(user => user.specialty == 'ventas')
    else if(path == '/QAs') return users.filter(user => user.specialty == 'QAs')
};

const renderUsers = (arr) => {
    return arr.map(item => {
        return `
        <div>
            <p><b>ID:</b> ${item.id}</p>
            <p><b>Name:</b> ${item.name}</p>
            <p><b>Age:</b> ${item.age}</p>
        </div>
        `
    })
};

const goHome = `<br><a href="/">Home</a><br>`

app.get('/', (req, res) => {
    res.send('<h1>HOME</h1><a href="/marketing">Marketing</a><br><a href="/developers">Developers</a><br><a href="/ventas">Ventas</a><br><a href="/QAs">QAs</a>')
});

app.get('/marketing', (req, res) => {
    let data = getSpecialty(req.path)
    let content = renderUsers(data)
    res.send(`<h1>Marketing:</h1>${goHome}${content}`)
});

app.get('/developers', (req, res) => {
    let data = getSpecialty(req.path)
    let content = renderUsers(data)
    res.send(`<h1>Developers:</h1>${goHome}${content}`)
});

app.get('/ventas', (req, res) => {
    let data = getSpecialty(req.path)
    let content = renderUsers(data)
    res.send(`<h1>Ventas:</h1>${goHome}${content}`)
});

app.get('/QAs', (req, res) => {
    let data = getSpecialty(req.path)
    let content = renderUsers(data)
    res.send(`<h1>QAs:</h1>${goHome}${content}`)
});

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>')
});

app.listen(3000, () => {
    console.log('Express server listening on port: http://localhost:3000')
});