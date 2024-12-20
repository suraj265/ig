var users = [
    {
      "name": "Aarav Sharma",
      "profilePhoto": "https://www.example.com/photo1.jpg",
      "time": "5 minutes ago"
    },
    {
      "name": "Isha Verma",
      "profilePhoto": "https://www.example.com/photo2.jpg",
      "time": "20 miuntes ago"
    },
    {
      "name": "Rohan Gupta",
      "profilePhoto": "https://www.example.com/photo3.jpg",
      "time": "1 hours ago"
    },
    {
      "name": "Priya Mehta",
      "profilePhoto": "https://www.example.com/photo4.jpg",
      "time": "45 minutes ago"
    },
    {
      "name": "Manav Singh",
      "profilePhoto": "https://www.example.com/photo5.jpg",
      "time": "yesterday"
    },
    {
      "name": "Ananya Patel",
      "profilePhoto": "https://www.example.com/photo6.jpg",
      "time": "13 minutes ago"
    },
    {
      "name": "Sahil Khanna",
      "profilePhoto": "https://www.example.com/photo7.jpg",
      "time": "14 minutes ago"
    },
    {
      "name": "Neha Yadav",
      "profilePhoto": "https://www.example.com/photo8.jpg",
      "time": "15 hours ago"
    },
    {
      "name": "Karan Joshi",
      "profilePhoto": "https://www.example.com/photo9.jpg",
      "time": "yesterday"
    },
    {
      "name": "Aditi Rao",
      "profilePhoto": "https://www.example.com/photo10.jpg",
      "time": "17 minutes ago"
    }
  ];

  var sum = ``

  users.forEach(function(elem){
    sum = sum + `<div class="status">
                <div class="circle">
                    <img src="https://images.unsplash.com/photo-1732226521193-acd78a06a58a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div>
                    <h4>${elem.name}</h4>
                    <h6>${elem.time}</h6>
                </div>
            </div>`
})


var allStatus = document.querySelector('.allStatus')
allStatus.innerHTML = sum



  