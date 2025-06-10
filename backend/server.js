const express = require('express');
const cors = require('cors');
const connection = require('./db');
const app = express();
const ws = require('ws')
const http = require('http');


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-type'],
    credentials: true
}))

app.use(express.json());
// deploy http server on express application
const server = http.createServer(app);
// creating webSocket server
const wss = new ws.Server({ server });

// make interval query to database to find out the status of db
let dbStatus = true
let testConnectionDatabase = () => {
    connection.ping((err) => {
        let newStatus = err ? false : true;
        if (newStatus !== dbStatus) {
            dbStatus = newStatus;
            console.log(`Database connection status changed: ${dbStatus ? 'connected' : 'disconnected'}`);
            // Notify all connected WebSocket clients about the status change

            wss.clients.forEach(client => {
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify({ status: dbStatus ? 'connected' : 'disconnected' }));
                }
            })
        }
    })
};

// test every 5 seconds 
setInterval(testConnectionDatabase, 5000);
// WebSocket connection handler
wss.on('connection', (ws) => {
    console.log('WebSocket client connected');
    ws.send(JSON.stringify({ status: dbStatus ? 'connected' : 'disconnected' }))

    ws.on('close', () => {
        console.log('Client disconnected')
    })
    ws.on('error', (err) => {
        console.log('WebSocket error:', err)
    })
})

// app.get('/api/db_stat', (req, res) => {
//     stat_db == false ? res.json({ status: "database is not connected" }) :
//         res.json({ status: "connected" })
// })



app.get('/api/get-prof', (req, res) => {
    connection.query("SELECT * FROM profiles", (err, results) => {
        err ? console.log(err) :
            console.log(results)
    })
})
app.post('/api/add-prof', (req, res) => {
    let query = 'INSERT INTO profiles (name , lastName , birthday , p_code) VALUES( ? , ? , ? , ?)';
    let data = [req.body.name, req.body.lastName, req.body.birthday, req.body.p_code];

    connection.query(query, data, (err, result) => {
        err ? console.log(err) :
            console.log('Data inserted successfully', result)
        const response = {
            id: result.insertId,
            name: req.body.name,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            p_code: req.body.p_code
        }
        console.log(`ths response is ${response.id}${response.name}${response.lastName}${response.birthday}${response.p_code}`);
        res.json(response);
    })
})
app.post('/api/add-drug', (req, res) => {
    let query = 'INSERT INTO drugs (drugName , dosage , country , distro_company , exp_date , perscribe_Id) VALUES(? , ? , ? , ? , ? , ?)';
    let data = [req.body.drugName, req.body.dosage, req.body.country, req.body.distro_company, req.body.exp_date, req.body.perscribe_Id];
    connection.query(query, data, (err, result) => {
        err ? console.log('you have an error ', err) :
            console.log('Data inserted successfully', result);;
        let response = {
            drugID: result.insertId,
            drugName: req.body.drugName,
            dosage: req.body.dosage,
            country: req.body.country,
            distro_company: req.body.distro_company,
            exp_date: req.body.exp_date,
            perscribe_Id: req.body.perscribe_Id
        }
        console.log(`the response is ${response.id}${response.drugName}${response.dosage}
            ${response.country}${response.distro_company}${response.exp_date}${response.perscribe_Id}`);
        res.json(response);
    })
})


server.listen(3000, (err) => {
    err ? console.log(err) :
        console.log('server is running on port 3000 ...');
})


