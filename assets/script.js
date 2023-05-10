const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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

// dotNumber0.classList.add('dot_selected')

// change the index
let numberIndex = 0;

// Get the class back
bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;

const bannerParagraph = document.querySelector("#banner p");
bannerParagraph.innerHTML = slides[numberIndex].tagLine;

// Creating dots
for (let i = 0; i < 4; i++) {
  const dotElement = document.createElement("div");
  var uniqueId = "dotNumber" + i;
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

function addDotSelectedRight() {
  let dotNumber = document.querySelector("#dotNumber" + numberIndex);
  dotNumber.classList.add("dot_selected");
//   console.log("add est au numero" + dotNumber.id);
}

function addDotSelectedLeft() {
  let dotNumber = document.querySelector("#dotNumber" + numberIndex);
  dotNumber.classList.add("dot_selected");
//   console.log("add est au numero" + dotNumber.id);
}

function removeDotSelectedRight() {
  let numberIndexRemove = numberIndex - 1;
  let dotNumber = document.querySelector("#dotNumber" + numberIndexRemove);
  dotNumber.classList.remove("dot_selected");
//   console.log("numberIndexRemove est au numero" + numberIndexRemove);
}

function removeDotSelectedLeft() {
  let numberIndexRemove = numberIndex + 1;
  let dotNumber = document.querySelector("#dotNumber" + numberIndexRemove);
  dotNumber.classList.remove("dot_selected");
//   console.log("numberIndexRemove est au numero" + numberIndexRemove);
}

// change the image and the paragraph
function changeElement() {
  bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;
  bannerParagraph.innerHTML = slides[numberIndex].tagLine;
}

function slideLeft() {
  //   console.log("click arrow left");
  numberIndex--;
  changeElement();
  removeDotSelectedLeft();
  addDotSelectedLeft();
}

function slideRight() {
  //   console.log("click arrow right");

  if (numberIndex < 3) {
    numberIndex++;
    changeElement();
    removeDotSelectedRight();
    addDotSelectedRight();
  } else {
	numberIndex = 0;
	var numberIndexRemove = 3
    changeElement(0);
    addDotSelectedRight(0);
	
    dotNumber = document.querySelector("dotNumber" + numberIndexRemove);
	dotNumber.classList.remove("dot_selected");
    // console.log("numberIndex revient à zéro !" + numberIndex);

}

  
}
