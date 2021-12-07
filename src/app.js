const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () => console.log("Listening on port localhost:3000"));

app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/index.html", (req, res) => res.sendFile(path.resolve(__dirname, "views","index.html")));
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "views","index.html")));
app.get('/register.html', (req,res) => res.sendFile(path.resolve(__dirname, "views","register.html")));
app.get('/login.html', (req,res) => res.sendFile(path.resolve(__dirname, "views","login.html")));
