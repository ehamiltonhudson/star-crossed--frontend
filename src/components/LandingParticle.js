import React from 'react';
import Particles from 'react-particles-js';
import '../styling/Landing.css';


class LandingParticle extends React.Component {

  render() {
    return (
      <Particles className="particle"
        params={
          {
            "particles": {
              "number": {
                "value": 232,
                "density": {
                  "enable": true,
                  "value_area":5854.732123833044
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 1,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 8
                },
              },
              "opacity": {
                "value": 0.8759538822118227,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 3.329516570435515,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 1.9,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 3.9,
                  "size_min": 0.31,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 0,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1.4430708547789706
              },
              "move": {
                "enable": true,
                "speed": 4.4,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 803.7060304327614,
                  "rotateY": 884.8766334760375
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 72.08694910712106,
                  "line_linked": {
                    "opacity": 0.7568154521972333
                  }
                },
                "bubble": {
                  "distance": 120.81158184520176,
                  "size": 6,
                  "duration": 2.8,
                  "opacity": 0.008120772123013452,
                  "speed": 5
                },
                "repulse": {
                  "distance": 284.2270243054708,
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
          }
        }
      />
    )
  }

}

export default LandingParticle;
