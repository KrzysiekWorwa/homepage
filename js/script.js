console.log("Witam wszystkich, którzy tutaj zaglądają! :D");

let changeColorButton = document.querySelector(".changeBackground");
let body = document.querySelector(".body");

let buttonContainer = document.querySelector(".buttonContainer");
let toggleImageButton = document.querySelector(".toggleImage");
let imagePlaceholder = document.querySelector(".imagePlaceholder");
let image = document.querySelector(".image");

changeColorButton.addEventListener("click", () => {
    body.classList.toggle("darkBackground");
    if (changeColorButton.innerText === "Włącz ciemny motyw") {
        changeColorButton.innerText = "Wyłącz ciemny motyw";
        console.log("Włączono ciemny motyw.");
    }
    else {
        changeColorButton.innerText = "Włącz ciemny motyw";
        console.log("Wyłączono ciemny motyw.");
    }
});

toggleImageButton.addEventListener("click", () => {
    if (image) {
        image.remove();
        image = null;
        toggleImageButton.innerText = "Dodaj zdjęcie";
        console.log("Zdjęcie zostało usunięte.");
    }
    else {
        image = document.createElement("img");
        image.src = "images/zdjecie.jpg";
        image.alt = "Zdjęcie profilowe";
        image.classList.add("image");
        imagePlaceholder.appendChild(image);
        toggleImageButton.innerText = "Usuń zdjęcie";
        console.log("Zdjęcie zostało dodane");
    }
});