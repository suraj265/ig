var img = document.querySelector('img')
var moveX = 0
document.addEventListener('keydown', function(dets){
    if(dets.code == 'ArrowRight'){
        moveX++
        img.style.left = moveX + '%'
    }
    else if(dets.code == 'ArrowLeft'){
        moveX--
        img.style.left = moveX + '%'
    }
})

// var moveY = 0
// document.addEventListener('keydown', function(dets){
//     if(dets.code == 'ArrowRight'){
//         moveY++
//         img.style.top = moveY + '%'
//     }
//     else if(dets.code == 'ArrowLeft'){
//         moveY--
//         img.style.top = moveY + '%'
//     }
// })

