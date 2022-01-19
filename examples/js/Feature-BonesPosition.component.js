AFRAME.registerComponent('boneposition', {
  schema: {
    bone: { default: null },
    mesh_id: { default: "" },
    bone_id: { default: "" },
    vectorPosition: { default: { x: 0, y: 0, z: 0 } },
    varBool: { default: false }


  },

  init: function () {


    //let boneReference = document.getElementById(this.data.mesh_id).getObject3D("mesh").children[0].children[1].children[0].skeleton.bones[this.data.bone_id];
    let boneReference = document.getElementById(this.data.mesh_id).getObject3D("mesh").children[0].children[1].skeleton.bones[this.data.bone_id];//catheter

    
    this.data.bone = boneReference;
    console.log("mesh: ", boneReference)

  },

  tick: function () {

    // let worldQuaternion = new THREE.Quaternion();
    // this.el.object3D.getWorldQuaternion(worldQuaternion);
    // this.data.bone.rotation.setFromQuaternion(worldQuaternion)

    let boneParentMtx = new THREE.Matrix4();
    if (this.data.bone.parent) {
      boneParentMtx = this.data.bone.parent.matrixWorld.clone();
    }

    let worldToBoneParentMtx = new THREE.Matrix4()
    worldToBoneParentMtx.getInverse(boneParentMtx);

    let worldToBoneMtx = new THREE.Matrix4();
    worldToBoneMtx.multiplyMatrices( worldToBoneParentMtx,this.el.object3D.matrixWorld);

    let position = new THREE.Vector3();
    position.applyMatrix4(worldToBoneMtx);

    let quaternion = new THREE.Quaternion().setFromRotationMatrix(worldToBoneMtx);

    this.data.bone.position.copy(position);
    this.data.bone.quaternion.setFromRotationMatrix(worldToBoneMtx) 

  
  }
})