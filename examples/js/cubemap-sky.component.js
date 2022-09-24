AFRAME.registerComponent('cubemap-sky', {
    init: function () {
      this.el.sceneEl.object3D.background = new THREE.CubeTextureLoader()
          .setPath('../img/cubemapsky/')
          .load([
            'posx.png',
            'negx.png',
            'posy.png',
            'negy.png',
            'posz.png',
            'negz.png'
          ]);

    }
  })