AFRAME.registerComponent('animation-trigger', {
  schema: {
    triggerKeyCode: { default: 32 },
    boolVar: { default: false } // spacebar
  },
  
  init: function () {
  },

  update: function () {
    var that = this;
    console.log(this.data.boolVar)
    if (this.data.boolVar) {
      // let instruments = document.getElementById("instruments")
      this.el.setAttribute("animation-mixer", "loop: once; clampWhenFinished: true; timeScale: 1")
    }   
  }
})

