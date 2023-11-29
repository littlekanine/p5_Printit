
let currentIndex = 0
let bulletIndex = 0
let tagLine = document.getElementById("tagLine")
let bulletContainer = document.getElementById("bulletContainer")

// déclare une variable appelée bullets et l'initialise avec un tableau vide ([]).
let bullets = [] 

slides.forEach((slide, index) => {
    const bullet = document.createElement("div")
    bullet.classList.add("dot")
    bulletContainer.appendChild(bullet)
    bullets.push(bullet)
})

bullets[currentIndex].classList.add('dot_selected')

function slideRight () {
    currentIndex ++
    if (currentIndex >= slides.length) {
        currentIndex =0
    }
    bannerImg.src = slides[currentIndex].image 

    tagLine.innerHTML = slides[currentIndex].tagLine

    updateBullet ()
}

function slideLeft () {
    currentIndex --
    if (currentIndex < 0 ) {
        currentIndex = slides.length - 1
    }
    bannerImg.src = slides[currentIndex].image

    tagLine.innerHTML = slides[currentIndex].tagLine

    updateBullet ()
}

function updateBullet () {
    bullets.forEach((bullet, index) => {
      bullet.classList.remove('dot_selected');
      if (index === currentIndex) {
        bullet.classList.add('dot_selected');
      }
    })

}

let arrowLeft = document.getElementById("slideLeft") 
    arrowLeft.addEventListener("click" ,  slideLeft )

let arrowRight = document.getElementById("slideRight")
    arrowRight.addEventListener("click" ,  slideRight )