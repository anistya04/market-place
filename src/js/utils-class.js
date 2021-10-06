function addClass(e, classes) {
  e.classList.add(...classes.split(' '));
}
function removeClass(e, classes) {
  e.classList.remove(...classes.split(' '));
}

function toggleClass(e, classes) {
  e.classList.toggle(...classes.split(' '));
}
module.exports = { addClass, removeClass, toggleClass };
