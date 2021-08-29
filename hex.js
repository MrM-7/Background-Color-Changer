
var Picker  =  ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

document.querySelector("button").addEventListener("click",function(){

    var hexColor = "#";

    for(var i=0; i<6; i++){
        var random = Math.floor(Math.random()*15);
        var code = Picker[random];
        hexColor += code;
    }

    document.querySelector("body").style.backgroundColor = hexColor;
    document.querySelector(".color").style.color  = hexColor;
    document.querySelector(".color").innerHTML = hexColor;
});