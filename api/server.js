/***********IMPORTS************/
/*import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Int32 } from 'mongodb';*/

const http = require('http');
var https = require('https');


const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const SocketServer = require('ws').Server;

var redis = require('redis');
var publisher = redis.createClient();
var subscriber = redis.createClient();



//const dbConfig = require('./config/db.config');

//const express = require("express");
//const bodyParser = require("body-parser");
//const cors = require("cors");

const app = express();
//Localization support
var fs = require('fs');


console.log('Adding  routes');
// routes


require('./routes/engineroutes')(app);
var corsOptions = {
  //origin: "http://localhost:3000"
  origin: true
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to WMSimulator Service." });
});


//var privateKey  = fs.readFileSync('sslcert/key.pem');
//var certificate = fs.readFileSync('sslcert/cert.pem');

//var options = {key: privateKey, cert: certificate};
//file upload reated


// set port, listen for requests
const PORT = process.env.PORT || 5000;


var server = app.listen(PORT, () => {
  
console.log("-----------------------------------");
console.log("RESTFul service + WebSocket");
console.log("-----------------------------------");
  console.log(`Server is running on port ${PORT}.`);
  console.log('Routes added');
  console.log('Subsribed to notification messages from Redis');
  subscriber.subscribe('notification');
});

//WebSocket server
const wss = new SocketServer({ server });

//init Websocket ws and handle incoming connect requests
wss.on('connection', function connection(ws) {
    console.log("connection ...");

    //on connect message
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        connectedUsers.push(message);
    });

    ws.send('something');

    subscriber.on('message', function (channel,message) {
        console.log('message');
        ws.send(message);
       });


});




