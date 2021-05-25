const { json } = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs')

app.get('/listUsers', (req, res)=> {
    fs.readFile(__dirname+"/"+"users.json", 'utf-8', (err, data)=> {
        console.log( data );
        res.end( data );
    })
})

app.post('/add-user', (req, res)=> {
    fs.readFile(__dirname+"/"+"users.json", "utf-8", (err,data)=> {
        data = JSON.parse(data);
        let length = Object.keys(data).length;
        data[`user${length+1}`] = user[`user${length+1}`];
        console.log( data );
        res.end( JSON.stringify(data));
    })
})

app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

const server = app.listen(3000, ()=> {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://%s:%s", host, port)
})