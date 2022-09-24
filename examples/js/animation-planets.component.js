AFRAME.registerComponent('animation-planets', {
    schema: {
        time: { type: 'number', default: 0.0001 },
        timeobj: { type: 'number', default: 20 },
        height: { type: 'number', default: 50 },
        height2: { type: 'number', default: 0.8 },

    },
    tick: function () {
        let time = performance.now() * this.data.time;

        // this.el.object3D.position.x = Math.sin(time * -3) * 3;
        this.el.object3D.position.y = Math.sin(time * this.data.timeobj) * this.data.height2 + this.data.height;
        // this.el.object3D.position.z = Math.sin(time * -2) * 2;

        this.el.object3D.rotation.y = time;
        // this.el.object3D.rotation.z = time;

        time += 1;
    }
});  