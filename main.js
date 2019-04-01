var inputText = document.getElementById("inputText");
var addButton = document.getElementsByTagName("button")[0];
var list = document.getElementById("listItem");

var createNewTaskElement = function(taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input"); //checkbox
    var label = document.createElement("label");

    checkBox.type = "checkbox";

    label.innerText = taskString;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    document.getElementById("inputText").value = "";

    return listItem;
}


var addTask = function() {
    var listItem = createNewTaskElement(inputText.value);
    list.appendChild(listItem);
    bindTaskEvents(listItem);
}

addButton.onclick = addTask;
