

var colorPicker = ["Maroon","Yellow","Purple","Silver","Teal","Aqua","Fuchsia","Olive"];

document.querySelector(".btn").addEventListener("click",function(){
    var random = Math.random()*8;
    random = Math.floor(random);
    var color = colorPicker[random];

    document.querySelector("body").style.backgroundColor = color;
    document.querySelector(".color").style.color  = color;
    document.querySelector(".color").innerHTML = color;
});