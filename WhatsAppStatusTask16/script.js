var users = [
    {
      name: "Aarav Sharma",
      coverphoto: "https://images.unsplash.com/photo-1734187333557-e359385a237a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "10 mins ago"
    },
    {
      name: "Priya Patel",
      coverphoto: "https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "5 mins ago"
    },
    {
      name: "Vikram Singh",
      coverphoto: "https://images.unsplash.com/photo-1732480509151-cb3d991ff9a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "30 mins ago"
    },
    {
      name: "Rhea Kapoor",
      coverphoto: "https://plus.unsplash.com/premium_photo-1734208066527-1f93f81737c2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "1 hours ago"
    },
    {
      name: "Saanvi Gupta",
      coverphoto: "https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "45 mins ago"
    },
    {
      name: "Ishaan Verma",
      coverphoto: "https://images.unsplash.com/photo-1725665996724-5e69ed2bf1cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "2 hours ago"
    },
    {
      name: "Ananya Desai",
      coverphoto: "https://images.unsplash.com/photo-1674588143345-0d92018f0061?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "50 mins ago"
    },
    {
      name: "Arjun Mehra",
      coverphoto: "https://images.unsplash.com/photo-1732951359297-8500c86dcbcc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "5 hours ago"
    },
    {
      name: "Neha Rao",
      coverphoto: "https://plus.unsplash.com/premium_photo-1734272643250-c076282c49f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "3 mins ago"
    },
    {
      name: "Kabir Joshi",
      coverphoto: "https://images.unsplash.com/photo-1731413263286-76001c8fedef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeuploaded: "7 mins ago"
    }
  ];

  var sum = ``

  users.forEach(function(elem){
    sum = sum + ` <div class="status">
                <div class="overlay"></div>
                <div class="circle">
                    <img src="${elem.coverphoto}" alt="">
                </div>
                <div>
                        <h4>${elem.name}</h4>
                        <h6>${elem.timeuploaded}</h6>     
                </div>
            </div>`
  })

document.querySelector('.allStatus').innerHTML = sum




  
