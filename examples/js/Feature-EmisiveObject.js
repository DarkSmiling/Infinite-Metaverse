 AFRAME.registerComponent('emissive-object', {
  schema: {
  child: {type: 'int', default: 0}
  },

  init: function() {

    let el = this.el

    this.el.addEventListener('model-loaded', () => {
      console.log("obj",this.el.getObject3D("mesh"))
      console.log("data",this.data.child)
      this.el.getObject3D("mesh").children[1].material.emissive.g=1

      //$0.getObject3D("mesh").children[1].material.emissive.g=1

    })
 
  }
})