var arr = [
    {
        model: 'samsung',
        price: 50000,
        color: 'black',
        quantity: 43
    },
    {
        model: 'IPhone 13',
        price: 70000,
        color: 'white',
        quantity: 64
    },
    {
        model: 'One plus',
        price: 10000,
        color: 'blue',
        quantity: 54
    },
]
var sum = 0
arr.forEach(function(elem){
    sum = sum + (elem.price*elem.quantity)
})
console.log(sum)