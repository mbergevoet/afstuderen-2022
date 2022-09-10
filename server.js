require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
// var bodyParser = require('body-parser')

// const questions = require('./static/json/questions.json');
// const { authUser } = require('./helpers/authUser');
// const { getCourseData } = require('./helpers/getCourseData');
// const { addToJson } = require('./helpers/addToJson');
// const { surveyCompleted } = require('./helpers/surveyCompleted');

app
    .use(express.static(`${__dirname}/static`))
    .use(express.urlencoded({ extended: true }))
    .set('view engine', 'ejs')
    .set('views', path.join(`${__dirname}/views`))
    // .get('/', (req, res) => {
    //     res.render('pages/home.ejs')
    // })
    // .get('/home/', (req, res) => {
    //     res.render('pages/home.ejs');
    //     // res.render('pages/home.ejs', { subjects: surveyCompleted(req.params.id)[0], id: req.params.id })
    // })
    .get('/', (req, res) => {
        res.render('pages/detail.ejs');
    })
    .listen(port, function () {
        console.log(`Server listening at http://localhost:${port}`)
    })