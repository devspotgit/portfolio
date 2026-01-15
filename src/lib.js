


const months = [ "January", "February", "March", "April", "May", "June", "July", "Aout", "September", "October", "November", "December" ]


function capitalize(text){

    return text.split("").map((letter, index) => index == 0 ? letter.toUpperCase() : letter).join("")
}

function getDate(text){

    const date = text.split("-")

    return months[ +date[1] - 1 ] + " " + date[2] + ", " + date[0]
}

function getName(text){

    return text.split("-").map(item => capitalize(item)).join(" ")
}


export { months, getDate, getName }

