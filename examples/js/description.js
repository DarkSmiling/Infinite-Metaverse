let objectsResult3
let spawnedObj3
let spawnedObj2
let objectsResult2
let scene3 = document.querySelector('a-scene');

fetch(url3).then(
    function (u) {
        return u.json();
    }
).then(
    function (json) {
        spawnedObj3 = json
        objectsResult3 = JSON.parse(JSON.stringify(json));
        spawnEntities3(objectsResult3)
    }
)

fetch(url2).then(
    function (u) {
        return u.json();
    }
).then(
    function (json) {
        spawnedObj2 = json
        objectsResult2 = JSON.parse(JSON.stringify(json));
        spawnEntities2(objectsResult2)
    }
)

//This is a function to spawn panel card and image of objects
function spawnEntities2(structure2) {
    let i = 0;
    structure2.forEach(item => {
        let entity = document.createElement(item.element);
        entity.setAttribute("position", item.position)
        entity.setAttribute("width", item.width)
        entity.setAttribute("height", item.height)
        entity.setAttribute("material", item.material)
        entity.setAttribute("opacity", item.opacity)
        entity.setAttribute("id", `card${i}`)
        entity.setAttribute("value", item.value)
        entity.setAttribute("rotation", item.rotation)
        entity.setAttribute("look-at", "#camera")
        scene3.appendChild(entity);
        let position = entity.getAttribute("position")
        console.log('Position Card:', position);
        i++
    });
}

// This is a function to spawn a text with description of objects in scene
function spawnEntities3(structure3) {
    structure3.forEach(item => {
        let entityText = document.createElement("a-text");
        entityText.setAttribute("position", item.position)
        entityText.setAttribute("width", "1.7")
        entityText.setAttribute("height", "1.7")
        entityText.setAttribute("id", item.id)
        entityText.setAttribute("opacity", "0.0")
        entityText.setAttribute("value", item.description)
        entityText.setAttribute("look-at", "#camera")
        scene3.appendChild(entityText);
        let position = entityText.getAttribute("position")
        console.log('Position Text:', position);
        console.log("Text ID is: ", item.id)
    });
}

function setOpacityCard(element) {
    let card0 = document.getElementById("card0")
    let card1 = document.getElementById("card1")
    let textID = document.getElementById(element.id + "-text")
    console.log("Text ID:", textID)
    card0.setAttribute('opacity', '1.0')
    card1.setAttribute('opacity', '1.0')

    if(element.id === "e-alcoholgel") {
        textID.setAttribute('opacity', "1.0")
    }

    if(element.id === "e-Bottle_Lubricant") {
        textID.setAttribute('opacity', "1.0")
    }


/*    setTimeout(function() {
        card0.setAttribute('opacity', '0.7')
        text.setAttribute('opacity', '0.7')
        card1.setAttribute('opacity', '0.7')
    }, 5300)
    setTimeout(function() {
        card0.setAttribute('opacity', '0.5')
        text.setAttribute('opacity', '0.5')
        card1.setAttribute('opacity', '0.5')
    }, 5500)
    setTimeout(function() {
        card0.setAttribute('opacity', '0.3')
        text.setAttribute('opacity', '0.3')
        card1.setAttribute('opacity', '0.3')
    }, 5700)
    setTimeout(function() {
        card0.setAttribute('opacity', '0.0')
        text.setAttribute('opacity', '0.0')
        card1.setAttribute('opacity', '0.0')
    }, 5900)*/
}
