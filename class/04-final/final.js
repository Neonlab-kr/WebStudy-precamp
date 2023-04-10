const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4){
        document.getElementById("p3").focus()
    }
}

const activateValidation = () => {
    let phone1 = document.getElementById("p1").value
    let phone2 = document.getElementById("p2").value
    let phone3 = document.getElementById("p3").value
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("sendValidationButton").disabled=false;
    }
}

let isStarted = false;
let time = 180;
let timer

let auth = () => {
    if(isStarted === false){
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("target").innerText = token

        time = 3

        timer = setInterval(function(){
            if(time>=0){
                let min = Math.floor(time/60)
                let sec = String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText = min+":"+sec
                time--
            } else {
                document.getElementById("target").innerText = "000000"
                document.getElementById("timer").innerText = "3:00"
                document.getElementById("finish").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)

    } else {
        //타이머가 작동중일때
    }
}

let authCheck = () => {
    if(time >= 0){
        alert("인증이 완료되었습니다.")
    }
    clearInterval(timer)
    isStarted = false
    document.getElementById("target").innerText = "000000"
    document.getElementById("sendValidationButton").disabled = true
    document.getElementById("timer").innerText = "3:00"
    document.getElementById("finish").disabled = true
    document.getElementById("finish").innerText = "인증완료"

    document.getElementById("submitButton").disabled = false
}

let submit = () =>{
    let confirm = true;
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("password").value
    let pw2 = document.getElementById("passwordCheck").value
    let region = document.getElementById("regionSel").value

    if(!email){
        confirm=false
        document.getElementById("noEmail").removeAttribute("hidden")
    } else if(email.includes('@')===false){
        confirm=false
        document.getElementById("noEmail").setAttribute("hidden","true")
        document.getElementById("emailError").removeAttribute("hidden")
    } else{
        document.getElementById("noEmail").setAttribute("hidden","true")
        document.getElementById("emailError").setAttribute("hidden","true")
    }

    if(!name){
        confirm=false
        document.getElementById("noName").removeAttribute("hidden")
    } else {
        document.getElementById("noName").setAttribute("hidden","true")
    }

    if(!pw1){
        confirm=false
        document.getElementById("noPw").removeAttribute("hidden")
    } else {
        document.getElementById("noPw").setAttribute("hidden","true")
    }

    if(!pw2){
        confirm=false
        document.getElementById("noPwCheck").removeAttribute("hidden")
    } else if(pw2!==pw1){
        confirm=false
        document.getElementById("noPwCheck").setAttribute("hidden","true")
        document.getElementById("pwError").removeAttribute("hidden")
    } else {
        document.getElementById("noPwCheck").setAttribute("hidden","true")
        document.getElementById("pwError").setAttribute("hidden","true")
    }

    if(region !== "서울" && region !== "경기" && region !== "인천"){
        document.getElementById("noRegion").removeAttribute("hidden")
        confirm=false
    } else {
        document.getElementById("noRegion").setAttribute("hidden","true")
    }

    if(document.getElementById("female").checked === false && document.getElementById("male").checked === false){
        document.getElementById("noGender").removeAttribute("hidden")
        confirm=false
    } else {
        document.getElementById("noGender").setAttribute("hidden","true")
    }

    if(confirm===true){
        alert("코드캠프 가입을 축하합니다.")
    }
}