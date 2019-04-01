var inputText = document.getElementById("inputText");
var addButton = document.getElementsByTagName("button")[0];
var list = document.getElementById("listItem");

var createNewTaskElement = function(taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");


    checkBox.type = "checkbox";

    deleteButton.innerText = "Delete";
      deleteButton.className = "delete";

    label.innerText = taskString;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    document.getElementById("inputText").value = "";

    return listItem
}


var addBtn = function(e) {
    var listItem = createNewTaskElement(inputText.value);
    list.appendChild(listItem);
    btnEvents(listItem);
}

var deleteBtn = function() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);

}

var btnEvents = function(ListItem) {
    var deleteButton = ListItem.querySelector("button.delete");

    deleteButton.onclick = deleteBtn;
}

addButton.onclick = addBtn;
