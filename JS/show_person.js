const personas_container = document.querySelector(".personas_container");
const personas = document.querySelectorAll(".personas_container > div");

var objectoClassEscritorio = {
    personas__estudiantes: "personas__efecto_pc"
}

function showAnimationCardsPersons() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight / 1.5;
    if (windowWidth <= 768) {
        personas.forEach((element, index) => {
            /* console.log(element) */
            if (element.classList.contains("personas__estudiantes")) {

                if (index == 0) {
                    positionPersona1 = element.getBoundingClientRect().top;
                    /* console.log(positionPersona1) */
                    if (positionPersona1 < windowHeight) {
                        for (let i in objectoClassEscritorio) {
                            element.classList.add(objectoClassEscritorio[i]);
                            console.log("entraste al 1")
                        }
                    }
                }
                if (index == 1) {

                    positionPersona2 = element.getBoundingClientRect().top;
                    if (positionPersona2 < windowHeight) {
                        for (let i in objectoClassEscritorio) {
                            element.classList.add(objectoClassEscritorio[i]);
                            console.log("entraste al 2")
                        }
                    }
                }
                if (index == 2) {
                    positionPersona3 = element.getBoundingClientRect().top;
                    if (positionPersona3 < windowHeight) {
                        for (let i in objectoClassEscritorio) {
                            element.classList.add(objectoClassEscritorio[i]);
                            console.log("entraste al 3")
                        }
                    }
                }
            }
        });
    } else {
        let positionPersonContainer = personas_container.getBoundingClientRect().top;
        let windowWidth = window.innerHeight / 1.6;
        if (positionPersonContainer < windowWidth) {
            personas.forEach(element => {
                for (let i in objectoClassEscritorio) {
                    if (element.classList.contains(i)) {
                        element.classList.add(objectoClassEscritorio[i]);
                    }
                }
            });
        }
    }
    console.log(windowWidth)



}

window.addEventListener('scroll', function () {
    showAnimationCardsPersons();
})

