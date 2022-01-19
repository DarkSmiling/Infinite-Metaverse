const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('name');
const spawn = urlParams.get('spawn');

document.addEventListener('DOMContentLoaded', () => {                           
  const scene = document.querySelector('a-scene');
  const sceneLoaded = () => {
    if ( userName && spawn ) {
        document.getElementById("player").setAttribute("networked", "template:#avatar-template;attachTemplateToLocal:false;");
    }
  }
  if (scene.hasLoaded) {                                                         
    sceneLoaded();
  } else {
    scene.addEventListener('loaded', sceneLoaded);
  }
});

AFRAME.registerComponent('name-up', {
    
    schema: {
        name: { default: userName }
    },

    update: function () {
        var el = this.el;

        el.setAttribute(value, this.data.name);
        el.setAttribute(align, center);
        el.setAttribute('material', {
            color: 'yellow',
        });
        el.setAttribute('rotation',
            '0 180 0',
        );
        el.setAttribute('position', {
            x: 0, y: 2.25, z: 0,
        });
    }
});