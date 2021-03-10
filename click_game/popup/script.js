let buttons = {
    amount: 3
}

for (let i = 0; i < buttons.amount; i++) {
    let elm = document.createElement("button")
    let score = document.getElementById("score-constant")

    elm.classList.add('button')
    elm.style.top = `${Math.floor(Math.random()*270) + 15}px`
    elm.style.left = `${Math.floor(Math.random()*270) + 15}px`

    elm.addEventListener('click', () => {
        score.innerHTML = parseInt(score.innerHTML) + 1
        elm.style.top = `${Math.floor(Math.random()*270) + 15}px`
        elm.style.left = `${Math.floor(Math.random()*270) + 15}px`
    })

    document.body.append(elm);
}
