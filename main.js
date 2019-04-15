let inputText = document.querySelector("input.inputText");
let addButton = document.querySelector(".AddBtn");
let list = document.querySelector(".app-body");
const indexList = [];

// loadList();
let createInput = function() {
    var li = document.createElement("li");
    var label = document.createElement("label");
    var span = document.createElement("span");
    var checkBox = document.createElement("input");
    var button = list.querySelector(".list-btn");
    var editButton = button.querySelector(".edit");
    var deleteButton = button.querySelector(".delete");

    var newInput = inputText.value;

    checkBox.type = "checkbox";
    checkBox.className="checkbox";

    label.className="app-list";

    // deleteButton.innerText = "Delete";
    // deleteButton.className = "delete";

    // editButton.innerText = "Edit";
    // editButton.className = "delete";

    span.appendChild(document.createTextNode(" " + newInput));

    label.appendChild(checkBox);
    label.appendChild(span);

    li.appendChild(label);

    list.appendChild(li);
    // listItem.appendChild(editButton);
    // listItem.appendChild(deleteButton);
    inputText.value = "";


    console.log(list);
    console.log(editButton);
    // saveList();
    // btnEvents(label);
    return list;
}

let addBtn = function() {
    var spanText = inputText.value;
    if (!inputText.value.trim()) return;
    var listItem = createInput(inputText.value);

    // list.appendChild(listItem);
    // saveList();
}
//
// let editBtn = function() {
//     var listItem = this.parentNode;
//     var spanText = listItem.querySelector("span");
//     var editButton = listItem.querySelector("button.edit");
//
//     spanText.contentEditable = 'true';
//
//     spanText.style.color = 'gray';
//     editButton.onclick = editTextBtn;
//     // saveList();
// }
//
// let editTextBtn = function() {
//     var listItem = this.parentNode;
//     var spanText = listItem.querySelector("span");
//     var editButton = listItem.querySelector("button.edit");
//
//     spanText.contentEditable = 'false';
//     spanText.style.color = 'black';
//
//     editButton.onclick = editBtn;
//     // saveList();
// }
//
// let deleteBtn = function() {
//     var listItem = this.parentNode;
//     var li = listItem.parentNode;
//
//     li.removeChild(listItem);
// }
//
// let btnEvents = function(li) {
//     var editButton = li.querySelector("button.edit");
//     editButton.onclick = editBtn;
//
//     var deleteButton = li.querySelector("button.delete");
//     deleteButton.onclick = deleteBtn;
//
// }

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button.AddBtn").click();
    }
});

addButton.onclick = addBtn;

// function saveList() {
//     var storageText = list.innerText;
//
//      // Write the HTML to local storage...
//      localStorage.setItem("listText", storageText);
// }
//
// function loadList() {
//     var storageText = localStorage.getItem("listText");
//
//     // Set it to the list HTML...
//     list.innerText = storageText;
// }
