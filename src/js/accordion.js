import { addClass, removeClass, toggleClass } from "./utils-class";

const elementAccordion = document?.getElementsByClassName('accordion');
function accordion() {
    for (let i = 0; i < elementAccordion.length; i++) {
       // create button accrodion
        let e = elementAccordion[i];
        let buttonSVG = document.createElement("button");
        buttonSVG.innerHTML = `<svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9.75 7.5L18.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        // adding class to button accordion
        addClass(buttonSVG, "absolute right-0 block text-black transform -translate-y-4 md:hidden transtition duration-300 outline-none")
        // inject button accordion to h5 
        let elementH5 = e.getElementsByTagName('h5')[0]
        elementH5.append(buttonSVG)
        // event linstener button accordion on clock
        buttonSVG.addEventListener('click', function () {
            let ul = e.getElementsByTagName('ul')[0]
            toggleClass(ul, "hidden")
            toggleClass(elementH5.getElementsByTagName('button')[0], "rotate-180")
        })
    }
}
accordion()