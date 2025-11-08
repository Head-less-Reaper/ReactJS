//react has a prespective in which  everyting is a object i.e. it only accepts objects


const reactElement={
    type:'a', //anchor tag
    attributes:{
        href:"https://google.com",
        target:"_blank "
    },
    des:"Google.com"
}
//this is were we are going to inject our reactElement
const mainContainer = document.getElementById("root");

const customReact= (reactElement,mainContainer)=>{
    // const DOMElement=document.createElement(reactElement.type);
    // DOMElement.innerHTML=reactElement.des;
    // DOMElement.setAttribute('href',reactElement.attributes.href);
    // DOMElement.setAttribute('target',reactElement.attributes.target);
    // mainContainer.appendChild(DOMElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.des;
    for (const i in reactElement.attributes) {
        if(i === 'des') continue;
        domElement.setAttribute(i,reactElement.attributes[i]);
        mainContainer.appendChild(domElement);
        
    }
}

customReact(reactElement,mainContainer);