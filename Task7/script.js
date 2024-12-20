var btn = document.querySelector("button")
var body = document.querySelector("body")

btn.addEventListener("click", function(){
    var img = document.createElement("img");
    img.setAttribute('src','https://png.pngtree.com/png-vector/20240122/ourlarge/pngtree-illustration-of-a-cartoon-bug-png-image_11455019.png')
    document.body.appendChild(img)
    document.style.height = '100px'
    document.style.width = '100px'
})