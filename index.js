const express = require('express');
const App = express();
const mongoose =require('mangoose')


App.use(express.json());

App.post('/api/data', (req, res) => {
    const data = req.body;
    // Perform processing on the data, such as saving it to a database
    res.send("vishal");
});
App.listen(6666, function () {
    console.log("connected to 6666")
})
