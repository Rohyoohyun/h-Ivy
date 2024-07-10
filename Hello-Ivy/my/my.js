const content = "It’s a pleasure to meet you";// Home 텍스트 타이핑 효과
const text = document.querySelector(".title h1");
let textIdx = 0;

function typing(){
    let txt = content[textIdx++];
    
    text.innerHTML += txt;

    if (textIdx > content.length) {
        text.textContent = "";
        textIdx = 0;
    }
}

setInterval(typing, 200)

// 스크롤에 반응하는 애니메이션
let aboutCard = document.querySelector(".about_profile");

let goalCard1 = document.querySelector(".goal_detail_1");
let goalCard2 = document.querySelector(".goal_detail_2");
let goalCard3 = document.querySelector(".goal_detail_3");

let contactTilte = document.querySelector("#contact .category h2");
let contactLink = document.querySelector("#contact .link ul");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    if (value < 400){
        aboutCard.style.animation = "about_backslide 0.5s ease-out forwards";
    } else {
        aboutCard.style.animation = "about_slide 0.5s ease-out"
    };

    if(value > 1950){
        goalCard1.style.animation = "show 0.3s linear forwards";
        goalCard2.style.animation = "show 0.8s linear forwards";
        goalCard3.style.animation = "show 1.2s linear forwards";
    } else{
        goalCard1.style.animation = "out 0.3s linear forwards";
        goalCard2.style.animation = "out 0.8s linear forwards";
        goalCard3.style.animation = "out 1.2s linear forwards";
    }

    if(value > 2500) {
        contactTilte.style.animation = "grow 0.8s linear";
        contactLink.style.animation = "grow 0.8s linear";
    } else{
        contactTilte.style.animation = "grow-out 0.5s linear";
        contactLink.style.animation = "grow-out 0.5s linear";
    };

})

nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount-3){
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
})

prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
})