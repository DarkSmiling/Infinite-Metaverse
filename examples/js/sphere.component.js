AFRAME.registerComponent('sphere', {
    schema: {
        color: { type: 'color', default: '#e710eb' },
        intensity: { type: 'number', default: 0.1 },
        reflectivity: { type: 'number', default: 1 }
    },
    update: function () {
        this.el.setObject3D('pointlight', new THREE.PointLight(this.data.color, this.data.intensity, 20));
        let pointlight = this.el.getObject3D('pointlight');
        pointlight.castShadow = true;

        var material1 = new THREE.MeshPhongMaterial({
            color: this.data.color,
            side: THREE.DoubleSide,
            alphaTest: 1,
            shininess: 100,
            specular: this.data.color,
            envMap: new THREE.CubeTextureLoader()
                .setPath('img/cubemapsky/')
                .load([
                    'posx.png',
                    'negx.png',
                    'posy.png',
                    'negy.png',
                    'posz.png',
                    'negz.png'
                ]),
            reflectivity: this.data.reflectivity,
            emissive: 0x59ff00
        });
        var material = new THREE.MeshBasicMaterial({
            color: this.data.color,
            wireframe: false
        })
        var material2 = new THREE.MeshBasicMaterial({
            envMap: new THREE.CubeTextureLoader()
                .setPath('img/cubemapsky/')
                .load([
                    'posx.png',
                    'negx.png',
                    'posy.png',
                    'negy.png',
                    'posz.png',
                    'negz.png'
                ]),
        })
        var geometry = new THREE.SphereGeometry(0.2, 32, 16);
        let sphere = this.el.setObject3D('mesh', new THREE.Mesh(geometry, material2));
        pointlight.sphere;
    }
});    