export function addClass(e, classes) {
    e.classList.add(...classes.split(" "))
}
export function removeClass(e, classes) {
    e.classList.add(...classes.split(" "))
}

export function toggleClass(e, classes) {
    e.classList.toggle(...classes.split(" "))
}