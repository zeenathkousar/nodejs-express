const rest = require('./restraurant.json');
const loca = require('./location.json');
const meal = require('./mealtypes.json');
const fs=require('fs');

const port = 3006;

const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/getAllRestaurants', function (req, res) {
    res.json(rest);
});

app.get('/getAllLocations', function (req, res) {
    res.json(loca);
});

app.get('/getAllMealTypes', function (req, res) {
    res.json(meal);
});

app.listen(port, () => {
    console.log("app is listeting on ports: " + port);
});

app.get('/getAllRestaurantsByLocations/:cities', (req, res) => {
    // console.log(req.params.city);
    const user = (req.params.cities);
    const rest = require('../models/restaurant.json');
    const var1 = rest.filter(rest => rest.city === user);
    res.json(var1);
});
app.post('/postRestaurants', function (req, res) {
    const var2 = req.body;
    console.log(var2);
    rest.push(var2);
    fs.writeFile('./restraurant.json', JSON.stringify(rest), (err, data) => {
        res.json({
            "message": "data posted successfully"
        })
    })

})