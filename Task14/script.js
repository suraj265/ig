var users = [
    {
        name: 'Suraj',
        age: 20,
        city: 'Bihar',
        salary: 10000
    },
    {
        name: 'Sumit',
        age: 22,
        city: 'Jharkhand',
        salary: 20000
    },
    {
        name: 'Shivansh',
        age: 21,
        city: 'Bhopal',
        Salary: 30000
    },
]

var sum = ``

users.forEach(function(elem){
    sum += `<div class="card">
        <h1>${elem.name}</h1>
        <h4>age:${elem.age} , ${elem.city}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat labore nesciunt animi libero sunt?</p>
    </div>`
})

var body = document.querySelector("body")
body.innerHTML = sum