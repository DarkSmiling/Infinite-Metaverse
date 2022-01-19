AFRAME.registerComponent('animation-control', {
    schema: {type: 'string'},

    update: function () {
      var el = this.el;
      var data = this.data;

      let leftHand = document.querySelector('#lefthand');
      let rightHand = document.querySelector('#righthand');
      
      el.addEventListener("grab-start", function(e) {
        if (e.detail.hand.id == 'lhand') {
          leftHand.setAttribute("hand-animation", `animation: ${data}`);
        } else if (e.detail.hand.id == 'rhand') {
          rightHand.setAttribute("hand-animation", `animation: ${data}`);
        }
      });

      el.addEventListener("grab-end", function(e) {
        if (e.detail.hand.id == 'lhand') {
          leftHand.setAttribute("hand-animation", "animation: idle");
        } else if (e.detail.hand.id == 'rhand') {
          rightHand.setAttribute("hand-animation", "animation: idle");
        }
      });
    }
});