particlesJS("particles-js", {
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#00d1ff"  // 🔵 Light blue color
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 0.8,
            opacity_min: 0.2,
            sync: false
          }
        },
        size: {
          value: 2.5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.5,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00d1ff",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          out_mode: "out"
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: {
              opacity: 0.4
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });