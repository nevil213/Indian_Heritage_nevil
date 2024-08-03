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
        
