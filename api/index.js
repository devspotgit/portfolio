

import express from "express"

const app = express()

// console.log(import.meta.dirname)

app.get("/", (req, res) => {


    res.send("Hi !")
})

export default app

