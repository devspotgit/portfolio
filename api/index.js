

import express from "express"

import fs from "fs"

import path from "path"

import home from "../src/templates.js"


const dir = import.meta.dirname

const { educations, experiences, contacts, socials  } = JSON.parse(fs.readFileSync(path.join(dir, "..", "src", "data.json"), "utf-8"))

const blogs = await fetch("https://blog.devspot.ca/getlatest/3").then(res => res.json())

const works = await fetch("https://websites.devspot.ca/getlatest/3").then(res => res.json())

const projects = await fetch("https://webapps.devspot.ca/getlatest/3").then(res => res.json())

const data = { educations, experiences, blogs, works, projects, contacts, socials }

const app = express()


app.use(express.json())


app.get("/", (req, res) => {


    res.send(home(data))
})


app.post("/contact", (req, res) =>{


})


export default app

