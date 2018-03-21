let numbers = []
let total = 0
let input = document.querySelector('input')


addEventListener('keydown', keydown)

function keydown(e) {
  if (e.keyCode === 13) {
    if (isNaN(input.value)) {
      alert('Please enter a number')
      input.value = ''
      return
    }
    if (!input.value) {
      
      for (let i = 0;i < numbers.length;i++) {
        total += numbers[i]
      }
      alert(total/numbers.length)
      removeEventListener('keydown', keydown)

    } else {
      numbers.push(parseInt(input.value));
      input.value = ''
    }
  }
}

function reset() {
  location.reload();
}
