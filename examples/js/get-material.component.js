AFRAME.registerComponent('get', {
    schema: {
        color: { type: 'color', default: '#e710eb' },
        intensity: { type: 'number', default: 0.1 },
        reflectivity: { type: 'number', default: 1 }
    },
    update: function () {
        let mat = this.el.getObject3D("mesh").material
        mat.remove;
        console.log("Material", mat)

    }
});