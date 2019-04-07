var Text = document.getElementById("Text");
var addButton = document.getElementsByTagName("button")[0];
var list = document.getElementById("listItem");

var createInput = function() {
    var listItem = document.createElement("listItem");
    var li = document.createElement("li");
    var liText = document.createElement("inputText");
    var checkBox = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var newInput = Text.value;

    checkBox.type = "checkbox";
    editButton.innerText = "Edit";
    editButton.className = "edit";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    liText.appendChild(document.createTextNode(" " + newInput));

    li.appendChild(checkBox);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.appendChild(liText);
    listItem.appendChild(li);

    document.getElementById("Text").value = "";

    btnEvents(listItem);
    return listItem;
}

var addBtn = function() {
    if (!Text.value.trim()) return;
    var listItem = createInput(Text.value);

    list.appendChild(listItem);
}

var editBtn = function() {
    var inputText = this.parentNode;

    inputText.contentEditable = 'true';
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

Text.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("AddBtn").click();
    }
});

addButton.onclick = addBtn;
