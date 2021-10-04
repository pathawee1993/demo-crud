const express = require('express');
var bodyParser = require('body-parser')
const {Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'postgres',
  port: 5433,
})
client.connect();

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/create', (req, apiRes) =>{
    console.log(req.body);
    client.query("INSERT INTO public.users (\"firstName\", \"lastName\") VALUES ('"+req.body.firstName+"', '"+req.body.lastName+"');", (err, res) => {
        console.log(err, res)
        client.end()
        if(err){
            apiRes.send(400,"something is incorrect!")
        }
        apiRes.send("user created")
    })
    
})

app.get('/read', (req, apiRes) =>{
    console.log(req.body);
    client.query("SELECT * from public.users;", (err, res) => {
        console.log(err, res)
        client.end()
        if(err){
            apiRes.send(400,"something is incorrect!")
        }
        apiRes.send(res)
    })
})

app.post('/update', (req, apiRes) =>{
    console.log(req.body);
    var pgCommand = "INSERT INTO public.users (\"id\", \"firstName\", \"lastName\") VALUES('"+req.body.id+"','"+req.body.firstName+"','"+req.body.lastName+"') ON CONFLICT (id) DO UPDATE SET \"firstName\" = '"+req.body.firstName+"', \"lastName\" = '"+req.body.lastName+"'";
    console.log(pgCommand);
    client.query(pgCommand, (err, res) => {
        console.log(err, res)
        client.end()
        if(err){
            apiRes.send(400,"something is incorrect!")
        }
        apiRes.send(res)
    })
})

app.post('/delete', (req, apiRes) =>{
    console.log(req.body);
    client.query("DELETE from public.users where \"id\" = "+req.body.id+";", (err, res) => {
        console.log(err, res)
        client.end()
        if(err){
            apiRes.send(400,"something is incorrect!")
        }
        apiRes.send(res)
    })
})

app.listen('3000', () =>{
    console.log('start server at port 3000');
})