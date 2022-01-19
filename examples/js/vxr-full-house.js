let sceneRoot = document.querySelector('a-scene');
let target={x:-0.14, y:1, z: -0.363}

var qrot = new THREE.Quaternion();


        const theaterSlots = [
       {
         identifier: '1',
         position: { x: -6, y: -2.3, z: 0.5 },
       },
       {
         identifier: '2',
         position: { x: -5.5, y: -2.3, z: 2.1 }
       },
       {
         identifier: '3',
         position: { x: -4.5, y: -2.3, z: 3.5 }
       },
       {
         identifier: '4',
         position: { x: -1.7, y: -2.3, z: 5.5 }
       },
       {
         identifier: '5',
         position: { x: 0, y: -2.3, z: 5.8 }
       },
       {
         identifier: '6',
         position: { x: 1.7, y: -2.3, z: 5.5 }
       },
       {
         identifier: '7',
         position: { x: 4.5, y: -2.3, z: 3.5 }
       },
       {
         identifier: '8',
         position: { x: 5.5, y: -2.3, z: 2.1 }
       },
       {
         identifier: '9',
         position: { x: 6, y: -2.3, z: 0.5 }
       },
       {
         identifier: '10',
         position: { x: -7, y: -1.3, z: 0.5}
       },
       {
         identifier: '11',
         position: { x: -6.5, y: -1.3, z: 2.6 }
       },
       {
         identifier: '12',
         position: { x: -5.5, y: -1.3, z: 4.3}
       },
       {
         identifier: '13',
         position: { x: -2, y: -1.3, z: 6.9 }
       },
       {
         identifier: '14',
         position: { x: 0.1, y: -1.3, z: 7.1}
       },
       {
         identifier: '15',
         position: { x: 2.2, y: -1.3, z: 6.9 }
       },
       {
         identifier: '16',
         position: { x: 5.7, y: -1.3, z: 4.2}
       },
       {
         identifier: '17',
         position: { x: 6.6, y: -1.3, z: 2.4 }
       },
       {
         identifier: '18',
         position: { x: 7.1, y: -1.3, z: 0.6}
       },
       {
         identifier: '19',
         position: { x: -8.5, y: -0.2, z: 0.6 }
       },
       {
         identifier: '20',
         position: { x: -8.2, y: -0.2, z: 2.3}
       },
       {
         identifier: '21',
         position: { x: -7.5, y: -0.2, z: 4 }
       },
       {
         identifier: '22',
         position: { x: -6.5, y: -0.2, z: 5.4}
       },
       {
         identifier: '23',
         position: { x: -2.5, y: -0.2, z: 8 }
       },
       {
         identifier: '24',
         position: { x: -0.8, y: -0.2, z: 8.4}
       },
       {
         identifier: '25',
         position: { x: 1, y: -0.2, z: 8.4 }
       },
       {
         identifier: '26',
         position: { x: 2.7, y: -0.2, z: 8}
       },
       {
         identifier: '27',
         position: { x: 6.4, y: -0.2, z: 5.3 }
       },
       {
         identifier: '28',
         position: { x: 7.4, y: -0.2, z: 4}
       },
       {
         identifier: '29',
         position: { x: 8, y: -0.2, z: 2.3 }
       },
       {
         identifier: '30',
         position: { x: 8.5, y: -0.2, z: 0.7}
       },
       {
         identifier: '31',
         position: { x: -9.6, y: 0.5, z: 1.8 }
       },
       {
         identifier: '32',
         position: { x: -8.9, y: 0.5, z: 3.6}
       },
       {
         identifier: '33',
         position: { x: -7.5, y: 0.5, z: 5.5 }
       },
       {
         identifier: '34',
         position: { x: -2, y: 0.5, z: 9.2}
       },
       {
         identifier: '35',
         position: { x: 0, y: 0.5, z: 9.6 }
       },
       {
         identifier: '36',
         position: { x: 2.4, y: 0.5, z: 9.4}
       },
       {
         identifier: '37',
         position: { x: 8, y: 0.5, z: 5.5 }
       },
       {
         identifier: '38',
         position: { x: 8.9, y: 0.5, z: 3.7}
       },
       {
         identifier: '39',
         position: { x: 9.6, y: 0.5, z: 1.4 }
       },
       {
         identifier: '40',
         position: { x: -11, y: 1.3, z: 0.7}
       },
       {
         identifier: '41',
         position: { x: -10.7, y: 1.3, z: 2.6 }
       },
       {
         identifier: '42',
         position: { x: -10.4, y: 1.3, z: 4}
       },
       {
         identifier: '43',
         position: { x: -9.3, y: 1.3, z: 5.8 }
       },
       {
         identifier: '44',
         position: { x: -8.1, y: 1.3, z: 7.2}
       },
       {
         identifier: '45',
         position: { x: -3.6, y: 1.3, z: 10.5 }
       },
       {
         identifier: '46',
         position: { x: -1.9, y: 1.3, z: 10.9}
       },
       {
         identifier: '47',
         position: { x: 0, y: 1.3, z: 11 }
       },
       {
         identifier: '48',
         position: { x: 1.9, y: 1.3, z: 10.9}
       },
       {
         identifier: '49',
         position: { x: 3.8, y: 1.3, z: 10.5 }
       },
       {
         identifier: '50',
         position: { x: 8.5, y: 1.3, z: 7.3}
       }
     ]
     
   const namesSpectatorsArray=[
    "Dr. Foreman"
    ,
    "Lic. Verne"
    ,
    "Dra. Cameron"
    ,
    "Ing. Donovan"
    ,
    "Dra. Meredith"
    ,
    "Lic. Vinicio"
    ,
    "Lic. Wendy"
    ,
    "Dr. MasatoSan"
    ,
    "Dr. Murphy"
    ,
    "Lic. Linda"
    ,
    "Lic. Xiomara"
    ,
    "Lic. Iliana"
    ,
    "Ing. Jimmie"
    ,
    "Dra. Cuddy"
    ,
    "Lic. Monique"
    ,
    "Phd. Park"
    ,
    "Dr. Wilson"
    ,
    "Dr. Andrew"
    ,
    "Dra. Yang"
    ,
    "Phd. Hope"
    ,
    "Dr. Strange"
    ,
    "PhD. Lee"
    ,
    "Est. Melendez"
    ,
    "Dr. Mallard"
    ,
    "Dra. Sciuto"
    ,
    "Dr. Grissom"
    ,
    "Dra. Willows"
    ,
    "PhD. Langston"
    ,
    "Lic. Stokes"
    ,
    "Lic. Brown"
    ,
    "Dra. Sidle"
    ,
    "Dr. Hodges"
    ,
    "Lic. Brass"
    ,
    "Dr. Reid"
    ,
    "Lic. Gibbs"
    ,
    "Ing. MacGee"
    ,
    "Lic. Bishop"
    ,
    "Dr. Palmer"
    ,
    "Lic. Torres"
    ,
    "Est. Masters"
    ,
    "Dra. Aoki"
    ,
    "Dra. Reznick"
    ,
    "Dr. Connors"
    ,
    "Dra. Tanaka"
    ,
    "Dr. McCoy"
    ,
    "Dr. Wayne"
    ,
    "Est. Allen"
    ,
    "Lic. Kent"
    ,
    "Dra.Prince"
    ,
    "Lic. Jordan"
    ,
    "Dr. Jones"
    ,
    "PhD. Palmer"
    ,
    "Dr. Smith"
    ,
    "Lic. Blake"
    ,
    "Lic. Raymond"
    ,
    "Dra. Hoshi"
    ,
    "Dr. Dyne"
    ,
    "PhD. Hank"
    ,
    "PhD. Banner"
    ,
    "Dr. Stark"
    ,
    "Lic. Rogers"
    ,
    "Lic. Maximoff"
    ,
    "Lic. Barton"
    ,
    "Dra. Rambeau"
    ,
    "Lic. Rhodes"
    ,
    "Est. McKenzie"
    ,
    "Dr. Reed"
    ,
    "Est. Walkers"
    ,
    "PhD. Vaughn"
    ,
    "Lic. Hammond"
    ,
    "Est. Baker"
    ,
    "Dra. Haliday"
    ,
    "Lic. Parker"
    ,
    "Est. Santos"
    ,
    "Dra. Karkarov"
    ,
    "Lic. Powel"
    ,
    "Est. Jones"
    ,
    "Dra. Astrovik"
    ,
    "Dra. Santiago"
    ,
    "Lic. Lang"
    ,
    "Dra. Leigh"
    ,
    "PhD. Ackerman"
    ,
    "Lic. Howlett"
    ,
    "Dr. Reynolds"
    ,
    "PhD. Cho"
    ,
    "Lic. Buchanan"
    ,
    "Dra. Drew"
    ,
    "Dr. Carter"
    ,
    "PhD. OGrady"
    ,
    "Lic. Rider"
    ,
    "Dr. Murdock"
    ,
    "Est. Johnson"
    ,
    "Dra. Ororo"
    ,
    "PhD. Braddock"
    ,
    "Lic. Summers"
    ,
    "Dra. Devoux"
    ,
    "Dra. Fesi"
    ,
    "Lic. Milton"
    ,
    "Dra. Shang"
    ,
    "Est. Dare"
    ,
    "Dra. Marie"
    ,
    "Dr. Yoshida"
    ,
    "Lic. Alvarez"
    ,
    "PhD. Creed"
    ,
    "Dra. Guerrero"
    ,
    "Dra. Foster"
    ,
    "Dra. Khan"
    ,
    "Est. Morales"
    ,
    "Est. Hollis"
    ,
    "PhD. Maverick"
    ]
    


     let i=0


     theaterSlots.forEach(item=>{
        item.position.y+=4
       let pos = item.position
       let entityEl = document.createElement('a-entity');
       entityEl.setAttribute("id",i)
       entityEl.setAttribute("position",pos)
       entityEl.setAttribute("gltf-model","#SpectatorAvatar")
       entityEl.setAttribute("randomize-spec-color","")
       
       let rotationSpectator

       var angleDeg = Math.atan2(pos.x - target.x, pos.z - target.z) * 180 / Math.PI;
         entityEl.setAttribute("rotation",`0, ${angleDeg},0`)
   

     let nameSpectator = document.createElement('a-entity');
      //  nameSpectator.setAttribute("text", { value:         namesSpectatorsArray[i], align: 'center', side: 'double', color: 'yellow', font: 'https://cdn.aframe.io/fonts/Exo2SemiBold.fnt' ,fontsize: '10px'});
       nameSpectator.setAttribute('rotation',
         '0 180 0',
       );
       nameSpectator.setAttribute('position', {
         x: 0, y: 0.525, z: 0,
       });
       nameSpectator.setAttribute('scale',
         '3 3 3 ',
       );

       entityEl.appendChild(nameSpectator)
       sceneRoot.appendChild(entityEl);

       i+=1;

       

     })
  



     

