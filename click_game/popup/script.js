let elm = document.createElement("button")
elm.style = `
    position: absolute;
    top: ${Math.floor(Math.random()*300)}px;
    left: ${Math.floor(Math.random()*300)}px;
    width: 30px;
    height: 30px;
`
elm.addEventListener('click', () => {
    elm.style.top = `${Math.floor(Math.random()*300)}px`
    elm.style.left = `${Math.floor(Math.random()*300)}px`
})

document.body.append(elm);