AFRAME.registerComponent('attach-intracath', {
    schema: {
  child: {type: 'int', default: 0}
  },
    init: function() {
      var el = this.el;
      this.el.addEventListener('collide', function(e) {
        console.log('collision ', e.detail.body.el);

    let classes= e.detail.body.el.className.split(' ')
    if(classes.includes("vxr-obj-intracath")){
    console.log('funca ', e.detail.body.el);
    
        console.log('Syringe has collided with ', e.detail.body.el);
        let intracathInit =document.getElementById("e-intracath-piece-1")
        let intracathEnd=document.getElementById("vxr-intracath-second-part")

        intracathEnd.setAttribute('visible','true')
        intracathEnd.setAttribute('dynamic-body','mass:0.0')

        intracathInit.setAttribute('visible','true')
        e.detail.body.el.setAttribute("visible","false")
        e.detail.body.el.remove();

        

      }else{
        console.log('no funca ', e.detail.body.el);

      }
       
      });
    }
  })