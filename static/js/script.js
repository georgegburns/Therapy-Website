const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".head")[0].classList.add("fadeinTop");
            document.querySelectorAll(".full")[0].classList.add("fadeinTopdelayed");
            document.querySelectorAll(".text-static")[0].classList.add("fadeinTopdelayedmore");
            document.querySelectorAll(".text-change")[0].classList.add("fadeinTopdelayedmore");
            document.querySelectorAll(".btn")[0].classList.add("fadeinBottomdelayedmore"); 
        }
    })
})

observer.observe(document.querySelector(".head"))

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".header")[0].classList.remove("fadeout");
            document.querySelectorAll(".header")[0].classList.add("fadeinTop");
            document.querySelectorAll(".bottom")[0].classList.add("fadeinTop");
            document.querySelectorAll(".content")[0].classList.add("fadeinTopdelayed");
            document.querySelectorAll('.first')[0].classList.add("fadeinLeft");
            document.querySelectorAll('.quote')[0].classList.add("fadeinLeft");
            document.querySelectorAll('.col-2')[1].classList.add("fadeinRight");
        }
    })
})

observer1.observe(document.querySelector(".observe1"))

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".header")[0].classList.remove("fadeout");
            document.querySelectorAll(".header")[0].classList.add("fadeinTop");
            document.querySelectorAll(".bottom")[1].classList.add("fadeinTop");
            document.querySelectorAll(".content")[1].classList.add("fadeinTopdelayed");
            document.querySelectorAll(".quote")[1].classList.add("fadeinTopdelayed");
            document.querySelectorAll('.title-sm')[0].classList.add("fadeinLeft");
            document.querySelectorAll('.title-sm')[1].classList.add("fadeinTopdelayedmore");
            document.querySelectorAll('.title-sm')[2].classList.add("fadeinRight");
            document.querySelectorAll('.title-lg')[0].classList.add("fadeinLeft");
            document.querySelectorAll('.title-lg')[1].classList.add("fadeinTopdelayedmore");
            document.querySelectorAll('.title-lg')[2].classList.add("fadeinRight");
            document.querySelectorAll('.info')[0].classList.add('fadeinTopdelayedevenmore')
            document.querySelectorAll('.info-sm')[0].classList.add('fadeinTopdelayedevenmore')
        }
    })
})

observer2.observe(document.querySelector(".observe2"))

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".header")[0].classList.remove("fadeout");
            document.querySelectorAll(".header")[0].classList.add("fadeinTop");
            document.querySelectorAll(".bottom")[2].classList.add("fadeinTop");
            document.querySelectorAll(".content")[2].classList.add("fadeinTopdelayed");
            document.querySelectorAll('.title')[3].classList.add("fadeinLeft");
            document.querySelectorAll('.title')[4].classList.add("fadeinRight");
            document.querySelectorAll(".location-description")[1].classList.add("fadeinRight")
            document.querySelectorAll(".third")[0].classList.add("fadeinRight")
            document.querySelectorAll(".ext")[1].classList.add("fadeinRight")
            document.querySelectorAll(".location-description")[0].classList.add("fadeinLeft")
            document.querySelectorAll(".second")[0].classList.add("fadeinLeft")
            document.querySelectorAll(".ext")[0].classList.add("fadeinLeft")
            var height = $('.landing').height();
            $(document).scrollTop($(document).scrollTop() - height);
            $('.landing').remove();
        }
    })
})

observer3.observe(document.querySelector(".observe3"))

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".header")[0].classList.remove("fadeout");
            document.querySelectorAll(".header")[0].classList.add("fadeinTop");
            document.querySelectorAll(".bottom")[3].classList.add("fadeinTop");
            document.querySelectorAll(".content")[3].classList.add("fadeinTopdelayed");
            document.querySelectorAll('.text')[0].classList.add("fadeinLeft");
            document.querySelectorAll(".prices")[0].classList.add("fadeinRight");
            var height = $('.landing').height();
            $(document).scrollTop($(document).scrollTop() - height);
            $('.landing').remove();
        }
    })
})

observer4.observe(document.querySelector(".observe4"))

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".header")[0].classList.remove("fadeout");
            document.querySelectorAll(".header")[0].classList.add("fadeinTop");
            document.querySelectorAll(".bottom")[4].classList.add("fadeinTop");
            document.querySelectorAll(".form-control")[0].classList.add("fadeinLeftfast");
            document.querySelectorAll(".form-control")[1].classList.add("fadeinRightfast");
            document.querySelectorAll(".form-control")[2].classList.add("fadeinLeftfast");
            document.querySelectorAll(".form-control")[3].classList.add("fadeinRightfast");
            document.querySelectorAll(".form-control")[4].classList.add("fadeinLeftfast");
            document.querySelectorAll(".submit")[0].classList.add("fadeinRightfast");
            document.querySelectorAll(".footer")[0].classList.add("fadeinBottomfast");
            var height = $('.landing').height();
            $(document).scrollTop($(document).scrollTop() - height);
            $('.landing').remove();
        }
    })
})

observer5.observe(document.querySelector(".observe5"))

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".header")[0].classList.remove("fadeinTop");
            document.querySelectorAll(".header")[0].classList.remove("fadeinTopdelayedmore") ;
            document.querySelectorAll(".header")[0].classList.add("fadeout");
            var height = $('.landing').height();
            $(document).scrollTop($(document).scrollTop() - height);
            $('.landing').remove();
        }
    })
})

observer6.observe(document.querySelector(".footer"))

function revealText1() {
    document.querySelectorAll(".therapy-list")[0].classList.add("fadeinTop");
    document.querySelectorAll(".info")[0].classList.remove("fadeinTopevenmoredelayed");
    document.querySelectorAll(".info")[0].classList.add("fadeout");
    document.querySelectorAll(".info-sm")[0].classList.remove("fadeinTopevenmoredelayed");
    document.querySelectorAll(".info-sm")[0].classList.add("fadeout");
}

function revealText2() {
    document.querySelectorAll(".therapy-list")[1].classList.add("fadeinTop");
    document.querySelectorAll(".info")[0].classList.remove("fadeinTopevenmoredelayed");
    document.querySelectorAll(".info")[0].classList.add("fadeout");
    document.querySelectorAll(".info-sm")[0].classList.remove("fadeinTopevenmoredelayed");
    document.querySelectorAll(".info-sm")[0].classList.add("fadeout");
}

function revealText3() {
    document.querySelectorAll(".therapy-list")[2].classList.add("fadeinTop");
    document.querySelectorAll(".info")[0].classList.remove("fadeinTopevenmoredelayed");
    document.querySelectorAll(".info")[0].classList.add("fadeout");
    document.querySelectorAll(".info-sm")[0].classList.remove("fadeinTopevenmoredelayed");
    document.querySelectorAll(".info-sm")[0].classList.add("fadeout");
}

function fillOnline(){
    document.getElementById("types").value="Online";
}

function fillPerson(){
    document.getElementById("types").value="In Person";
}

function fillEMDR(){
    document.getElementById("therapy").value='EMDR';
}

function fillCouple(){
    document.getElementById("therapy").value='Couple';
}

function fillIndividual(){
    document.getElementById("therapy").value='Individual';
}


var text = [" Anxiety Disorders?"," Emotional Abuse?",
" Attachment Issues?", " Compulsions?", " Sexual Abuse?", " Depression?",
" Loss / Bereavement?", " Physical Abuse?", " Existential Issues?", 
" Personality Disorders?", " Relationship Difficulties?", 
" Trauma?"]
var counter = 0
var elem = document.getElementById("text-change")
var inst = setInterval(changeText, 1500)

function changeText() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length){
        counter = 0;
    }
}
