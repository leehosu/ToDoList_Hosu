function newItem() {
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");

  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);

  document.getElementById("input").value = "";

  if(item.getElementByText===" "||item.getElementByText==="") return false;
  li.onclick = removeItem;
}

document.body.onkeyup = function(e) { //엔터키 적용
  if (e.keyCode == 13) {
    newItem();
  }
};

function removeItem(e) { //클릭시 삭제
    e.target.parentElement.removeChild(e.target);
}
