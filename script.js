const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// call checkBoxes function
checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 1

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
