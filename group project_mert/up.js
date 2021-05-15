let users=[];

const addUsers=(ev)=>{
    ev.preventDefault();
    let user={
        email:document.querySelector(".email").value,
        password:document.querySelector(".password").value,
    }
    users.push(user);
    document.forms[0].reset()
    localStorage.setItem("userlist",JSON.stringify(users))
}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".upbtn").addEventListener("click",addUsers)
})