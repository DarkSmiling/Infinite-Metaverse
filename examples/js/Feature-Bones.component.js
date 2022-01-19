AFRAME.registerComponent('skin-component', {
  schema: {
    triggerKeyCode: { default: 32 } // spacebar
  },
  init: function () {

    let meshId=this.el.id
    let el = this.el
    let fatherMesh = this.el.getAttribute('position');

    this.el.addEventListener('model-loaded', () => {
    // let sceneEl = document.getElementById("boneToTest");
    let mesh = this.el.getObject3D("mesh")

      let i = 0;
      console.log("mesh",mesh)
      //  let objToIterate = mesh.children[0].children[1].children[0].skeleton.bones
       let objToIterate = mesh.children[0].children[1].skeleton.bones // catheter


      //-------------------------------------------------//
      //----------------- skeletal helper ---------------//
      //-------------------------------------------------//

      let scene=document.querySelector('a-scene').object3D;  // THREE.Scene      
      let skinned = mesh.children[0]
 

      var delayInMilliseconds = 5000; //5 second
      setTimeout(function () {       

        objToIterate.forEach(bone => {
          console.log("bone: ", bone)



 
          let characterToLocalMtx = new THREE.Matrix4();
          characterToLocalMtx.getInverse(el.object3D.matrixWorld);

          let boneToCharacterMtx = new THREE.Matrix4();
          boneToCharacterMtx.multiplyMatrices(characterToLocalMtx, bone.matrixWorld);

          let position = new THREE.Vector3();
          position.applyMatrix4(boneToCharacterMtx);

          let quaternion = new THREE.Quaternion().setFromRotationMatrix(boneToCharacterMtx);
          let rotation = new THREE.Euler().setFromQuaternion(quaternion);
          let rotationDeg = { x: THREE.Math.radToDeg(rotation.x), y:THREE.Math.radToDeg(rotation.y), z:THREE.Math.radToDeg(rotation.z) }
          let ParentBone = bone.name;
          let entityEl = document.createElement('a-box')
          el.append(entityEl);

          entityEl.setAttribute("id", bone.name)
          entityEl.setAttribute("dynamic-body", "mass:0.0")
          entityEl.setAttribute("geometry", "width:0.01 ; height:0.02;depth:0.01")
          entityEl.setAttribute("position", position)
          entityEl.setAttribute("rotation", rotationDeg)
          entityEl.setAttribute("opacity", "0.5")
          entityEl.setAttribute("grabbable", "")
          entityEl.setAttribute("draggable", "")
          entityEl.setAttribute("ondragstart", `genericBone(${bone.name})`);
          entityEl.setAttribute("ondragend", `genericBoneEnd(${bone.name})`);
          entityEl.setAttribute("constraint", `"type: hinge; target:#hinge-target; axis: 0 1 0; targetAxis: 0 1 0; pivot: -0.125 0 0; 
          targetPivot: 0.125 0 0.125;"`)


          // entityEl.object3D.position = position;
          // entityEl.object3D.quaternion = quaternion;

          entityEl.setAttribute("boneposition", `mesh_id:${meshId};bone_id:${i}`)
          i++;
        })

      }, delayInMilliseconds);
    })
  },
  update: function () {
  }
})