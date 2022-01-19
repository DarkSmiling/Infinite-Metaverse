AFRAME.registerComponent('alpha-map', {
    schema: {
        src: {type: 'map'}
    },
    init: function() {
        this.el.sceneEl.systems.material.loadTexture(this.data.src, {src: this.data.src}, this.callback.bind(this));
    },
    callback: function(texture) {
        this.el.object3DMap.mesh.material.alphaMap = texture;
    }
});