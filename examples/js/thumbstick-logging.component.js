AFRAME.registerComponent('thumbstick-logging', {
    init: function () {

        let scene = document.querySelector("a-scene")
        this.el.addEventListener('abuttondown', function (evt) {
            let handR = document.getElementById("BOXR02")
            let handL = document.getElementById("BOXL02")
            handR.setAttribute("visible", "false")
            handL.setAttribute("visible", "false")
            handR.setAttribute("static-body", "")
            handL.setAttribute("static-body", "")

            let objHandR = document.getElementById("modelHandR")
            let objHandL = document.getElementById("modelHandL")

            objHandR.setAttribute("animation-mixer", "clip:Point + Thumb;loop:once;repetitions:0;clampWhenFinished:true")
            objHandL.setAttribute("animation-mixer", "clip:Point + Thumb;loop:once;repetitions:0;clampWhenFinished:true")
        });

        this.el.addEventListener('abuttonup', function (evt) {

            let handR = document.getElementById("BOXR02")
            let handL = document.getElementById("BOXL02")
            let objHandR = document.getElementById("modelHandR")
            let objHandL = document.getElementById("modelHandL")
            handR.setAttribute("visible", "false")
            handL.setAttribute("visible", "false")
            handR.removeAttribute("static-body")
            handL.removeAttribute("static-body")
            objHandR.setAttribute("animation-mixer", "clip:Open;loop:once;repetitions:0;clampWhenFinished:true");
            objHandL.setAttribute("animation-mixer", "clip:Open;loop:once;repetitions:0;clampWhenFinished:true");
        })

    },
    logThumbstick: function (evt) {
        console.log(evt.detail);
    }
});