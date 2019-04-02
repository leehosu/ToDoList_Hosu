var inputText = document.getElementById("inputText");
let addButton = document.getElementsByTagName("button")[0];
let list = document.getElementById("listItem");

var createInput = function() {
    var listItem = document.createElement("listItem");
    var li = document.createElement("li");
    var checkBox = document.createElement("input");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");

    checkBox.type = "checkbox";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    editButton.innerText = "Edit";
    editButton.className = "edit";

    var newInput = inputText.value;

    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(newInput));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    listItem.appendChild(li);

    document.getElementById("inputText").value = "";

    btnEvents(listItem);
    return listItem;
}

var addBtn = function() {
    if (!inputText.value.trim()) return;
    var listItem = createInput(inputText.value);

    list.appendChild(listItem);
}

var editBtn = function() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    listItem.contentEditable = 'true';
}

var deleteBtn = function() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

var btnEvents = function(listItem) {
    var deleteButton = listItem.querySelector("button.delete");
    deleteButton.onclick = deleteBtn;

    var editButton = listItem.querySelector("button.edit");
    editButton.onclick = editBtn;
}

addButton.onclick = addBtn;
