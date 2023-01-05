// let time = 10
// setInterval(function(){if(time >= 0){console.log(time--)}},1000)

let time = 180

setInterval(function(){
    if(time>=0){
        let min = Math.floor(time/60)
        let sec = String(time % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time--
    }
},1000)