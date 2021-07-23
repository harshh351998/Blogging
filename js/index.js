const views = document.getElementById('viewCount');
const users = document.getElementById('userCount');

//updating views count
const updateViewsCount = () =>{
    fetch('https://api.countapi.xyz/update/blogging/views/?amount=1')
    .then(res=>res.json())
    .then(res=>{
        views.innerHTML=res.value;
    })
}

updateViewsCount();

//updating users count
const updateUsersCount = () =>{
    fetch('https://api.countapi.xyz/update/blogging/users/?amount=1')
    .then(res=>res.json())
    .then(res=>{
        users.innerHTML=res.value;
    })
}

updateUsersCount();