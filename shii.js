// Dark Mode
const button = document.getElementById("darkMode");

button.onclick = () => {
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

    button.innerHTML="☀️";

}else{

    button.innerHTML="🌙";

}
};

// Scroll Animation
window.addEventListener("scroll", reveal);

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const top=reveals[i].getBoundingClientRect().top;

const visible=120;

if(top<windowHeight-visible){
reveals[i].classList.add("active");
}

}

}

const words = [
    "Electronics Engineering Student",
    "Future Electronics Engineer",
    "Guitar Player",
    "Basketball Player",
    "Volleyball Player",
    "Billiards Enthusiast",
    "Web Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[i];

    if(!isDeleting){
        document.querySelector(".typing").textContent =
        currentWord.substring(0,j++);
    }else{
        document.querySelector(".typing").textContent =
        currentWord.substring(0,j--);
    }

    if(j==currentWord.length+1){
        isDeleting=true;
        setTimeout(type,1200);
        return;
    }

    if(j==0){
        isDeleting=false;
        i++;

        if(i==words.length){
            i=0;
        }
    }

    setTimeout(type,isDeleting?60:120);
}

type();

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_t5okt0g",
        "template_6wch3q6",
        this
    ).then(function () {

        alert("Message sent successfully!");
        contactForm.reset();

    }).catch(function (error) {

        alert("Failed to send message.");
        console.log(error);

    });

});