const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.static('public'));

app.listen(80);

console.log("Static NodeJS server started at 80");
