const express = require('express')
const app = express()
const port = 3000

const models = require('./models/index')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<a href="/province">Provices</a><br/><a href="/city">Cites</a>')
})

// Province Routes
app.get('/province', (req, res) => {
    let findProvince = models.Provinces.findAll().then(function(result) {
        if (result.length < 1) { 
            res.json({message: "Data not available"})
        }
        res.json(result)
    }) 
})
app.get('/province/:id', (req, res) => {
    let findProvince = models.Provinces.findOne({where: {id: req.params.id}}).then(function(result) {
        if (result.length < 1) { 
            res.json({message: "Data not available"})
        }
        res.json(result)
    })
})
app.post('/province', (req, res) => {
    let createProvince = models.Provinces.create(req.body)
    if(!createProvince) {
        console.error('Error!, Can not create user')
    }

    res.json(req.body)
})

// City Routes
app.get('/city', (req, res) => {
    let findCity = models.Cities.findAll().then(function(result) {
        if (result.length < 1) { 
            res.json({message: "Data not available"})
        }
        res.json(result)
    }) 
})
app.get('/city/:id', (req, res) => {
    let findCity = models.Cities.findOne({where: {id: req.params.id}}).then(function(result) {
        if (result.length < 1) { 
            res.json({message: "Data not available"})
        }
        res.json(result)
    })
})
app.post('/city', (req, res) => {
    let createCity = models.Cities.create(req.body)
    if(!createCity) {
        console.error('Error')
    }

    res.json(req.body)
})

app.listen(port, () => {
    console.log('Example app listen to port 3000')
})