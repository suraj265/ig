var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")

var flag = 1
btn.addEventListener("click", function(){
    if (flag == 1){
    bulb.style.backgroundColor = "yellow"
    btn.innerHTML = "OF"
    console.log("Cliocked")
    flag = 0
    }else{
    bulb.style.backgroundColor = "white"
    btn.innerHTML = "ON"
    console.log("Again cliocked")
    flag = 1
    }
})