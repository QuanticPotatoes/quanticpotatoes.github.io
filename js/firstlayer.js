// Selecting the container element
var el = document.querySelector('.me-text');

// All the possible options (these are the default values)
// Remember that every option (except individualDelays) can be defined as single value or array
var options =  {   // word 3
            size : 150,
            weight : 12,
            color: '#151517',
            duration: 0.4,
            fade: 0,
            delay: 0.2,
            easing: d3_ease.easePolyOut.ease
        };

// Initializing the text (Letters parameters: container-element, options)
var myText = new Letters(el, options);
// Show letters with the default options defined
myText.show();

var description = new TextFx(document.querySelector('.description'));

var effect = {
    in: {
        duration: 1000,
        delay: function(el, index) { 
            return 2500+index*40; 
        },
        easing: 'easeOutExpo',
        opacity: 1,
        translateY: ['50%','0%']
    },
    out: {
        duration: 500,
        delay: function(el, index) { 
            return index*0; 
        },
        easing: 'easeOutExpo',
        opacity: 0,
        translateY: '-50%'
    }
}

description.hide(effect,() => {
    description.show(effect);
})



var line = anime({
    targets: ".line",
    width: "40%",
    delay: "2000",
    easing: 'easeInOutQuart'
}).finished.then(() => {

});



particlesJS({
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#252627"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#252627"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#252627",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});