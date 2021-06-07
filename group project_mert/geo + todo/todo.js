const bookname = document.querySelector(".name");
const author = document.querySelector(".yazar");
const btn = document.querySelector(".btn");
const add= document.querySelector(".addproduct");
const clean= document.querySelector(".clean");
const detail= document.querySelector(".bookdetail");
const textarea= document.querySelector("#textarea");

btn.addEventListener('click', function(){
    
    
    if (bookname.value===""||author.value===""||textarea.value==="") {
        alert("enter bookname or author or detail");
        
    }else{
        var name = document.createElement('p');
        name.innerText = `Bookname:   ${bookname.value}`;
        detail.appendChild(name);
        var yazar = document.createElement('p');
        yazar.innerText = `Author:   ${author.value}`;
        detail.appendChild(yazar);
        var bookdetail = document.createElement('p');
        bookdetail.innerText = `Bookdetail:  ${textarea.value}`;
        detail.appendChild(bookdetail);

    }
    
    name.addEventListener('click', function(){
        name.style.textDecoration = "line-through";
    })
    name.addEventListener('dblclick', function(){
        detail.removeChild(name);
    })
    yazar.addEventListener('click', function(){
        yazar.style.textDecoration = "line-through";
    })
    yazar.addEventListener('dblclick', function(){
        detail.removeChild(yazar);
    })
    bookdetail.addEventListener('click', function(){
        bookdetail.style.textDecoration = "line-through";
    })
    bookdetail.addEventListener('dblclick', function(){
        detail.removeChild(bookdetail);
    })
})

clean.addEventListener("click",()=>{
    var clname=bookname.value="";
    var claut=author.value="";
    var cltext=textarea.value=""
    return clname || claut || cltext;
})