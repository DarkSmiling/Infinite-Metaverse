/* global AFRAME */
AFRAME.registerComponent('rotator', {
    schema: {
        speed: { default: 1 }
        
      },
    init: function() {
        console.log("is working");
        
    },
    tick: function () {
        //this.el.object3D.rotation.y = Math.sin(((time*this.data.speed)/1000)*Math.PI);
        // console.log("time:" , time );
        // console.log("HHHHHHHH" + this.el.object3D.rotation.y);
      }  
  }); 