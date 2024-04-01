let previousSlideButton = document.querySelector(".prev-button");
let nextSlideButton = document.querySelector(".next-button");

let images = [
    imgA = document.querySelector("#img-a"),
    imgB = document.querySelector("#img-b"),
    imgC = document.querySelector("#img-c"),
    imgD = document.querySelector("#img-d"),
];

let slider = 0;

function setTheStage (n){
    images.map(item => {
        if (item.classList.contains("visible")){
            item.classList.remove("visible");
            item.classList.add("invisible");
        };
        
        })
        images[n].classList.remove("invisible");
        images[n].classList.add("visible");
};

function keepItLooping(){
    if (slider < 0){
        slider = (images.length - 1);
    } else if (slider > (images.length - 1)){
        slider = 0;
    }
}

previousSlideButton.addEventListener("click", function(){
        slider--;
        keepItLooping();
        setTheStage(slider);
        console.log(slider);
});


nextSlideButton.addEventListener("click", function(){
        slider++;
        keepItLooping();
        setTheStage(slider);
        console.log(slider);
});




















