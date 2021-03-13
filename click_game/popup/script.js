let buttons = {
    amount: 3
}
let score = document.getElementById("score-constant")

let reset = () => {
    let btns = document.querySelectorAll('.button')
    for (let i = 0; i < btns.length; i++) {
        btns[i].remove();
    }
    score.innerHTML = '0'
    startSandbox()
}

let startSandbox = () => {
    for (let i = 0; i < buttons.amount; i++) {
        let elm = document.createElement("button")

        elm.classList.add('button')
        elm.style.top = `${Math.floor(Math.random()*270)}px`
        elm.style.left = `${Math.floor(Math.random()*270)}px`

        elm.addEventListener('click', () => {
            score.innerHTML = parseInt(score.innerHTML) + 1
            elm.style.top = `${Math.floor(Math.random()*270)}px`
            elm.style.left = `${Math.floor(Math.random()*270)}px`
        })

        document.body.append(elm);
    }
}
startSandbox()