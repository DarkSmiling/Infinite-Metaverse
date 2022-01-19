
let ojectsResult
 let sceneEl = document.querySelector('a-scene');

fetch(url).then(
  function (u) { return u.json(); }
).then(
  function (json) {
      ojectsResult = JSON.parse(JSON.stringify(json));
      var delayInMilliseconds = 3000; //1 second

      setTimeout(function() {
        //your code to be executed after 1 second
     
    spawnEntities(ojectsResult)
  }, delayInMilliseconds);
  }
)

function spawnEntities(structure) {
   let i =0

  structure.forEach(item => {
    i++
    let idTemplate =item.template 
    let entityEl = document.createElement('a-entity');
    entityEl.setAttribute("id",`${idTemplate.replace("vxr-obj-template-",'')}`)
    entityEl.setAttribute("position", "0 1.5 -0.2")


    if(item.selector=="#instruments"){
      entityEl.setAttribute("networked", `template:#${item.template};attachTemplateToLocal:true`)
     }else{
      entityEl.setAttribute("networked", `template:#${item.template};attachTemplateToLocal:true`)

    }

    sceneEl.appendChild(entityEl);
   });
}

AFRAME.registerComponent('spawnobjects', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },

  init() {
 
  },

});