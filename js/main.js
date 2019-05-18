//VARS
const buttonMore = document.querySelector('button.read-more');
const moreText = document.querySelector('.more-text');

//LISTENERS
buttonMore.addEventListener('click', expandText);

//FUNCTIONS
function expandText() {
  moreText.classList.add('is-open');
  buttonMore.style.visibility = 'hidden';
}
