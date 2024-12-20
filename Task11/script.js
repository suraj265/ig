var arr = [
    {
        name: 'Suraj',
        weight: 70
    },
    {
        name: 'Sumit',
        weight: 80
    },
    {
        name: 'Shivansh',
        weight: 60
    },
    {
        name: 'Vikash',
        weight: 90
    },
    {
        name: 'Himanshu',
        weight: 60
    },
    {
        name: 'Alok',
        weight: 78
    }
]

var sum = 0;
arr.forEach(function(elem){
    sum = sum + elem.weight
})
if(sum<500){
    console.log("aandar chale jaa lift me")
}
else{
    console.log("weight overloaded")
}
console.log(sum)