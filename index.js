const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const course = require('./course.json')
const data = require('./data.json')
const hero = require('./Hero.json')
const blog = require('./blog.json')
const faq = require('./faq.json')


app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Coursera !')
})

app.get('/hero', (req, res) => {
    res.send(hero)
})

app.get('/blog', (req, res) => {
    res.send(blog)
})

app.get('/faq', (req, res) => {
    res.send(faq)
})

app.get('/course', (req, res) => {
    res.send(course)
})



app.get('/categories', (req, res) => {
    res.send(data)
})


app.get('/category/:category', (req, res) => {
    const category = (req.params.category);

    if (category === "All Courses") {
        res.send(course)
    }
    else {
        const allCourse = course.filter(item => item.category === category) || {};
        res.send(allCourse);
    }

})

app.get('/course/:coursename', (req, res) => {
    const coursename = (req.params.coursename);
    const all = course.find(item => item.title === coursename) || {};
    res.send(all);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})