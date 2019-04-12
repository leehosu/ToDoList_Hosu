var inputText = document.getElementById("inputText");
var addButton = document.getElementsByTagName("button")[0];
var list = document.getElementById("listItem");

loadList();

var createInput = function() {
    var listItem = document.createElement("listItem");
    var li = document.createElement("li");
    var span = document.createElement("span");
    var checkBox = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var newInput = inputText.value;

    checkBox.type = "checkbox";

    editButton.innerText = "Edit";
    editButton.className = "edit";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    span.appendChild(document.createTextNode(" " + newInput));

    li.appendChild(checkBox);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.appendChild(span);
    listItem.appendChild(li);

    document.getElementById("inputText").value = "";

    btnEvents(listItem);
    return listItem;
}

var addBtn = function() {
    if (!inputText.value.trim()) return;
    var listItem = createInput(inputText.value);

    list.appendChild(listItem);
    saveList();
}

var editBtn = function() {
    var listItem = this.parentNode;
    var spanText = listItem.querySelector("span");
    var editButton = listItem.querySelector("button.edit");

    spanText.contentEditable = 'true';

    spanText.style.color = 'gray';
    editButton.onclick = editTextBtn;
    saveList();
}

var editTextBtn = function() {
    var listItem = this.parentNode;
    var spanText = listItem.querySelector("span");
    var editButton = listItem.querySelector("button.edit");

    spanText.contentEditable = 'false';
    spanText.style.color = 'black';
    saveList();
  
    editButton.onclick = editBtn;
}

var deleteBtn = function() {
    var listItem = this.parentNode;
    var li = listItem.parentNode;

    li.removeChild(listItem);
    localStorage.removeItem(li);
    saveList();
}

var btnEvents = function(listItem) {
    var deleteButton = listItem.querySelector("button.delete");
    deleteButton.onclick = deleteBtn;

    var editButton = listItem.querySelector("button.edit");
    editButton.onclick = editBtn;
    // saveList();

}

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("AddBtn").click();
    }
});

function saveList() {
  var html = list.innerHTML;

  localStorage.setItem("listHTML", html);
}

function loadList() {
  var html = localStorage.getItem("listHTML");
  list.innerHTML = html;
}
addButton.onclick = addBtn;
