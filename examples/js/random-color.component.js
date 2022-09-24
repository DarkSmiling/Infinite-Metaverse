    //a-frame component to set random color to an object
    AFRAME.registerComponent('random-color', {
        init: function () {
          this.el.setAttribute('material', 'color', '#' + Math.floor(Math.random() * 16777215).toString(16));
        }
      });
  