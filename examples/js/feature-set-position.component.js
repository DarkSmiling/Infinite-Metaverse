AFRAME.registerComponent('set-object-position', {
    init: function() {      console.log('objjjjjjjjjjjj: ', this);
    console.log('object: ', this.el.getAttribute('position'));
    let position = new THREE.Vector3(this.el.getAttribute('position').x);
    let x = this.el.getAttribute('position').x;
    let y = this.el.getAttribute('position').y;
    let z = this.el.getAttribute('position').z;      
    this.el.setAttribute('ground-collider', `x:${x}`);
    this.el.setAttribute('ground-collider', `y:${y}`);
    this.el.setAttribute('ground-collider', `z:${z}`);
    console.log('card grabbed: ', position);
       
      
    }
  })