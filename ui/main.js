//Counter code
var button = document.getElementById('counter');
button.onclick = function(){
  //Create a request to counter endpoint
  var request = new XMLHTTPrequest();
  //Capture the response and store it in a variabe
  request.onreadystatechange = function(){
    if (request.readyState == XMLHTTPrequest.DONE){
        //Take some action
        if (request.status == 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //Not done yet
  };
  //Make a request
  request.open("GET","http://yuvisc7.imad-app.hasura.io/counter",true);
  request.send(null);
};