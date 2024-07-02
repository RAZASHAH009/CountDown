daysItem = document.getElementById("days")
hourItem = document.getElementById("hours")
mintItem = document.getElementById("min")
seccItem = document.getElementById("sec")



function raza (){
    birthday = new Date("2025,4,22") 
    future = new Date()
    myDate = birthday - future 
    
    console.log(myDate)
}
raza()

function count (){
    days  = Math.floor(myDate / 1000 / 60 / 60 / 24)
    hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24
    mint   = Math.floor(myDate / 1000 / 60 ) % 24
    sec  = Math.floor(myDate / 1000) % 60


    daysItem.innerHTML = days
    hourItem.innerHTML = hours
    mintItem.innerHTML = mint
    seccItem.innerHTML = sec



    console.log(hours)
}

count()



setInterval(count,1000)



