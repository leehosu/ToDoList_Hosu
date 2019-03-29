function newItem() {
  let item = document.getElementById("input").value;
  let ul = document.getElementById("list");
  let li = document.createElement("li");

  if(item==='' || item===' '||item ==='  '){
      alert("입력값이 없습니다..");
  }
  else{
      li.appendChild(document.createTextNode("- " + item));
      ul.appendChild(li);
  }

  document.getElementById("input").value = "";

  var delSpan = document.createElement("delSpan");
  var markX = document.createTextNode("\u00D7");
  delSpan.className = "close";
  delSpan.appendChild(markX);
  li.appendChild(delSpan);

  var editSpan = document.createElement("editSpan");
  var editBtn = document.createTextNode("EDIT");
  editSpan.className = "edit";
  editSpan.appendChild(editBtn);
  li.appendChild(editSpan);


   var close = document.getElementsByClassName("close");
   for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var edit = document.getElementsByClassName("edit");

  for (i = 0; i < edit.length; i++) {
   edit[i].onclick = function() {
     var li = this.parentElement;
     li.contentEditable = 'true';
   }
 }
}

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

document.body.onkeyup = function(e) { //엔터키 적용
  if (e.keyCode == 13) {
    newItem();
  }
};

function updateBtn(){

}
