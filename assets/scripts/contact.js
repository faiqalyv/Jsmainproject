const language1=document.querySelector(".language1")
const language2=document.querySelector(".language2")
const languageitem1=document.querySelector(".languageitem1")
const languageitem2=document.querySelector(".languageitem2")

language1.addEventListener("click",()=>{
    if(languageitem1.style.display=="none"){
      languageitem1.style.display="flex"
    }
    else{
        languageitem1.style.display="none"
    }
})