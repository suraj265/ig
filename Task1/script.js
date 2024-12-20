const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const img = document.querySelector("img");
let flag = false;

button.addEventListener("click", ()=>{
    if (flag == false){
        h2.textContent = "Friend";
        h2.style.color = "green";
        button.textContent = "Remove Friend";
        img.style.borderColor = "green";
        flag = true;
    }
    else{
        h2.textContent = "Stranger";
        h2.style.color = "red";
        button.textContent = "Add Friend";
        img.style.borderColor = "red";
        flag = false;
    }
});