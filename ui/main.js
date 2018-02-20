console.log('Loaded!');
//lchange the content of the main text

var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move the image

var img = document.getElementById("madi");
img.onclick = function(){
    img.style.marginleft = "100px";
};