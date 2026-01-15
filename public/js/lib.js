



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


export { onResize, onScroll, headerControl, headerOnScroll }


