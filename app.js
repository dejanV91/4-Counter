let counter=0;

const countView= document.querySelector("#value");
const buttons=document.querySelectorAll(".btn");

buttons.forEach(function(singleBtn){
    singleBtn.addEventListener("click" ,function(j){
        const currentBtn=j.currentTarget.classList;
        
        if (currentBtn.contains("increase")) {
            counter++;
        } else if (currentBtn.contains("decrease")) {
            counter--;
        } else {
            counter=0;
        }

        if (counter > 0) {
            countView.style.color = "green";
        } else if (counter < 0) {
            countView.style.color = "red";
        } else {
            countView.style.color = "black";
        }

        countView.textContent = counter;
    })
    
});