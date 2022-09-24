
AFRAME.registerComponent("feature-spawn-planets", {
  schema: {
    
  },
  init(){
    var delayInMilliseconds = 5000; //1 second
    let scene = document.querySelector("a-scene")

    setTimeout(function() {
    
      
      let lap = 0;
      console.log("scene",scene);
      for (let i = 1; i < 6; i++) {
        console.log("spawn planet", i)
        lap++;
        degrees = 360 / 5 * i;
        let radius_x = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
        let radius_z = Math.floor(Math.random() * (500 - 200 + 1)) + 200;       
        console.log({radius_x})
        let x_coord = Math.cos(degrees * (3.1416) / 180) * radius_x;
        let z_coord = Math.sin(degrees * (3.1416) / 180) * radius_z;
        console.log({x_coord})
        const entityEl = document.createElement("a-entity");
        
        entityEl.setAttribute("gltf-model", `#planet0${lap}`);
        entityEl.setAttribute("position", {x:x_coord, y:100, z:z_coord});
        entityEl.setAttribute("scale", {x:15, y:15, z:15});
        entityEl.setAttribute("anim", "");
      
        if(lap == 3){
          lap = 0;      
        }
        
        scene.appendChild(entityEl);
      }
    }, delayInMilliseconds);
  }, 
  
  // tick: function (time, timeDelta) {
  // this.el.rotation.x += 0.01;
  // },

});

