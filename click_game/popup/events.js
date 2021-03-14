import { functions } from './script.js';

let resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', () => {
    functions.reset()
    resetButton.classList.remove('spin')
    void resetButton.offsetWidth;
    resetButton.classList.add('spin')
})