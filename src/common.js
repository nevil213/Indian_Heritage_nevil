let time1sec = 1000;
let loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.style.display = "block"; // Show the loader

    // Hide the loader after 1 second
    let timeoutId = setTimeout(function () {
        loader.style.display = "none";
        if (window.innerWidth > 1024) {
            document.querySelector('.mycircle, .mycursor').style.display = 'block';
            document.querySelector('body').style.cursor = 'none';

            // Select the .mycircle element
            let cursor = document.querySelector('.mycircle');

            // Function to add .hover class
            function addHoverClass() {
                cursor.classList.add('hover');
            }

            // Function to remove .hover class
            function removeHoverClass() {
                cursor.classList.remove('hover');
            }

            // Select all elements with .type, .heritage, and .type2 classes
            let hoverElements = document.querySelectorAll('.type, .list .heritage, .type2');

            // Add event listeners to each element
            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', addHoverClass);
                element.addEventListener('mouseleave', removeHoverClass);
            });

            function addDifferenceClass() {
                cursor.classList.add('cursor_difference');
            }

            function removeDifferenceClass() {
                cursor.classList.remove('cursor_difference');
            }

            let hoverImage = document.querySelectorAll('nav, .des, .thumbnail .heritage, button, footer');

            hoverImage.forEach(element => {
                element.addEventListener('mouseenter', addDifferenceClass);
                element.addEventListener('mouseleave', removeDifferenceClass);
            });
        }
    }, time1sec);

    // Remove the timeout if the page finishes loading before 1 second
    window.addEventListener("load", function () {
        clearTimeout(timeoutId);
    });
});


            
(function () {
    const cursor = document.querySelector(".mycursor");
    const circle = document.querySelector(".mycircle");
    const links = document.querySelectorAll(".elementor-heading-title");
    const editPosCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        circle.style.left = x + "px";
        circle.style.top = y + "px";
    };
    const animateit = function (e) {
        const span = this.querySelector("span");
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = (x / width) * (move * 2) - move,
            yMove = (y / height) * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        circle.classList.add("hover");
        // links.forEach((alink) => alink.classList.add("alink"));
        if (e.type === "mouseleave") {
            circle.classList.remove("hover");
            // links.forEach((alink) => alink.classList.remove("alink"));
            span.style.transform = "";
        }
    };
    window.addEventListener("mousemove", editPosCursor);
    links.forEach((link) => link.addEventListener("mousemove", animateit));
    links.forEach((link) => link.addEventListener("mouseleave", animateit));
})();


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


window.addEventListener('scroll', function () {
    let thumb = document.querySelector('.thumbnail');
    let arrows = document.querySelector('.arrows');
    var scrollHeight = window.innerHeight;
    if (window.scrollY > (scrollHeight*0.4)) {
        thumb.style.animation = 'thumnarrows_hide 0.3s linear forwards';
        arrows.style.animation = 'thumnarrows_hide 0.3s linear forwards';
    } else {
        thumb.style.animation = 'thumnarrows_show 0.3s linear forwards';
        arrows.style.animation = 'thumnarrows_show 0.3s linear forwards';
    }
});
