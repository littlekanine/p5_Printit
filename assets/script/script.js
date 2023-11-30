// Const
let currentIndex = 0;
let bulletIndex = 0;
let bullets = [];

let tagLine = document.getElementById("tagLine");
let bulletContainer = document.getElementById("bulletContainer");
let arrowRight = document.getElementById("slideRight");
let arrowLeft = document.getElementById("slideLeft");

// Event listeners
arrowLeft.addEventListener("click" ,  slideLeft );
arrowRight.addEventListener("click" ,  slideRight );

// Initialization
initBulletPoints();
updateCarrouselFromCurrenIndex();

// Functions
function initBulletPoints() {
    slides.forEach((slide, index) => {
        const bullet = document.createElement("div");
        bullet.classList.add("dot");
        bulletContainer.appendChild(bullet);
        bullets.push(bullet);
    })
    
    bullets[currentIndex].classList.add('dot_selected');
} 

function updateCarrouselFromCurrenIndex() {
    bannerImg.src = slides[currentIndex].image;
    tagLine.innerHTML = slides[currentIndex].tagLine;
}

function slideRight() {
    currentIndex ++
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateCarrouselFromCurrenIndex();
    updateBullet();
}

function slideLeft() {
    currentIndex --
    if (currentIndex < 0 ) {
        currentIndex = slides.length - 1;
    }

    updateCarrouselFromCurrenIndex();
    updateBullet();
}

function updateBullet() {
    bullets.forEach((bullet, index) => {
      bullet.classList.remove('dot_selected');
      if (index === currentIndex) {
        bullet.classList.add('dot_selected');
      }
    })
}
