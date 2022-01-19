const colors = ['lightpink', 'aquamarine', 'beige', 'darkred', 'darkgreen', 'darkorange', 'darkcyan', 'brown'];
//const color = colors[Math.floor(Math.random() * colors.length)];
let ColorEnumerator=0;
AFRAME.registerComponent('randomize-spec-color', {
  schema: {
    color: { default: 'red' }
  },

  init: function () {
    // Wait for model to load.
    this.el.addEventListener('model-loaded', () => {
      // Grab the mesh / scene.
      const obj = this.el.getObject3D('mesh');
      // Go over the submeshes and modify materials we want.
      obj.traverse(node => {
        if (node.name.indexOf('Mesh.024_2') !== -1 ) {
          ColorEnumerator+=1
           let colour = colors[ColorEnumerator%8]
          node.material.color.set(colour);
        }
      });
    });
  }
});