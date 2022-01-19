AFRAME.registerComponent('feature-setattributes', {
  schema: {
    instance:{default:'ss'}
  },
  
  init: function () {
    let data = this.data
    console.log("this is the data:", this.data)
    this.el.setAttribute('position','1 1 0')
    this.el.setAttribute('gltf-model', data.instance)
  }, 

  update: function (oldData) {

    console.log("this is the data:", this.data)

   }
})

