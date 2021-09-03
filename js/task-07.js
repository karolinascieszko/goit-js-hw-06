const qs = selector => document.querySelector(selector);
let slider = qs('#font-size-control');

slider.addEventListener('input', event => {
  let size = slider.value;
  let text = qs('#text');
  text.style.fontSize = size + 'px';
});
