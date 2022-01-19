AFRAME.registerComponent('task-list', {
    init: function() {
      let scene = document.querySelector('a-scene');
      let jsonFile;
      let x = 0;


      fetch("../../../js/tasklist.json").then(
        function (u) { return u.json(); }
      ).then(
        function (json) {
          jsonFile = JSON.parse(JSON.stringify(json));
          console.log("task 1", jsonFile[0].tasks[0]) 
          console.log("task 2", jsonFile[0].tasks[1]) 
          console.log("task 3", jsonFile[0].tasks[2]) 
          console.log("task 4", jsonFile[0].tasks[3]) 
          console.log("task 5", jsonFile[0].tasks[4]) 
          console.log("task 6", jsonFile[0].tasks[5]) 
          if (x < jsonFile.length) createTasks()
        }
      )

      function createTasks() {
        let hand = document.getElementById('rhand')
        let handPos = hand.getAttribute('position')
        console.log('Hand Pos is',handPos)

        let panelTask = document.createElement('a-plane');
        panelTask.setAttribute('material', "color: black; opacity: 0.9");
        posPanelTask = {x: handPos.x, y: handPos.y, z: handPos.z}
        console.log('posPanelTask', posPanelTask)
        panelTask.setAttribute('position', posPanelTask)
        panelTask.setAttribute('rotation', "0 180 0")
        panelTask.setAttribute('height', "1.1")
        panelTask.setAttribute('id', "panelTask")
        scene.appendChild(panelTask);
        jsonFile[x].tasks.forEach(item => {
          let task = document.createElement('a-plane');
          task.setAttribute('id', item.id)
          task.setAttribute('class', "tasks")
          task.setAttribute('material', item.material)
          task.setAttribute('height', item.height)
          task.setAttribute('width', item.width)
          task.setAttribute('position', item.position)
          task.setAttribute('text', item.text)

          task.addEventListener('click', function () {
            let task1 = document.getElementById('task1');
            let task2 = document.getElementById('task2');
            let task3 = document.getElementById('task3');
            let task4 = document.getElementById('task4');
            let task5 = document.getElementById('task5');
            let task6 = document.getElementById('task6');

            let postask2 = task2.getAttribute('position');
            let postask3 = task3.getAttribute('position');
            let postask4 = task4.getAttribute('position');
            let postask5 = task5.getAttribute('position');
            let postask6 = task6.getAttribute('position');
            
            let taskID = task.getAttribute('id');
            console.log('Task ID', taskID)
            if(taskID == 'task1') {
              console.log('Clicked task 1')
              task1.replaceWith(task1);

              let task2Pos = {x: postask2.x, y: postask2.y + 0.2, z: postask2.z};
              task2.setAttribute('position', task2Pos);

              let task3Pos = {x: postask3.x, y: postask3.y + 0.2, z: postask3.z};
              task3.setAttribute('position', task3Pos);

              let task4Pos = {x: postask4.x, y: postask4.y + 0.2, z: postask4.z};
              task4.setAttribute('position', task4Pos);

              let task5Pos = {x: postask5.x, y: postask5.y + 0.2, z: postask5.z};
              task5.setAttribute('position', task5Pos);

              let task6Pos = {x: postask6.x, y: postask6.y + 0.2, z: postask6.z};
              task6.setAttribute('position', task6Pos);
            }

            if(taskID == 'task2') {
              console.log('Clicked task 2')
              task2.replaceWith(task2);

              let task3Pos = {x: postask3.x, y: postask3.y + 0.2, z: postask3.z};
              task3.setAttribute('position', task3Pos);

              let task4Pos = {x: postask4.x, y: postask4.y + 0.2, z: postask4.z};
              task4.setAttribute('position', task4Pos);

              let task5Pos = {x: postask5.x, y: postask5.y + 0.2, z: postask5.z};
              task5.setAttribute('position', task5Pos);

              let task6Pos = {x: postask6.x, y: postask6.y + 0.2, z: postask6.z};
              task6.setAttribute('position', task6Pos);
            }

            if(taskID == 'task3') {
              console.log('Clicked task 3')
              task3.replaceWith(task3);

              let task4Pos = {x: postask4.x, y: postask4.y + 0.2, z: postask4.z};
              task4.setAttribute('position', task4Pos);

              let task5Pos = {x: postask5.x, y: postask5.y + 0.2, z: postask5.z};
              task5.setAttribute('position', task5Pos);

              let task6Pos = {x: postask6.x, y: postask6.y + 0.2, z: postask6.z};
              task6.setAttribute('position', task6Pos);
            }

            if(taskID == 'task4') {
              console.log('Clicked task 4')
              task4.replaceWith(task4);

              let task5Pos = {x: postask5.x, y: postask5.y + 0.2, z: postask5.z};
              task5.setAttribute('position', task5Pos);

              let task6Pos = {x: postask6.x, y: postask6.y + 0.2, z: postask6.z};
              task6.setAttribute('position', task6Pos);
            }

            if(taskID == 'task5') {
              console.log('Clicked task 5')
              task5.replaceWith(task5);
              
              let task6Pos = {x: postask6.x, y: postask6.y + 0.2, z: postask6.z};
              task6.setAttribute('position', task6Pos);
            }

            if(taskID == 'task6') {
              console.log('Clicked task 6')
              task6.replaceWith(task6);
            }
          });

          task.addEventListener('mouseenter', function () {
            task.setAttribute('material', "color: red");
            task.setAttribute('text', `value: Eliminar ${item.text.replace('value:', '')}; align: center;`);
          });
          task.addEventListener('mouseleave', function () {
            task.setAttribute('material', "color: grey");
            task.setAttribute('text', item.text);
          });

          document.addEventListener("keyup", function(e) {
            if (e.key == 'Backspace') {
              console.log('pressed backspace')
              let panelTasks = document.getElementById('panelTask');
              let task1 = document.getElementById('task1');
              let task2 = document.getElementById('task2');
              let task3 = document.getElementById('task3');
              let task4 = document.getElementById('task4');
              let task5 = document.getElementById('task5');
              let task6 = document.getElementById('task6');
              setTimeout(function() {
                panelTasks.setAttribute('material', "opacity: 0.5")
                task1.setAttribute('material', "opacity: 0.5")
                task1.setAttribute('text', "opacity: 0.5")
                task2.setAttribute('material', "opacity: 0.5")
                task2.setAttribute('text', "opacity: 0.5")
                task3.setAttribute('material', "opacity: 0.5")
                task3.setAttribute('text', "opacity: 0.5")
                task4.setAttribute('material', "opacity: 0.5")
                task4.setAttribute('text', "opacity: 0.5")
                task5.setAttribute('material', "opacity: 0.5")
                task5.setAttribute('text', "opacity: 0.5")
                task6.setAttribute('material', "opacity: 0.5")
                task6.setAttribute('text', "opacity: 0.5")
              }, 1000);
              setTimeout(function() {
                panelTasks.setAttribute('material', "opacity: 0.3")
                task1.setAttribute('material', "opacity: 0.3")
                task2.setAttribute('material', "opacity: 0.3")
                task3.setAttribute('material', "opacity: 0.3")
                task4.setAttribute('material', "opacity: 0.3")
                task5.setAttribute('material', "opacity: 0.3")
                task6.setAttribute('material', "opacity: 0.3")
              }, 1100);
              setTimeout(function() {
                panelTasks.setAttribute('material', "opacity: 0")
                task1.setAttribute('material', "opacity: 0")
                task1.setAttribute('text', "opacity: 0")
                task2.setAttribute('material', "opacity: 0")
                task2.setAttribute('text', "opacity: 0")
                task3.setAttribute('material', "opacity: 0")
                task3.setAttribute('text', "opacity: 0")
                task4.setAttribute('material', "opacity: 0")
                task4.setAttribute('text', "opacity: 0")
                task5.setAttribute('material', "opacity: 0")
                task5.setAttribute('text', "opacity: 0")
                task6.setAttribute('material', "opacity: 0")
                task6.setAttribute('text', "opacity: 0")
              }, 1200);
            }
          });

          document.addEventListener("keypress", function(e) {
            if (e.key == 'Enter') { 
              console.log('pressed enter')
              let panelTasks = document.getElementById('panelTask');
              let task1 = document.getElementById('task1');
              let task2 = document.getElementById('task2');
              let task3 = document.getElementById('task3');
              let task4 = document.getElementById('task4');
              let task5 = document.getElementById('task5');
              let task6 = document.getElementById('task6');
              setTimeout(function() {
                panelTasks.setAttribute('material', "opacity: 0.3")
                task1.setAttribute('material', "opacity: 0.3")
                task2.setAttribute('material', "opacity: 0.3")
                task3.setAttribute('material', "opacity: 0.3")
                task4.setAttribute('material', "opacity: 0.3")
                task5.setAttribute('material', "opacity: 0.3")
                task6.setAttribute('material', "opacity: 0.3")
              }, 1000);
              setTimeout(function() {
                panelTasks.setAttribute('material', "opacity: 0.5")
                task1.setAttribute('material', "opacity: 0.5")
                task2.setAttribute('material', "opacity: 0.5")
                task3.setAttribute('material', "opacity: 0.5")
                task4.setAttribute('material', "opacity: 0.5")
                task5.setAttribute('material', "opacity: 0.5")
                task6.setAttribute('material', "opacity: 0.5")
              }, 1100);
              setTimeout(function() {
                panelTasks.setAttribute('material', "opacity: 1.0")
                task1.setAttribute('material', "opacity: 1.0")
                task1.setAttribute('text', "opacity: 1.0")
                task2.setAttribute('material', "opacity: 1.0")
                task2.setAttribute('text', "opacity: 1.0")
                task3.setAttribute('material', "opacity: 1.0")
                task3.setAttribute('text', "opacity: 1.0")
                task4.setAttribute('material', "opacity: 1.0")
                task4.setAttribute('text', "opacity: 1.0")
                task5.setAttribute('material', "opacity: 1.0")
                task5.setAttribute('text', "opacity: 1.0")
                task6.setAttribute('material', "opacity: 1.0")
                task6.setAttribute('text', "opacity: 1.0")
              }, 1200);
            }
          })

          panelTask.appendChild(task);
        });
      }
    },
    update: function() {
      
    }
  });