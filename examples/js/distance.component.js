/* global AFRAME */
AFRAME.registerComponent('avatar-body', {
    schema: {
        distance: { default: 1 }
        
      },
    init: function() {
      this.box = document.getElementById('lock-target')
      console.log("DISTANCE");
    },
    tick: function () {
      let camPos = this.el.object3D.position
      let boxPos = this.box.object3D.position
      if(camPos.distanceTo(boxPos)<1){
        console.log("asdasdasdasd");
        console.log(camPos.distanceTo(boxPos));
        this.el.setAttribute('constraint','type: lock; target: #lock-target; maxForce: 1')
      }else{
        this.el.setAttribute('constraint','type: lock; target: #lock-target; maxForce: 0.1')
      }
      
      }  
  }); 