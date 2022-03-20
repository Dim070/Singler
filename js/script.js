let offset = 0
const sliderLine = document.querySelector('.slider_line')

document.querySelector('.arrow_right').addEventListener('click', () => {
   console.log('sss');
   offset = offset + 19.79
   if (offset > 57.81) {
      offset = 0
   }
   sliderLine.style.left = -offset + 'vw'
})

document.querySelector('.arrow_left').addEventListener('click', () => {
   offset = offset - 19.79
   if (offset < 0) {
      offset = 39.58
   }
   sliderLine.style.left = -offset + 'vw'
})