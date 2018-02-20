console.log('Loaded!');
//lchange the content of the main text

var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move the image

var img = document.getElementById("madi");
var marginleft = 0;
function moveRight(){
    marginleft = marginleft + 5;
    img.style.marginLeft = marginleft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};