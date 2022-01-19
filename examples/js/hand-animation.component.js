AFRAME.registerComponent('hand-animation', {
    schema: {animation: { 
          type: 'string',
          default: 'idle' }
    },
    update: function (oldData) {
      if (oldData.animation !== this.data.animation) {
        this.el.setAttribute('animation-mixer', `clip:${this.data.animation}; duration: 0.5; loop: once; clampWhenFinished: true; crossFadeDuration: .1`);
      }
    }
})