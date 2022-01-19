let ojectsResult2
let spawnedObj2
let scene2 = document.querySelector('a-scene');

fetch(url2).then(
    function (u) {
        return u.json();
    }
).then(
    function (json) {
        spawnedObj2 = json
        ojectsResult2 = JSON.parse(JSON.stringify(json));
        spawnEntities2(ojectsResult2)
    }
)

function spawnEntities2(structure2) {
    structure2.forEach(item => {
        let entity = document.createElement(item.element);
        entity.setAttribute("position", item.position)
        entity.setAttribute("width", item.width)
        entity.setAttribute("height", item.height)
        entity.setAttribute("material", item.material)
        entity.setAttribute("opacity", item.opacity)
        entity.setAttribute("id", item.id)
        entity.setAttribute("value", item.value)
        entity.setAttribute("rotation", item.rotation)
        entity.setAttribute("look-at", "#camera")
        scene2.appendChild(entity);
        let position = entity.getAttribute("position")
        console.log('Position Card:', position);
    });
}

function setOpacityAlcohol() {
    let card = element = document.getElementById("card")
    let text = element = document.getElementById("textAlcohol")
    let image = element = document.getElementById("imageAlcohol")
    card.setAttribute('opacity', '1.0')
    text.setAttribute('opacity', '1.0')
    image.setAttribute('opacity', '1.0')
    setTimeout(function() {
        card.setAttribute('opacity', '0.7')
        text.setAttribute('opacity', '0.7')
        image.setAttribute('opacity', '0.7')
    }, 5300)
    setTimeout(function() {
        card.setAttribute('opacity', '0.5')
        text.setAttribute('opacity', '0.5')
        image.setAttribute('opacity', '0.5')
    }, 5500)
    setTimeout(function() {
        card.setAttribute('opacity', '0.3')
        text.setAttribute('opacity', '0.3')
        image.setAttribute('opacity', '0.3')
    }, 5700)
    setTimeout(function() {
        card.setAttribute('opacity', '0.0')
        text.setAttribute('opacity', '0.0')
        image.setAttribute('opacity', '0.0')
    }, 5900)
}