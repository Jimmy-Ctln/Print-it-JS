const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"dot": true,
		"dot_selected" : true
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"dot": true,
		"dot_selected" : false
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"dot": true,
		"dot_selected" : false
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"dot": true,
		"dot_selected" : false
	}
]

const arrowLeft 	= document.querySelector(".arrow_left");
const arrowRight 	= document.querySelector(".arrow_right");

// Permet d'acceder au tableau

// Permet de récuperer la classe 
const bannerImage 			= document.querySelector('.banner-img');
var numberIndex 			= 0;
bannerImage.src 			= "./assets/images/slideshow/" + slides[numberIndex].image;

const bannerParagraph 		= document.querySelector('#banner p')
bannerParagraph.innerHTML 	= slides[numberIndex].tagLine;
	

for (let i = 0; i < 4; i++) {
	
	const dotElement				= document.createElement("div");
	dotElement.classList.add("dot");
	
	const dots						= document.querySelector(".dots");
	dots.appendChild(dotElement)
}




function arrowleft() {
	
	arrowLeft.addEventListener('click', () => {

		console.log('click arrow left');
		numberIndex--;
		bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;
		bannerParagraph.innerHTML 	= slides[numberIndex].tagLine;
	})
}
arrowleft();


function arrowright() {
		
		arrowRight.addEventListener('click', () => {
			
			console.log('click arrow right');
			numberIndex++;
			bannerImage.src = "./assets/images/slideshow/" + slides[numberIndex].image;
			bannerParagraph.innerHTML 	= slides[numberIndex].tagLine;
				
		})

}
arrowright();

