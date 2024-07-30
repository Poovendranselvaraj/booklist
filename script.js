//selecting popup box popup overlay button
var pops=document.querySelector(".popup-overlay")
var box=document.querySelector(".popup-box")
var change=document.getElementById("add-popup-button")

change.addEventListener("click",function(){
    pops.style.display="block"
    box.style.display="block"
})

//select cancel button
var stop=document.getElementById("cancel-popup")
stop.addEventListener("click",function(event){
    event.preventDefault()
    
})

//select container,add-book,book-title-input,book-author-input,book-description-input

var contain=document.querySelector(".container")
var book=document.getElementById("add-book")
var title=document.getElementById("book-title-input")
var peot=document.getElementById("book-author-input")
var sum=document.getElementById("book-description-input")

book.addEventListener("click",function(event){
    event.preventDefault()
    var create=document.createElement("div")
    create.setAttribute("class","book-container")
    create.innerHTML=`<h2>${title.value}</h2>
            <h5>${peot.value}</h5>
            <p>${sum.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    contain.append(create)
    pops.style.display="none"
    box.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
} 