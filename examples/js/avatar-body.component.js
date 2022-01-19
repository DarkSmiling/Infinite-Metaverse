/* global AFRAME */
AFRAME.registerComponent('avatar-body', {
  schema: {
    body: {type: 'selector'},
    id: {type: 'string' }  
    },
  init: function() {
    var data = this.data;
    var el = this.el;
    this.body = document.getElementById(data.body);
    console.log("body", data.body);
    console.log("ROTATION HEAD" + this.el.object3D.rotation.y);
    el.setAttribute('constraint',
                    'type: coneTwist; maxForce: 10; target:' + data.id + ';pivot: 0.0 -0.2 0.0; targetPivot: 0.0 -0.2 0.0; axis: 0.0 0.1 0.0; targetAxis: 0.0 0.1 0.0; wakeUpBodies: false');
  },
  tick: function () {
    var data = this.data;
  if(data.body.object3D.rotation.y > 0.6 || data.body.object3D.rotation.y < -0.6)
    {
      data.body.setAttribute('dynamic-body', 'angularDamping:0.1');

    }else
    {
      data.body.setAttribute('dynamic-body', 'angularDamping:1');
    }
  }   
}); 