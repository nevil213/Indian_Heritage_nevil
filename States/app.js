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

            // Select all elements with .type, .heritage, and .state classes
            let hoverElements = document.querySelectorAll('.type, .list .heritage, .state');

            // Add event listeners to each element
            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', addHoverClass);
                element.addEventListener('mouseleave', removeHoverClass);
            });

            // Function to add .cursor_difference class
            function addDifferenceClass() {
                cursor.classList.add('cursor_difference');
            }

            // Function to remove .cursor_difference class
            function removeDifferenceClass() {
                cursor.classList.remove('cursor_difference');
            }

            // Select all elements with .type, .heritage, and .state classes
            let hoverImage = document.querySelectorAll('nav, .des, .thumbnail .heritage, button, footer');

            // Add event listeners to each element
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


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;

nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
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
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
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
    if (window.scrollY > (scrollHeight * 0.4)) {
        thumb.style.animation = 'thumnarrows_hide 0.3s linear forwards';
        arrows.style.animation = 'thumnarrows_hide 0.3s linear forwards';
    } else {
        thumb.style.animation = 'thumnarrows_show 0.3s linear forwards';
        arrows.style.animation = 'thumnarrows_show 0.3s linear forwards';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.subscribe-form input');
  
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (input.value) {
          input.style.paddingLeft = '28px';
        } else {
          input.style.paddingLeft = '0px';
        }
      });
    });
  });

document.getElementById('subscribeForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;

    // Disable the submit button and show the spinner
    var button = document.getElementById('subscribeButton');
    var spinner = document.getElementById('spinner');
    var responseMessage = document.getElementById('responseMessage');
    button.disabled = true;
    spinner.style.display = 'inline-block';
    button.style.color = '#151414';
    button.addEventListener('mouseover', () => {
        button.style.color = '#151414';
    });
    button.addEventListener('mouseout', () => {
        button.style.color = '#151414';
    });

    fetch('https://script.google.com/macros/s/AKfycby5vTUOI8xfPR--x_WXL7RCYRswEsUuol1ImstKCt_m0K4uafpU_6aStjTMouPx-CiO/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'name': name, 'email': email })
    }).then(response => {
        // As we are using no-cors mode, we can't access the response data
        alert('Thank you for subscribing!');
        document.getElementById('subscribeForm').reset(); // Reset the form
        button.disabled = false; // Re-enable the submit button
        spinner.style.display = 'none'; // Hide the spinner
        button.style.color = 'white';
        button.addEventListener('mouseover', () => {
            button.style.color = 'black';
        });
        button.addEventListener('mouseout', () => {
            button.style.color = 'white';
        });
    }).catch(error => {
        console.error('Error!', error.message);
        button.disabled = false; // Re-enable the submit button in case of error
        spinner.style.display = 'none'; // Hide the spinner in case of error
        button.style.color = 'white';
        button.addEventListener('mouseover', () => {
            button.style.color = 'black';
        });
        button.addEventListener('mouseout', () => {
            button.style.color = 'white';
        });
    });
}