


import { months, getDate, getName } from "./lib.js"


function header(){

    return `
        <div class="header on-resize">
            <button><i class="fa-solid fa-bars"></i></button>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Education</a>
            <a href="/">Experience</a>
            <a href="/">Blog</a>
            <a href="/">Project</a>
            <a href="/">Work</a>
            <a href="/">Contact</a>
        </div>
    `
}

function hero(){

    return `
        <div class="image-wrap hero">
            <img src="https://i.ibb.co/B2sL9xHR/nathan-da-silva-FO7k-Um-BYVi0-unsplash.jpg">
            <div class="hero-overlay"></div>
            <div class="hero-info">
                <span>Hello, I'm</span>
                <span>Patrick</span>
                <div class="title">
                    <span></span>
                    <span>Web Developper</span>
                    <span></span>
                </div>
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
                <p>I’m a passionate Web Developer and IT professional with a strong foundation in building modern, efficient, and user-focused digital solutions. I specialize in developing responsive web applications, integrating APIs, and solving technical problems with clean, maintainable code.</p>
                <a href="/resume.pdf">DOWNLOAD CV</a>
            </div>
        </div>
    `
}

function education(educations){

    return `
        <div class="education">
            <span class="section-title">Education</span>
            <div class="education-header">
                ${
                    educations.map(educ => `
                        <button>${educ.program}</button>
                    `).join(" ")
                }
            </div>
            <div class="education-body">
                ${
                    educations.map(educ => `
                        <div class="education-item">
                            <span>
                                ${ months[+educ.startDate.split("-")[1] - 1] +", "+educ.startDate.split("-")[0] } - 
                                ${ months[+educ.endDate.split("-")[1] - 1] +", "+educ.endDate.split("-")[0] }
                            </span>
                            <span>${ educ.school }</span>
                            <p>${ educ.description }</p>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function experience(experiences){

    return `
        <div class="experience">
            <span class="sectcion-title">Experiences</span>
            <div class="experience-list">
                ${
                    experiences.map(exp => `
                        <div class="experience-item">
                            <div class="experience-item-header">
                                <span>
                                    ${ months[+exp.startDate.split("-")[1] - 1] +", "+exp.startDate.split("-")[0] } - 
                                    ${ months[+exp.endDate.split("-")[1] - 1] +", "+exp.endDate.split("-")[0] }
                                </span>
                                <span>${ exp.company }</span>
                                <span>${ exp.position }</span>
                            </div>
                            <div class="experience-item-body">
                                <p>${ exp.description }</p>
                            </div>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function blog(blogs){

    return `
        <div class="blog">
            <span class="section-title">My Latest Blog</span>
            <a href="https://blog.devspot.ca">Visit my blog</a>
            <div class="blog-list">
                ${
                    blogs.map(item => `
                        <div class="blog-item">
                            <span>${getDate(item.date)}</span>
                            <span>${getName(item.slug)}</span>
                            <p>${item.preview}</p>
                            <a href="https://blog.devspot.ca/posts/${item.slug}">Read more</a>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function project(projects){

    return `
        <div class="project">
            <span class="section-title">My Latest Projects</span>
            <a href="https://webapps.devspot.ca">Visit my project site</a>
            <div class="project-list">
                ${
                    projects.map(item => `
                        <div class="project-item">
                            <div class="project-item-header">
                                <div class="image-wrap">
                                    <img src="${item.image}">
                                </div>
                                <a href="${item.url}">Try the app</a>
                            </div>
                            <div class="project-item-body">
                                <p>${item.description}</p>
                            </div>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function work(works){

    return `
        <div class="work">
            <div>
                <span class="section-title">My Latest Work</span>
                <a href="https://websites.devspot.ca">Explore more websites</a>
            </div>
            <div class="work-list">
                ${
                    works.map(item => `
                        <div class="work-item">
                            <div class="image-wrap">
                                <img src="${item.image}">
                            </div>
                            <span>${getName(item.slug)}</span>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function contact(){

    return `
        <div class="contact">
        
        </div>
    `
}

function footer(socials){

    return `
        <div class="footer">
            ${
                socials.map(item => `
                    <a href="${item.url}"><i class="${item.class}"></i></a>
                `).join(" ")
            }
        </div>
    `
}

function home({ educations, experiences, blogs, works, projects, contacts, socials }){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Devspot</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="/css/style.css"
            </head>
            <body>
                <div class="root">
                    ${ header() }
                    ${ hero() }
                    ${ about() }
                    ${ education(educations) }
                    ${ experience(experiences) }
                    ${ blog(blogs) }
                    ${ project(projects) }
                    ${ work(works) }
                    ${ contact(contacts) }
                    ${ footer(socials) }
                    <div class="page-overlay on-resize"></div>
                </div>
                <script src="/js/main.js" type="module"></script>
            </body>
        </html>
    `
}


export default home



