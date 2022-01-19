let ojectsResult
let spawnedObj
let scene = document.querySelector('a-scene');

fetch(url).then(
    function (u) {
        return u.json();
    }
).then(
    function (json) {
        spawnedObj = json
        ojectsResult = JSON.parse(JSON.stringify(json));
        spawnEntities(ojectsResult)
    }
)

function spawnEntities(structure) {
    structure.forEach(item => {
        let entityEl = document.createElement(item.element);
        entityEl.setAttribute("position", item.position)
        entityEl.setAttribute("width", item.width)
        entityEl.setAttribute("height", item.height)
        entityEl.setAttribute("material", item.material)
        entityEl.setAttribute("opacity", item.opacity)
        entityEl.setAttribute("id", item.id)
        entityEl.setAttribute("value", item.value)
        scene.appendChild(entityEl);

        let panelID = entityEl.getAttribute("id")

        entityEl.addEventListener("mouseenter", function () {
            entityEl.setAttribute("opacity", item.opacity - 0.5)
            if (panelID == 'panel1') {
                entityEl.setAttribute("opacity", "0.6")
            }
            if (
                panelID == 'text1' || panelID == 'text2' || panelID == 'text3' || panelID == 'text4' ||
                panelID == 'text5' || panelID == 'text6' || panelID == 'text7' || panelID == 'text8' ||
                panelID == 'text9') {
                entityEl.setAttribute("opacity", "1.0")
            }
        });

        entityEl.addEventListener("click", function () {
            if (panelID == 'panel2') {
                window.location = "/super/process/vxr-teacher-template.html"
            }
            if (panelID == 'panel3') {
                window.location = "/LaboratoryRoom.html"
            }
        });

        entityEl.addEventListener("mouseleave", function () {
            entityEl.setAttribute("opacity", item.opacity)
        });
    });
}