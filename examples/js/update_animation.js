AFRAME.registerComponent('update-animation', {
  schema: {
    animation: { type: "string", default: "ArmatureAction" },

  },

  init: function () {

  },

  update: function (oldData) {
    console.log("old data: ", oldData)
    console.log(" data: ", this.data.animation)

    if (oldData.animation !== this.data.animation) {
      document.getElementById("instruments").setAttribute('animation-mixer', `clip:ArmatureAction;loop:repeat;timeScale:100`);
      console.log("working")
    } else {
      console.log("not working")
    }
  }

})
 