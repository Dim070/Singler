let offset = 0
const sliderLine = document.querySelector('.slider_line')
const arRight = document.querySelector('.arrow_right')
const arLeft = document.querySelector('.arrow_left')
const lastSlider = document.querySelector('.last-card')
const cards = document.querySelectorAll('.card')

arRight.addEventListener('click', () => {
   offset = offset + 19.79
   if (offset > 57.81) {
      offset = 0
   }
   sliderLine.style.left = -offset + 'vw'
})

arLeft.addEventListener('click', () => {
   offset = offset - 19.79
   if (offset < 0) {
      offset = 39.58
   }
   sliderLine.style.left = -offset + 'vw'
})



arRight.addEventListener('click', () => {
   console.log('1');
   //cards.forEach(el => el.classList.toggle('last-card'));
   for (let i = 2; i < cards.length; i++) {

      console.log(i)
   }
})
