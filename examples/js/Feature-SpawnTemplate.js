let aAssets = document.querySelector('a-assets');
console.log("assets", aAssets)

// create asset reference and set gltf atributes
// let maskn95 = document.createElement('a-asset-item');
let objb = document.createElement('a-asset-item');
 // maskn95.setAttribute('id', 'mask')
objb.setAttribute('id', 'bandeja')

// maskn95.setAttribute('src', '../../Models/gltf/maskn95.gltf')
objb.setAttribute('src', '../../Models/gltf/Bandeja02.gltf')

// aAssets.appendChild(maskn95);
aAssets.appendChild(objb);


// set template

let maskTemplate = document.createElement('template');
let rootEntity = document.createElement('a-entity');
let bodyEntity = document.createElement('a-entity');

maskTemplate.setAttribute('id','vxr-obj-maskn95')

rootEntity.setAttribute('id','Root-mask')
bodyEntity.setAttribute('id', 'maskn9501')
bodyEntity.setAttribute('draggable', '')
bodyEntity.setAttribute('graggable', '')
bodyEntity.setAttribute('feature-setattributes', '');
bodyEntity.setAttribute('rotation', '0 90 0')
rootEntity.append(bodyEntity); //innner
maskTemplate.content.append(rootEntity) //medium
aAssets.append(maskTemplate); //root


console.log("executing feature template")

let templatesResult;
let sceneElTemplate = document.querySelector('a-scene');

// fetch(url).then(
//     function (u) { return u.json(); }
// ).then(
//     function (json) {
//         templatesResult = JSON.parse(JSON.stringify(json));

//         spawnTemplate(templatesResult);
//     }
// )
// function spawnTemplate(structure) {
//     let i = 0;
//     console.log("executing feature template before  foreach");

//     structure.forEach(item => {
//         console.log("executing feature template inside foreach");
//         i++
//         let maskTemplate = document.createElement('template');
//         let rootEntity = document.createElement('a-entity');
//         let bodyEntity = document.createElement('a-entity');
//         // let src = item.obj.toString();
//         maskTemplate.setAttribute('id', item.template);
//         console.log("item template: ", item.template);
//         console.log("item this.el: ", this);


//         rootEntity.setAttribute('id', 'Root-mask');
//         bodyEntity.setAttribute('id', 'maskn9501');
//         bodyEntity.setAttribute('draggable', '');
//         bodyEntity.setAttribute('graggable', '');
//         bodyEntity.setAttribute("feature-setattributes", `instance:${i}`)
//         console.log("obj: ", i);
//         console.log("iterator: ", bodyEntity);
//         bodyEntity.setAttribute('rotation', '0 90 0');
//         bodyEntity.setAttribute('position', '0 1.5 -0.2');



//         var delayInMilliseconds = 1000; //1 second

//         setTimeout(function () {
//             //your code to be executed after 1 second

//             rootEntity.append(bodyEntity); //innner
//             maskTemplate.content.append(rootEntity); //medium
//             aAssets.append(maskTemplate); //root

//         }, delayInMilliseconds);
//     });
// }