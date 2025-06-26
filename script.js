function loadParticles(mode) {
  const color = mode === 'dark' ? '#ffffff' : '#00d1ff';

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
        value: color
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
        color: color,
        opacity: 0.4,
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
            opacity: 0.6
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// Initial load for light mode
loadParticles("light");

// Toggle logic
const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');

  // Destroy old particles canvas
  const particlesCanvas = document.querySelector('#particles-js canvas');
  if (particlesCanvas) particlesCanvas.remove();

  // Reload particles with correct color
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  loadParticles(mode);
});
