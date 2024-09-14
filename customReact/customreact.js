function customRender(reactElement , container) {
    let domElelemnt = document.createElement(reactElement.type)
    domElelemnt.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElelemnt.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElelemnt)
}

let newElelment = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit google"

}

const mainContainer = document.querySelector('#root')

customRender(newElelment , mainContainer )