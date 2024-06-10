let domElement = document.querySelector('#root');
console.log(domElement);


// function customRender(reactElement , domElement){
//     let createdEleme = document.createElement(reactElement.type);
//     createdEleme.setAttribute('href' , reactElement.props.href)
//     createdEleme.setAttribute('target' , reactElement.props.target)
//     createdEleme.innerHTML = reactElement.props.children;
//     console.log(reactElement);
//     domElement.appendChild(createdEleme);
// }



// second way 
function customRender(reactElement , domElement){
    let createElement = document.createElement(reactElement.type)
    createElement.innerHTML = reactElement.props.children;
    for (const key in reactElement.props) {
        // console.log(key);
        if(key === 'children') continue;
        let setAttribute = createElement.setAttribute(key, reactElement.props[key])
    }
    domElement.appendChild(createElement);
}

let reactElement = {
    type : 'a',
    props : {
        href : 'https://www.facebook.com',
        children : 'Facebook',
        target : '_blank'
    }
}

customRender(reactElement , domElement)


