const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Get the class back
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerParagraph = document.querySelector("#banner p");

// change the index
let numberIndex = 0;

// Get the class back
bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;

bannerParagraph.innerHTML = slides[numberIndex].tagLine;

// Creating dots
for (let i = 0; i < slides.length; i++) {
  const dotElement = document.createElement("div");
  let uniqueId = "dotNumber" + i;
  dotElement.id = uniqueId;
  dotElement.classList.add("dot");

  //Attach parent dots
  const dots = document.querySelector(".dots");
  dots.appendChild(dotElement);
}

// set eventlistener
arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);

// Adding the class for "dot_selected" the first dot
let dotNumber = document.querySelector("#dotNumber" + numberIndex);
dotNumber.classList.add("dot_selected");

function addDotSelected() {
  let dotNumber = document.querySelector("#dotNumber" + numberIndex);
  dotNumber.classList.add("dot_selected");
}

function removeDotSelectedRight() {
  let numberIndexRemove = numberIndex - 1;
  let dotNumber = document.querySelector("#dotNumber" + numberIndexRemove);
  dotNumber.classList.remove("dot_selected");
}

function removeDotSelectedLeft() {
  let numberIndexRemove = numberIndex + 1;
  let dotNumber = document.querySelector("#dotNumber" + numberIndexRemove);
  dotNumber.classList.remove("dot_selected");
}

// change the image and the paragraph
function changeElement() {
  bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;
  bannerParagraph.innerHTML = slides[numberIndex].tagLine;
}

function slideLeft() {
  if (numberIndex > 0) {
    numberIndex--;
    numberIndexRemove = numberIndex + 1;
    changeElement();
    removeDotSelectedLeft();
    addDotSelected()
  } else {
    numberIndex = slides.length -1;
    numberIndexRemove = 0;
    changeElement();
    addDotSelected()
    let dotNumber = document.querySelector("#dotNumber" + numberIndexRemove);
    dotNumber.classList.remove("dot_selected");
  }
}

function slideRight() {
  if (numberIndex < slides.length -1) {
    numberIndex++;
    changeElement();
    removeDotSelectedRight();
    addDotSelected()
  } else {
    numberIndex = 0;
    numberIndexRemove = slides.length -1;
    changeElement();
    addDotSelected()
    let dotNumber = document.querySelector("#dotNumber" + numberIndexRemove);
    dotNumber.classList.remove("dot_selected");
  }
}