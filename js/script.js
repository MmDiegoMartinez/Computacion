const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider");

const images = [
    "img/SistemaFCQ.png",
    "img/fcq/profesores.png",
    "img/fcq/calificando.png",
    "img/fcq/pcal.png",
    "img/fcq/alumnosges.png",
    "img/fcq/salumlist.png",
    "img/fcq/slabcrud.png",
    "img/fcq/admin.png",
    "img/fcq/aprofcrud.png",
    "img/fcq/aeditadmin.png",
    "img/fcq/anewciclo.png",
    "img/fcq/asecre.png",
    "img/fcq/alismat.png",
    "img/fcq/kardex.png"
    
];

// Crear dinámicamente secciones de slider sin mezclar
images.forEach(img => {
    const section = document.createElement("section");
    section.classList.add("slider-section");
    const image = document.createElement("img");
    image.src = img;
    section.appendChild(image);
    slider.appendChild(section);
});

const sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", () => moveToLeft());
btnRight.addEventListener("click", () => moveToRight());

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion += widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion -= widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}
