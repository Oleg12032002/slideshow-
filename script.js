const slides = document.querySelectorAll('.slide')
let ind = 0




setInterval(() =>{
    clearActiveClasses()
    ind = ind % slides.length
    slides[ind].classList.add('active')
    ind++
}, 2000)

function clearActiveClasses() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}
