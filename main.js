import './style.scss'

import 'bootstrap/dist/js/bootstrap.bundle.min'
import ScrollReveal from "scrollreveal";
import 'waypoints/lib/noframework.waypoints.min'

let navBar = document.getElementById("navBar");
var waypoint = new Waypoint({
    element: document.getElementById('element-waypoint'),
    handler: function(direction) {
        if(direction == "down"){
            navBar.classList.add("position-fixed");
            navBar.classList.add("w-100");
            navBar.classList.add("header");
            navBar.classList.add("animate__fadeInDown");
            // navBar.style.display = "block";
        }
        else{
            navBar.classList.remove("position-fixed");
            navBar.classList.remove("w-100");
            navBar.classList.remove("header");
            navBar.classList.remove("animate__fadeInDown");

        }
    },
    offset: '50%'
})


let slideUp = {
    duration: 1000,
    distance : '70px',
    origin : 'top',
    interval : 500
}

ScrollReveal().reveal('.content',slideUp);




(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()