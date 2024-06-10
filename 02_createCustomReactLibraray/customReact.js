

let domRoot = document.querySelector('#root');

// function customRender(reactObj , domRoot){
//     let createElem = document.createElement(reactObj.type);
//     createElem.setAttribute('href' , reactObj.props.href);
//     createElem.setAttribute('target' , reactObj.props.target);
//     createElem.innerHTML = reactObj.children;
//     domRoot.appendChild(createElem);
// }

// other way
function customRender(reactObj , domRoot){
    let createElem = document.createElement(reactObj.type);
    for (const key in reactObj.props) {
        if (key === 'children') continue;
        createElem.setAttribute(key, reactObj.props[key]);
    }
    createElem.innerHTML = reactObj.children;
    domRoot.appendChild(createElem);
}

let reactObj = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Google'
}


customRender(reactObj , domRoot)