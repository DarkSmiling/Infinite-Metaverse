let showCloth=false

AFRAME.registerComponent('attach-point-v2', {
  schema: {
    objClass: { default: 'magn' },

  },
  init: function () {
    let data = this.data;
    var el = this.el;
    let thermometerValidator=false;

    // let pañal_Abierto = document.getElementById("Pañal")
    // let Pañal_Cerrado = document.getElementById("e-Pañal_Cerrado")
    // let Manta_Abierta = document.getElementById("e-Manta_Abierta")
    // let Baby_Burrito = document.getElementById("e-Baby_Burrito")
    // let Baby_Pose_Idle = document.getElementById("e-Baby_Pose_Idle")
    // let baby = document.getElementById("baby")
    // let Baby_Pose_Side = document.getElementById("e-Baby_Pose_Side")
    // let Manta_Cerrada = document.getElementById("e-Manta_Cerrada")
    




    this.el.addEventListener('collide', function (e) {
      let classes = e.detail.body.el.className.split(' ')
      if (classes.includes("vxr-obj-heparinseal")) {
        let x = document.getElementById("static-heparinseal")
        x.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }
      if (classes.includes("vxr-obj-MedicalClothe")) {
        let medicalClothe = document.getElementById("StaticMedicalClothe")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();

      }

      if (classes.includes("vxr-obj-Tape-Bow")) {
        let medicalClothe = document.getElementById("Static-Tape-Bow")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-Tape-Butterfly")) {
        let medicalClothe = document.getElementById("Static-Tape-Butterfly")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      } 
      if (classes.includes("vxr-obj-Tape-Normal" )) {
        let medicalClothe = document.getElementById("Static-Tape-Normal")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      } 

      if ( classes.includes("vxr-obj-Tape-Normal1")) {
        let medicalClothe = document.getElementById("Static-Tape-Normal")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      } 
       if ( classes.includes("vxr-obj-Tape-Normal3")) {
        let medicalClothe = document.getElementById("Static-Tape-Normal")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      } 

      if (classes.includes("vxr-obj-Tape-Normal2")) {
        let medicalClothe = document.getElementById("Static-Tape-Normal")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      } 

      if (classes.includes("vxr-obj-rubber")) {
        let medicalClothe = document.getElementById("Static-vxr-obj-rubber")
        medicalClothe.setAttribute("visible", "true")
        // setMassRubber() 
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-Clamp")) {
        let medicalClothe = document.getElementById("e-ClampClosed")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-allistweezers")) {
        let medicalClothe = document.getElementById("e-Cordon_Tijera")
        medicalClothe.setAttribute("dynamic-body", "")
        // e.detail.body.el.remove();
      }
       
  


      //ending the first  part
      if (classes.includes("vxr-obj-CleftGauze")) {
        let Manta_Abierta = document.getElementById("e-Manta_Abierta")
        let Manta_Cerrada = document.getElementById("e-Manta_Cerrada")

        Manta_Abierta.setAttribute("visible","false")
        Manta_Cerrada.setAttribute("visible","true")

        let baby = document.getElementById("baby")

        baby.setAttribute("dynamic-body","mass:0")
        e.detail.body.el.remove();
      
      }

      //after simulate plantares return baby to crib.
      if(data.objClass=="balance" && classes.includes("vxr-obj-Baby_Vacuna")){
        showCloth=true;        
      }

      if (classes.includes("vxr-obj-Baby_Vacuna") && showCloth && data.objClass!="balance" ) {
        let Manta_Abierta = document.getElementById("e-Manta_Abierta")

        let baby = document.getElementById("baby")
        let Baby_Pose_Side = document.getElementById("e-Baby_Pose_Side")
        let Manta_Cerrada = document.getElementById("e-Manta_Cerrada")


        baby.setAttribute("visible","false")
        baby.remove();
        Manta_Cerrada.setAttribute("visible","false")
        Baby_Pose_Side.setAttribute("visible","true")
        Manta_Abierta.setAttribute("visible","true")   
        thermometerValidator=true     

      }

      if (classes.includes("vxr-obj-Thermometer") && thermometerValidator ) {
        
        console.log("termometro entro, mostrar idle, ocultar side.")
        let Baby_Pose_Idle = document.getElementById("e-Baby_Pose_Idle")
        let Baby_Pose_Side = document.getElementById("e-Baby_Pose_Side")


        Baby_Pose_Side.setAttribute("visible","false")
        Baby_Pose_Idle.setAttribute("visible","true")
        

      }


      if (classes.includes("vxr-obj-Pañal_Prueba") ) {
        let Pañal_Cerrado = document.getElementById("e-Pañal_Cerrado")
        let Baby_Burrito = document.getElementById("e-Baby_Burrito")
        let Manta_Abierta = document.getElementById("e-Manta_Abierta")
        Pañal_Cerrado.setAttribute("visible","true")
        e.detail.body.el.remove();


        setTimeout(function() {
          let Baby_Pose_Idle = document.getElementById("e-Baby_Pose_Idle")
          Pañal_Cerrado.setAttribute("visible","false")
          Manta_Abierta.setAttribute("visible","false")
          Baby_Pose_Idle.setAttribute("visible","false")
          Baby_Burrito.setAttribute("visible","true")

         }, 1500);
     
        

      }

      if (classes.includes("vxr-obj-Aposito_BabyPatient3-static")) {
        let medicalClothe = document.getElementById("e-Aposito_BabyPatient3")
        medicalClothe.setAttribute("animation-mixer", "loop:once;repetitions:once;clampWhenFinished:true")
        medicalClothe.setAttribute("visible","true");
        e.detail.body.el.setAttribute("visible","false");
        e.detail.body.el.remove();
      }





      

     });
  }
})