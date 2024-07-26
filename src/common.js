let time1sec = 1000;
let loader = document.getElementById("loader");

window.addEventListener("load", function() {
  loader.style.display = "block"; // Show the loader

  // Hide the loader after 1 second
  let timeoutId = setTimeout(function() {
    loader.style.display = "none";
  }, time1sec);

  // Remove the timeout if the page finishes loading before 1 second
  window.addEventListener("load", function() {
    clearTimeout(timeoutId);
  });
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if(loader.style.display = 'none'){
    document.body.classList.add('loaded');
}
});

  //step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

let lastExecutionTime = 0;
const debounceDelay = 3000; // 3000ms or 3 seconds

document.addEventListener('keydown', function (event) {
    const currentTime = Date.now();
    if (currentTime - lastExecutionTime >= debounceDelay) {
        if (event.key === 'ArrowLeft') {
            prevDom.click();
        } else if (event.key === 'ArrowRight') {
            nextDom.click();
        }
        lastExecutionTime = currentTime;
    }
});

let runTimeOut;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}