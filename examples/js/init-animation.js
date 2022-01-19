AFRAME.registerComponent('start-animation', {
  // dependencies: ['tracked-controls'],
  schema: {
    hand: { default: 'left' }
  },

  init: function () {    

    this.el.addEventListener('model-loaded', e => {
      this.el.setAttribute("animation-mixer","clip: Initial_to_Idle; timeScale:0; clampWhenFinished: true; loop: once")
      console.log("setting animation") 
    })
   
  },
 
});

