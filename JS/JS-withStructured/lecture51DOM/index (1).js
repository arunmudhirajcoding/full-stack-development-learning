// window.open() 
// window.close()
// window.console.log() // global object by browser

//document object model(DOM)// modifiy code website 

//browser object model(BOM) // action of browser


// for access
// let ele = $0 for selected tag in broswer
// let mydiv = document.getElementById(mydiv);
// let mydiv = document.querySelector('#mydiv');


// get and set
// let ele= $0;
// ele.innerHtml        // will change inside slected section tags
// ele.outerHtml        // will change selected entire tags 
// ele.textContent      // will give html as it is content spaces
// ele.innerText        // will give browser (means render in ui) as it is content spaces

//  to create process
// let newElement = document.createElement('span'); // tagname
// newElement.textContent = "Love babbar"
// parentNode.appendChild(newElement)
//          or          //
// let newElement = document.createElement('span');
//let content = document.createTextNode("content");
//newElemnt.appendChild(content)
//document.body.apendChild(newELemnt); // for body we use document
//      but         //
// ele.appendChild(newElement) // need not to use document


// for desire position
// beforeend
// afterend
// beforebegin
// afterbegin
// mydiv.insertAdjacentElement('afterend', newElement);

// let parent = child.parentElement;
// let child = document.querySelector("#fpara");
// parent.removeChild(child);
