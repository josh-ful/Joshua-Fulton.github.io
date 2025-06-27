document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const abButton = document.querySelector('#abButton');


    function noDragging() {
        for(var i = 0; i < images.length; i++) {
            images[i].draggable = false;
            images[i].addEventListener('dragstart', function(event) {
                event.preventDefault();
            });
        }
    }

    noDragging();



    function newPage (pageName) {
        window.location.href = pageName;
        console.log(pageName);
    }
    abButton.addEventListener('click', () => newPage("aboutMe.html"));
     
    abButton.addEventListener('mousedown', () => {
        abButton.classList.add('active');
    });

    abButton.addEventListener('mouseup', () => {
        abButton.classList.remove('active');
    });





});