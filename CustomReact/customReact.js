const mainContianer = document.querySelector('#root')

const reactElement = {
 type: 'a',
 props:{
    href: 'https://google.com',
    target: '_blank'
 },
 children: "go to google"
}


    function customRender(reactElement, mainContianer)
{
 const domElement = document.createElement(reactElement.type)
 for (prop in reactElement.props)
 {
    if ( prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop]) 
 }
 domElement.innerHTML=reactElement.children   
 mainContianer.appendChild(domElement)
}

customRender(reactElement, mainContianer)