



// on resize

function getBreakpoint(width){

    if(width <= 576) return "sm"

    else if(width <= 768) return "md"

    else if(width <= 992) return "lg"
    
    else if(width <= 1200) return "xl"
    
    else return "xxl"
}

function onResize(){

    const items = document.querySelectorAll(".on-resize")
    
    items.forEach(item => {

        item.setAttribute("size", "")
    })

    const res = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                items.forEach(item => {

                    const breakpoint = getBreakpoint(entry.target.offsetWidth)

                    item.setAttribute("size", breakpoint)
                })
            }
        })
    })

    res.observe(document.body)
}


// on scroll

function onScroll(callbacks){

    let timeout = null

    window.addEventListener("scroll", () => {

        if(!timeout) {

            timeout = setTimeout(() => {
    
                callbacks.forEach(item => {
    
                    item(scrollY)
                })

                timeout = null
            }, 200)
        }
        else{

            clearTimeout(timeout)

            timeout = setTimeout(() => {
    
                callbacks.forEach(item => {
    
                    item(scrollY)
                })

                timeout = null
            }, 200)
        }
    })
}


// header

function headerControl(){

    const control = document.querySelector(".header > button") 

    const header = document.querySelector(".header")

    const pageOverlay = document.querySelector(".page-overlay")

    control.addEventListener("click", () => {

        if(!header.hasAttribute("open")) header.setAttribute("open", "")
        
        else header.removeAttribute("open")

        if(!pageOverlay.hasAttribute("open")) pageOverlay.setAttribute("open", "")
        
        else pageOverlay.removeAttribute("open")
    })

    pageOverlay.addEventListener("click", () => {

        if(!header.hasAttribute("open")) header.setAttribute("open", "")
        
        else header.removeAttribute("open")

        if(!pageOverlay.hasAttribute("open")) pageOverlay.setAttribute("open", "")
        
        else pageOverlay.removeAttribute("open")
    })
}


function headerOnScroll(scrolly){

    const header = document.querySelector(".header")

    if(scrolly > 20){

        if(!header.hasAttribute("scroll")) header.setAttribute("scroll", "")
    }
    else{

        header.removeAttribute("scroll")
    }
}


// education

function educationControl(){

    const controls = document.querySelectorAll(".education-header > button")

    const items = document.querySelectorAll(".education-item")

    let currentIndex = 0

    controls[currentIndex].setAttribute("active", "")

    items[currentIndex].setAttribute("active", "")

    controls.forEach((control, index) => {

        control.addEventListener("click", () => {

            if(index != currentIndex){

                controls[currentIndex].removeAttribute("active")

                items[currentIndex].removeAttribute("active")

                currentIndex = index

                setTimeout(() => {

                    controls[currentIndex].setAttribute("active", "")
    
                    items[currentIndex].setAttribute("active", "")
                }, 300)
            }
        })
    })
}


// project 

function projectInit(){

    const projectListWrap = document.querySelector(".project-list-wrap")

    const projectList = document.querySelector(".project-list")

    const projectItems = document.querySelectorAll(".project-item")

    const projectListHeight = projectList.offsetHeight

    projectListWrap.style.height = (projectItems.length + 1) * projectListHeight + "px"    
}


function projectOnScroll(){

    const projectListWrap = document.querySelector(".project-list-wrap")

    const projectList = document.querySelector(".project-list")

    const projectItems = document.querySelectorAll(".project-item")

    const projectListHeight = projectList.offsetHeight

    const rect = projectListWrap.getBoundingClientRect()

    const initial = 100

    projectItems.forEach((item, index) => {

        if(rect.top - initial <= - (index * projectListHeight) && rect.top - initial  > - (index + 1) * projectListHeight){
    
            if(!item.hasAttribute("active")) item.setAttribute("active", "")
        }
        else{

            if(item.hasAttribute("active")) item.removeAttribute("active")
        }
    })
}


// jump to section

function jumpToSection(){

    const navItems = document.querySelectorAll(".nav-item")

    const header = document.querySelector(".header")

    const pageOverlay = document.querySelector(".page-overlay")

    const initial = 40

    navItems.forEach(item => {

        item.addEventListener("click", e => {

            e.preventDefault()

            if(header.hasAttribute("open")) header.removeAttribute("open")

            if(pageOverlay.hasAttribute("open")) pageOverlay.removeAttribute("open")

            const sectionName = item.getAttribute("section")

            const section = document.querySelector("."+sectionName)

            const rect = section.getBoundingClientRect()

            scrollTo({
                
                top: scrollY + (rect.top - initial),

                behavior: "smooth"
            })
        })
    })
}


// contact form

function contactForm(){

    const form = document.querySelector(".contact form")

    form.addEventListener("submit", e => {

        e.preventDefault()

        const formData = new FormData(form)

        
    })
}

export { jumpToSection, projectOnScroll, onResize, onScroll, headerControl, headerOnScroll, educationControl, projectInit }


