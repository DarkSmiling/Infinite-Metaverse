AFRAME.registerComponent('attach-point', {
  init: function() {
    var el = this.el;
    
    this.el.addEventListener('collide', function(e) {
      let cathter01 = document.getElementById('catheter001');
      let cathter02 = document.getElementById('catheter002');
      let medicalClote01 = document.getElementById('medicalclothe01');
      let medicalClote02 = document.getElementById('medicalclothe02');
      let dinamicTape01 = document.getElementById('tape01');
      let dinamicTape02 = document.getElementById('tape02');
      let dinamicTape03 = document.getElementById('tape03');
      let staticTape01 = document.getElementById('tapestatic01');
      let staticTape02 = document.getElementById('tapestatic02');
      let staticTape03 = document.getElementById('tapestatic03');
      let sphere01 = document.getElementById('sphere1');
      let sphere02 = document.getElementById('sphere2');
      let tapeAdult = document.getElementById('tapeadult');
      let tapeAdultStatic = document.getElementById('tapeadultstatic');
      let disposableStatic02 = document.getElementById('disposablestatic002');
      let animDisposable = document.getElementById('disposableAnim');
      // let animDisposable = document.getElementById('disposableAnim');
      // let staticDisposable = document.getElementById('xvr-disposable');
      console.log('************************************************ ', cathter02);
      console.log('Syringe has collided with ', e.detail.body.el);
      let attachCatheter = document.getElementById('vxr-intracath');
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ', attachCatheter);
      console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb ', e.detail.body.el);
      if(e.detail.body.el==attachCatheter){
        cathter02.setAttribute('dynamic-body', 'mass: 0');
        cathter01.setAttribute('visible', 'true');
        cathter02.setAttribute('visible', 'true');
        e.detail.body.el.setAttribute('constraint','target: #sphere1');
        e.detail.body.el.setAttribute('visible','false');
        e.detail.body.el.remove();
        sphere01.setAttribute('position','0.89964 1.81662 -0.7305');
      }if(e.detail.body.el==medicalclothe01){
        medicalClote01.setAttribute('visible','false');
        sphere02.setAttribute('position','0.89964 15 -0.7305');
        medicalClote02.setAttribute('visible','true');
        medicalClote02.setAttribute('dynamic-body', 'mass: 0');
      }if(e.detail.body.el==dinamicTape01){
        dinamicTape01.setAttribute('visible','false');
        dinamicTape01.remove();
        staticTape01.setAttribute('visible','true');
      }if(e.detail.body.el==dinamicTape02){
        dinamicTape02.setAttribute('visible','false');
        dinamicTape02.remove();
        staticTape02.setAttribute('visible','true');
      }if(e.detail.body.el==dinamicTape03){
        dinamicTape03.setAttribute('visible','false');
        dinamicTape03.remove();
        staticTape03.setAttribute('visible','true');
        staticDisposable.setAttribute('visible','false');
        staticDisposable.remove();
        animDisposable.setAttribute('visible','true');
         animDisposable.setAttribute('animation-trigger','boolVar:true');
        
      }if(e.detail.body.el==tapeAdult){
        tapeAdult.setAttribute('visible','false');
        tapeAdult.remove();
        tapeAdultStatic.setAttribute('visible','true');
        disposableStatic02.setAttribute('visible','true');
        animDisposable.setAttribute('visible','false');
        animDisposable.remove();
      }     
    });
  },
  update: function(oldData) {
    console.log("UPDATE");
  }
})
