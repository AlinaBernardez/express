const express = require('express');
const users = require('./users')
const app = express();

const getSpecialty = (specialty) => {
    return users.filter(user => user.specialty == specialty)
};

const renderUsers = (arr) => {
    return arr.map(item => {
        return `
        <div>
            <p><b>ID:</b> ${item.id}</p>
            <p><b>Name:</b> ${item.name}</p>
            <p><b>Age:</b> ${item.age}</p>
        </div>
        <hr>
        `
    }).join('')
};

const goHome = `<br><a href="/">Home</a><br>`

app.get('/', (req, res) => {
    res.send('<h1>HOME</h1><a href="/marketing">Marketing</a><br><a href="/developers">Developers</a><br><a href="/ventas">Ventas</a><br><a href="/QAs">QAs</a>')
});

app.get('/marketing', (req, res) => {
    let data = getSpecialty('marketing')
    let content = renderUsers(data)
    res.send(`<h1>Marketing:</h1><br>Total: ${data.length}<br>${goHome}${content}`)
});

app.get('/developers', (req, res) => {
    let data = getSpecialty('developers')
    let content = renderUsers(data)
    res.send(`<h1>Developers:</h1><br>Total: ${data.length}<br>${goHome}${content}`)
});

app.get('/ventas', (req, res) => {
    let data = getSpecialty('ventas')
    let content = renderUsers(data)
    res.send(`<h1>Ventas:</h1><br>Total: ${data.length}<br>${goHome}${content}`)
});

app.get('/QAs', (req, res) => {
    let data = getSpecialty('QAs')
    let content = renderUsers(data)
    res.send(`<h1>QAs:</h1><br>Total: ${data.length}<br>${goHome}${content}`)
});

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>')
});

app.listen(3000, () => {
    console.log('Express server listening on port: http://localhost:3000')
});