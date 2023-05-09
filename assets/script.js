const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft 	= document.querySelector(".arrow_left");
const arrowRight 	= document.querySelector(".arrow_right");

// Permet d'acceder au tableau
// const slideImage	= slides[0];

// Permet de récuperer la classe 
const bannerImage 		= document.querySelector('.banner-img');
const bannerParagraph 	= document.querySelector('p')

var numberIndex = 0;
bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;

const slideTagline =  slides[numberIndex].tagLine
console.log(slideTagline)


function arrowleft() {
	arrowLeft.addEventListener('click', () => {

		console.log('click arrow left');
		numberIndex--;
		bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;
	})
}
arrowleft();


function arrowright() {
		
		arrowRight.addEventListener('click', () => {
			
			console.log('click arrow right');
			numberIndex++;
			bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;
				
		})

}
arrowright();

