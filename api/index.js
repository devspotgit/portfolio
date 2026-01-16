

import express from "express"

import fs from "fs"

import path from "path"

import home from "../src/templates.js"

import nodemailer from "nodemailer"

import dotenv from "dotenv"

import { fileURLToPath } from "url"

import { dirname } from "path"

dotenv.config()


const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

const { educations, experiences, contacts, socials  } = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "src", "data.json"), "utf-8"))

const blogs = await fetch("https://blog.devspot.ca/getlatest/3").then(res => res.json())

const works = await fetch("https://websites.devspot.ca/getlatest/3").then(res => res.json())

const projects = await fetch("https://webapps.devspot.ca/getlatest/3").then(res => res.json())

const data = { educations, experiences, blogs, works, projects, contacts, socials }

const app = express()

const transporter = nodemailer.createTransport({
    
    service: "gmail",

    auth: {

        user: process.env.EMAIL,
        
        pass: process.env.PASS
    }
})

function options({name, phone, email, message}){

    return {
        
        from: process.env.EMAIL,
        
        to: process.env.EMAIL,
        
        subject: "new message",
        
        html: `<div>
            <div>Name: <b>${name}</b></div>
            <div>Phone: <b>${phone}</b></div>
            <div>Email: <b>${email}</b></div>
            <p>${message}</p>
        </div>`
    }

}


app.use(express.json())


app.get("/", (req, res) => {

    res.send(home(data))
})


app.post("/contact", (req, res) =>{

    const mailOptions = options(req.body)

    transporter.sendMail(mailOptions, function (error, info){

        if(!error) res.json({

            error: null
        })
        else{

            console.log(info)

            res.json({

                error: "error occured"
            })
        }
    })
})


export default app

