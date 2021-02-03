//index.js
console.log("Hello World!")

const os = require('os')
const chalk = require('chalk')
const express = require('express')
const app = express()

//middleware secara manual
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}

app.use(logger)

app.get("/", (req, res) => {
    // console.log(req.url);
    res.send('Hello World')
})

// app.get("/nilai", (req, res) => {
//     console.log(req.url);
//     res.send("Nilai")
// })

app.get("/products", (req, res) => {
    res.json(["Apple", "Redmi", "Samsung"])
})

app.get("/orders", (req, res) => {
    res.json([
        {
            id: 1,
            paid: false,
            user_id: 1
        }, {
            id: 2,
            paid: false,
            user_id: 1
        }
    ])
})

app.listen(3000, () => console.log("Server Ready!"))
// console.log('Free Memory: ', os.freemem());
// console.log(chalk.red('Hello World!'));