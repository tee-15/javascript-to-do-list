var myNodelist = document.getElementsByTagName("LI");
var li = document.createElement("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement ("SPAN");
    var txt = document.createTextNode ("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display ="none";
    }
}
var list = document.querySelector('ul')
list.addEventListener('click',function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target. classList.toggle('checked');
    }
} , false);

function newElement() {
    console.log("hello World");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue = ''){
        console.log("hello wolrd")
        alert("You must write something!");

    } else{
        console.log("Hello");
                document.getElementById("myUL").appendChild(li);
        inputValue = "";
    }
}

document.getElementById("myInput").value = " ";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
function removeAll(){
    var Ist = document.getElementsByTagName("ul");
    Ist[0].innerHTML = "" ;
}