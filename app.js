let counter=0;

const countView=document.getElementById("value");
const decreaseBtn= document.getElementsByClassName("decrease");
const resetBtn= document.getElementsByClassName("reset");
const increaseBtn= document.getElementsByClassName("increase");

decreaseBtn[0].addEventListener("click",function(){
    counter--;
    countView.textContent= counter;
    if (counter > 0) {
        countView.style.color = "green";
    } else if (counter < 0) {
        countView.style.color = "red";
    } else {
        countView.style.color = "black";
    }
    
})

increaseBtn[0].addEventListener("click",function(){
    counter++;
    countView.textContent= counter;
    if (counter > 0) {
        countView.style.color = "green";
    } else if (counter < 0) {
        countView.style.color = "red";
    } else {
        countView.style.color = "black";
    }
})

resetBtn[0].addEventListener("click",function(){
    counter=0;
    countView.textContent= counter;
    if (counter > 0) {
        countView.style.color = "green";
    } else if (counter < 0) {
        countView.style.color = "red";
    } else {
        countView.style.color = "black";
    }
})


