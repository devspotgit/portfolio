


import { months, getDate, getName } from "./lib.js"


function header(){

    return `
        <div class="header on-resize">
            <button><i class="fa-solid fa-bars"></i></button>
            <a href="/" class="nav-item" section="hero">Home</a>
            <a href="/about" class="nav-item" section="about">About</a>
            <a href="/education" class="nav-item" section="education">Education</a>
            <a href="/experience" class="nav-item" section="experience">Experience</a>
            <a href="/blog" class="nav-item" section="blog">Blog</a>
            <a href="/project" class="nav-item" section="project">Project</a>
            <a href="/work" class="nav-item" section="work">Work</a>
            <a href="/contact" class="nav-item" section="contact">Contact</a>
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
        <div class="about on-resize">
            <div class="about-image-wrap">
                <div class="image-wrap">
                    <img src="https://i.ibb.co/TMBtgY4G/daniel-korpai-p-KRNx-Egu-Rg-M-unsplash.jpg">
                </div>
            </div>
            <div class="about-info">
                <div class="section-title">
                    <span>About Me</span>
                </div>
                <p>I’m a passionate Web Developer and IT professional with a strong foundation in building modern, efficient, and user-focused digital solutions. I specialize in developing responsive web applications, integrating APIs, and solving technical problems with clean, maintainable code.</p>
                <a href="/resume.pdf" class="action">DOWNLOAD CV</a>
            </div>
        </div>
    `
}

function education(educations){

    return `
        <div class="education">
            <div class="section-title">
                <span>Education</span>
            </div>
            <div class="education-header">
                ${
                    educations.map(educ => `
                        <button class="action">${educ.program}</button>
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
            <div class="section-title">
                <span>Experiences</span>
            </div>
            <div class="experience-list">
                ${
                    experiences.map(exp => `
                        <div class="experience-item on-resize">
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
            <div class="section-title">
                <span>My Latest Blog</span>
            </div>
            <a href="https://blog.devspot.ca" class="action">Visit my blog</a>
            <div class="blog-list on-resize">
                ${
                    blogs.map(item => `
                        <div class="blog-item">
                            <span>${getDate(item.date)}</span>
                            <span>${getName(item.slug)}</span>
                            <p>${item.preview}</p>
                            <a href="https://blog.devspot.ca/posts/${item.slug}" class="action">Read more</a>
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
            <div class="section-title">
                <span>My Latest Projects</span>
            </div>
            <a class="action" href="https://webapps.devspot.ca">Visit my project site</a>
            <div class="project-list-wrap">
                <div class="project-list">
                    ${
                        projects.map(item => `
                            <div class="project-item on-resize">
                                <div class="image-wrap">
                                    <img src="${item.image}">
                                </div>
                                <div class="project-item-body">
                                    <p>${item.description}</p>
                                    <a class="action" href="${item.url}">Try the app</a>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function work(works){

    return `
        <div class="work on-resize">
            <div class="work-header">
                <div class="section-title">
                    <span>My Latest Work</span>
                </div>
                <a href="https://websites.devspot.ca" class="action">Explore more websites</a>
            </div>
            <div class="work-list">
                ${
                    works.map(item => `
                        <div class="work-item">
                            <div class="image-wrap">
                                <img src="${item.image}">
                            </div>
                            <span>${getName(item.slug)}</span>
                            <a href="https://websites.devspot.ca/sites/${item.slug}/index.html" class="action">Visit the site</a>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function contact(contacts){

    return `
        <div class="contact on-resize">
            <div class="contact-form">
                <div class="section-title">
                    <span>Get in touch</span>
                </div>
                <form>
                    <input type="text" name="name" placeholder="Name" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" placeholder="Phone" required>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button class="action">Submit</button>
                </form>
            </div>
            <div class="contact-info">
                <div class="section-title">
                    <span>Contact details</span>
                </div>
                <div class="contact-detail">
                    ${
                        contacts.map(item => `
                            <div class="contact-detail-item">
                                ${
                                    item.label == "Phone" ? `
                                        <span>${item.label}</span>
                                        <a href="tel:${item.info}">${item.info}</a>
                                    `: 
                                    `
                                        <span>${item.label}</span>
                                        <a href="mailto:${item.info}">${item.info}</a>
                                    `
                                }
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
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



