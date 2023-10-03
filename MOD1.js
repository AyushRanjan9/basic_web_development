
    //root node
    // console.log(document.body.childNodes)
    // console.log(document.firstElementChild) 
    // //sibling
    // const ulTag=document.body.children[0]
    // console.log(ulTag.document.childNodes)

    //to access all element of <li>

    var listitems= document.getElementsByTagName("li");

// change the content of <li> items as u want

    listitems[1].innerHTML=" second-2 elements";

//access lement by class name
     
    var elementsWithClass= document.getElementsByClassName("myClass");
//create a new element
     var newParagraph=document.createElement("p");
     newParagraph.innerHTML="This is new paragraph line"
// append it to an existing element
     var myDiv= document.getElementById("myDiv");
     myDiv.appendChild(newParagraph);

//access the button element
     var button= document.getElemnetById("myButton");

//change it`s style
     button.style.backgroundColor ="blue";
     button.style.color="green";

// Access the button element
     var button = document.getElementById("myButton");

// Add a click event listener
     button.addEventListener("click", function() {
     alert("Button clicked!");
});

// Access the image element
     var image = document.getElementById("myImage");

// Change the source and alt attributes
     image.src = "newimage.jpg";
     image.alt = "A new image";

