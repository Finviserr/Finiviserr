let slidePosition =0;
const slides = document.getElementsByClassName('carousel-item');
const li = document.getElementsByClassName('dot')
console.log(li)
const totalSlides = slides.length;


function updateSlidePosition(){
    
    for (let slide of slides){
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden')
    }
    for(let dot of li){
        dot.classList.remove('active-dot');
        dot.classList.add('hidden')
    }

    slides[slidePosition].classList.add('carousel-item-visible')
    // console.log(li[slidePosition])
    li[slidePosition].classList.remove('hidden')
    li[slidePosition].classList.add('active-dot')
}

function moveToNextSlide(){
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    } else {
        slidePosition++;
    } 
    updateSlidePosition();

}

// function moveToPrevSlide(){
//     if(slidePosition === 0){
//         slidePosition = totalSlides -1;
//     } else {
//         slidePosition--;
//     }
//     updateSlidePosition();
// }

setInterval(()=>{moveToNextSlide()},4000)


