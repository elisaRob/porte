const bouton=document.querySelector(".bouton");
const container1=document.querySelector(".container1");
const container2=document.querySelector(".container2");
const container=document.querySelector(".container");
const titre1=document.querySelector(".titre1")
const list1=document.querySelector(".list1")

bouton.addEventListener("click",() =>{
    container1.classList.add("container1Active");
    container2.classList.add("container2Active");
    bouton.classList.add('boutonActive');
    container.classList.add('containerActive');
    titre1.classList.add("titre1Active");
    list1.classList.add("list1Active")
})