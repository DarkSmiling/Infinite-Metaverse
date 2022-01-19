let arglo

AFRAME.registerComponent('assign-seat', {
  schema: {
    position: {
      x: 0,
      y: 0,
      z: 0
    }
  },

  init: function () {
    let data = this.data;
    let el = this.el;

    // Sets spectator avatar positions 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const spawn = urlParams.get('spawn')
    const roomId = urlParams.get('id')
    console.log("room id: ", roomId)

    let theaterSlots = [
      {
        identifier: '1',
        position: { x: -6, y: -2.3, z: 0.5 },
        used: false

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
        position: { x: -7, y: -1.3, z: 0.5 }
      },
      {
        identifier: '11',
        position: { x: -6.5, y: -1.3, z: 2.6 }
      },
      {
        identifier: '12',
        position: { x: -5.5, y: -1.3, z: 4.3 }
      },
      {
        identifier: '13',
        position: { x: -2, y: -1.3, z: 6.9 }
      },
      {
        identifier: '14',
        position: { x: 0.1, y: -1.3, z: 7.1 }
      },
      {
        identifier: '15',
        position: { x: 2.2, y: -1.3, z: 6.9 }
      },
      {
        identifier: '16',
        position: { x: 5.7, y: -1.3, z: 4.2 }
      },
      {
        identifier: '17',
        position: { x: 6.6, y: -1.3, z: 2.4 }
      },
      {
        identifier: '18',
        position: { x: 7.1, y: -1.3, z: 0.6 }
      },
      {
        identifier: '19',
        position: { x: -8.5, y: -0.2, z: 0.6 }
      },
      {
        identifier: '20',
        position: { x: -8.2, y: -0.2, z: 2.3 }
      },
      {
        identifier: '21',
        position: { x: -7.5, y: -0.2, z: 4 }
      },
      {
        identifier: '22',
        position: { x: -6.5, y: -0.2, z: 5.4 }
      },
      {
        identifier: '23',
        position: { x: -2.5, y: -0.2, z: 8 }
      },
      {
        identifier: '24',
        position: { x: -0.8, y: -0.2, z: 8.4 }
      },
      {
        identifier: '25',
        position: { x: 1, y: -0.2, z: 8.4 }
      },
      {
        identifier: '26',
        position: { x: 2.7, y: -0.2, z: 8 }
      },
      {
        identifier: '27',
        position: { x: 6.4, y: -0.2, z: 5.3 }
      },
      {
        identifier: '28',
        position: { x: 7.4, y: -0.2, z: 4 }
      },
      {
        identifier: '29',
        position: { x: 8, y: -0.2, z: 2.3 }
      },
      {
        identifier: '30',
        position: { x: 8.5, y: -0.2, z: 0.7 }
      },
      {
        identifier: '31',
        position: { x: -9.6, y: 0.5, z: 1.8 }
      },
      {
        identifier: '32',
        position: { x: -8.9, y: 0.5, z: 3.6 }
      },
      {
        identifier: '33',
        position: { x: -7.5, y: 0.5, z: 5.5 }
      },
      {
        identifier: '34',
        position: { x: -2, y: 0.5, z: 9.2 }
      },
      {
        identifier: '35',
        position: { x: 0, y: 0.5, z: 9.6 }
      },
      {
        identifier: '36',
        position: { x: 2.4, y: 0.5, z: 9.4 }
      },
      {
        identifier: '37',
        position: { x: 8, y: 0.5, z: 5.5 }
      },
      {
        identifier: '38',
        position: { x: 8.9, y: 0.5, z: 3.7 }
      },
      {
        identifier: '39',
        position: { x: 9.6, y: 0.5, z: 1.4 }
      },
      {
        identifier: '40',
        position: { x: -11, y: 1.3, z: 0.7 }
      },
      {
        identifier: '41',
        position: { x: -10.7, y: 1.3, z: 2.6 }
      },
      {
        identifier: '42',
        position: { x: -10.4, y: 1.3, z: 4 }
      },
      {
        identifier: '43',
        position: { x: -9.3, y: 1.3, z: 5.8 }
      },
      {
        identifier: '44',
        position: { x: -8.1, y: 1.3, z: 7.2 }
      },
      {
        identifier: '45',
        position: { x: -3.6, y: 1.3, z: 10.5 }
      },
      {
        identifier: '46',
        position: { x: -1.9, y: 1.3, z: 10.9 }
      },
      {
        identifier: '47',
        position: { x: 0, y: 1.3, z: 11 }
      },
      {
        identifier: '48',
        position: { x: 1.9, y: 1.3, z: 10.9 }
      },
      {
        identifier: '49',
        position: { x: 3.8, y: 1.3, z: 10.5 }
      },
      {
        identifier: '50',
        position: { x: 8.5, y: 1.3, z: 7.3 }
      },
      {
        identifier: '51',
        position: { x: -0.50, y: -1, z: 1.5 },
        visible:  true
      }
    ]

    console.log("used ? ",theaterSlots)
    theaterSlots[0].used = true
    console.log("used ? ",theaterSlots)

    let slotFound = theaterSlots.find(x => x.identifier === spawn);
    slotFound.position.y += 3
    let slotPosition = slotFound.position
    el.setAttribute('position', slotPosition)

    let patient = document.getElementById("Patient").getObject3d("mesh")
   
    
    
   },

 
})