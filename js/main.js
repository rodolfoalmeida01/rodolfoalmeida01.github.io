//VARS
const buttonMore = document.querySelector('button.read-more');
const moreText = document.querySelector('.more-text');

//LISTENERS
buttonMore.addEventListener('click', function(){
  toggleSlide(moreText);
  buttonMore.style.visibility = 'hidden';

});

/**
* getHeight - for elements with display:none
*/
function getHeight(el) {
  var el_style      = window.getComputedStyle(el),
      el_display    = el_style.display,
      el_position   = el_style.position,
      el_visibility = el_style.visibility,
      el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),
      wanted_height = 0;

  // if its not hidden we just return normal height
  if(el_display !== 'none' && el_max_height !== '0') {
    return el.offsetHeight;
  }

  // the element is hidden so:
  // making the el block so we can meassure its height but still be hidden
  el.style.position   = 'absolute';
  el.style.visibility = 'hidden';
  el.style.display    = 'block';

  wanted_height     = el.offsetHeight;

  // reverting to the original values
  el.style.display    = el_display;
  el.style.position   = el_position;
  el.style.visibility = el_visibility;

  return wanted_height;
}


/**
* toggleSlide mimics the jQuery version of slideDown and slideUp
* all in one function comparing the max-heigth to 0
 */
function toggleSlide(el) {
  var el_max_height = 0;

  if(el.dataset.maxHeight) {
    // we've already used this before, so everything is setup
    if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
      el.style.maxHeight = el.getAttribute('data-max-height');
    } else {
      el.style.maxHeight = '0';
    }
  } else {
    el_max_height                  = getHeight(el) + 'px';
    el.style['transition']         = 'max-height 0.4s ease-in-out';
    el.style.overflowY             = 'hidden';
    el.style.maxHeight             = '0';
    el.setAttribute('data-max-height', el_max_height);
    el.style.display               = 'flex';

    setTimeout(function() {
      el.style.maxHeight = el_max_height;
      setTimeout(function() {
        el.style.maxHeight = 'none';
      }, 400);
    }, 10);
  }
};
