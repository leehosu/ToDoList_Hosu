var inputText = document.getElementById("inputText");
var addButton = document.getElementsByTagName("button")[0];
var list = document.getElementById("listItem");

var createInput = function() {
    var listItem = document.createElement("listItem");
    var li = document.createElement("li");
    var checkBox = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var newInput = inputText.value;

    checkBox.type = "checkbox";
    editButton.innerText = "Edit";
    editButton.className = "edit";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";


    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(newInput));
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
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
    var li = listItem.parentNode;

    listItem.contentEditable = 'true';

}

var deleteBtn = function() {
    var listItem = this.parentNode;
    var li = listItem.parentNode;

    li.removeChild(listItem);
}

var btnEvents = function(listItem) {
    var deleteButton = listItem.querySelector("button.delete");
    deleteButton.onclick = deleteBtn;

    var editButton = listItem.querySelector("button.edit");
    editButton.onclick = editBtn;
}

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("AddBtn").click();
    }
});

addButton.onclick = addBtn;
