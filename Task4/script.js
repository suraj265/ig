var h1 = document.querySelector("h1");
var btn = document.querySelector("button");

var flag = 1;
btn.addEventListener("click", function(){
    if (flag == 1){
        h1.innerHTML = "Sending request..";
        btn.innerHTML = "Adding Friends..";
        h1.style.color = "yellow";
        btn.style.color = "red";
    setTimeout(function(){
        h1.innerHTML = "Friends";
        btn.innerHTML = "Unfollow";
        h1.style.color = "green"
        btn.style.color = "red"
    },3000)
    flag = 0;
    }else{
        h1.innerHTML = "Stranger";
        btn.innerHTML = "follow";
        btn.style.color = "green"
        h1.style.color = "red"
        flag = 1;
    }
})