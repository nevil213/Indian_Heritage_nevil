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
let hoverImage = document.querySelectorAll('nav, .des, .thumbnail .heritage, button, footer, svg');

// Add event listeners to each element
hoverImage.forEach(element => {
    element.addEventListener('mouseenter', addDifferenceClass);
    element.addEventListener('mouseleave', removeDifferenceClass);
});



document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.subscribe-form input');

    inputs.forEach(input => {
        input.addEventListener('input', function () {
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