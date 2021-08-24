let taskbar = document.getElementsByClassName("taskbar")[0]
let start = document.getElementsByClassName("start")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(start.style.bottom == "50px"){
        start.style.bottom = "-655px"
    }
    else{
        start.style.bottom = "50px"
    }
})