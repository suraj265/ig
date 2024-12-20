var IPL = ["CSK", "RCB", "MI", "DC", "SRH", "GT", "RR", "KKR", "PBKS","LSG"]

var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
// var h1 = document.querySelector("h1")

btn.addEventListener("click", function(){
    var num = Math.floor(Math.random()*IPL.length)

    h2.innerHTML = IPL[num]
})