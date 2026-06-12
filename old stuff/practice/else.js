function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}

/*
let yourname = prompt("What's your name?");
    addToBody("Hi " + yourname);
*/

let temp = prompt("What's the temperature outside?");
temp = Number(temp);
if(temp < 32){
    addToBody("It's freezing outside");
}  else if (temp >= 70){
        addToBody("It's hot outside");
}  else {
        addToBody("It's nice outside");
}

