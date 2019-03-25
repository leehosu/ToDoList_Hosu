var checkbox = document.createElement("input");
checkbox.type="checkbox";

function newItem() {
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");

  if(item==='' || item===' '||item ==='  '){
      alert("입력값이 없습니다..");
  }
  else{
     li.appendChild(document.createTextNode("- " + item));
     ul.appendChild(li);
  }

  document.getElementById("input").value = "";

   var span = document.createElement("SPAN");
   var markX = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(markX);
   checkbox.checked = false;
   li.appendChild(span);

   for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    checkbox.checked = true;
  }
}, false);

document.body.onkeyup = function(e) { //엔터키 적용
  if (e.keyCode == 13) {
    newItem();
  }
};
