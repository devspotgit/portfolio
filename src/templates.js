

import fs from "fs"

import path from "path"

const dir = import.meta.dirname

const months = [ "January", "February", "March", "April", "May", "June", "July", "Aout", "September", "October", "November", "December" ]

const data = JSON.parse(fs.readFileSync(path.join(dir, "data.json"), "utf-8"))



function header(){

    return `
        <div class="header">
            <button><i class="fa-solid fa-bars"></i></button>
            <div>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Education</a>
                <a href="/">Experience</a>
                <a href="/">Blog</a>
                <a href="/">Project</a>
                <a href="/">Work</a>
                <a href="/">Contact</a>
            </div>
        </div>
    `
}

function hero(){

    return `
        <div class="home">
            <img src="">
            <div class="home-overlay"></div>
            <div class="home-info">
                <span>Hello, I'm</span>
                <span>Patrick</span>
                <span>Web Developper</span>
            </div>
        </div>
    `
}

function about(){

    return `
        <div class="about">
            <div class="img-wrap">
                <img src="">
            </div>
            <div>
                <span class="section-title">About Me</span>
                <p></p>
                <a href="/resume.pdf">DOWNLOAD CV</a>
            </div>
        </div>
    `
}

function education(){

    return `
        <div class="education">
            <span class="section-title">Education</span>
            <div class="education-header">
                ${
                    data.educations.map(educ => `
                        <button>${educ.program}</button>
                    `).join(" ")
                }
            </div>
            <div class="education-body">
                ${
                    data.educations.map(educ => `
                        <div class="education-item">
                            <span>
                                ${ months[+educ.startDate.split("-")[1] - 1] +", "+educ.startDate.split("-")[0] } - 
                                ${ months[+educ.endDate.split("-")[1] - 1] +", "+educ.endDate.split("-")[0] }
                            </span>
                            <span>${ educ.program }</span>
                            <p>${ educ.description }</p>
                            <span>${ educ.school }</span>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function experience(){

    return `
        <div class="experience">
        
        </div>
    `
}

function blog(){

    return `
        <div class="blog">
        
        </div>
    `
}

function project(){

    return `
        <div class="project">
        
        </div>
    `
}

function work(){

    return `
        <div class="work">
        
        </div>
    `
}

function contact(){

    return `
        <div class="contact">
        
        </div>
    `
}

function footer(){

    return `
        <div class="footer">
        
        </div>
    `
}

function home(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Devspot</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
            </head>
            <body>
        
            </body>
        </html>
    `
}

