// setTimeout(() => {
//         let button = document.createElement('button')
//         button.style = `
//             position: absolute;
//             top: ${Math.floor(Math.random()*500)}px;
//             left: ${Math.floor(Math.random()*500)}px;
//             width: 30px;
//             height: 30px;
//         `
//         button.addEventListener('click', () => {
//             button.style.top = `${Math.floor(Math.random()*300)}px`
//             button.style.left = `${Math.floor(Math.random()*300)}px`
//         })
//         document.body.appendChild(button)
// }, 1000)

// const newButton = e => e.currentTarget.replaceWith(createButton());

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



// let setAttributes = e => {
//     e.style.position = 'absolute';
//     e.style.top = Math.floor(Math.random()*500) + 'px';
//     e.style.left = Math.floor(Math.random()*500) + 'px';
//     e.style.width = '10px';
//     e.style.height = '10px';
//     e.addEventListener('click', () => {newButton()})
// }
// let newButton = () => {
//     document.body.removeChild(document.body.querySelector('button'))
//     let e = document.createElement('button');
//     document.body.appendChild(e);
//     setAttributes(e)
// }
// setTimeout(() => {
//     let e = document.createElement('button');
//     setAttributes(e)
//     document.body.appendChild(e)
// }, 1000);
