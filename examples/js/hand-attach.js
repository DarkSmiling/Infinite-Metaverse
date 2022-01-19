let obj; 
AFRAME.registerComponent('hand-attach', {
  init: function() {
    var el = this.el;
    this.el.addEventListener('collide', function(e) {
      console.log('Hand has collided with ', e.detail.body.el);
      obj = e.detail.body.el;
    });
    this.el.addEventListener('buttondown', function(e){
      console.log('Grip Down');
      obj.setAttribute('dynamic-body','mass:5');
      obj.removeAttribute('constraint');
    });
    this.el.addEventListener('buttonup', function(e){
      console.log('Grip Up');
      // obj.removeAttribute('constraint');
      obj=0;
    });
  }
})