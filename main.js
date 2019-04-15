let inputText = document.querySelector("input.inputText");
let addButton = document.getElementsByTagName("button")[0];
let list = document.querySelector(".app-list");
const indexList = [];

// loadList();
let createInput = function() {
    var label = document.createElement("label");
    var span = document.createElement("span");
    var checkBox = document.createElement("input");
    var newInput = inputText.value;

    checkBox.type = "checkbox";

    span.appendChild(document.createTextNode(" " + newInput));
    label.appendChild(checkBox);
    label.appendChild(span);

     inputText.value = "";

    // saveList();
    // btnEvents(label);
    return label;
}

let addBtn = function() {
    var spanText = inputText.value;
    if (!inputText.value.trim()) return;
    var listItem = createInput(inputText.value);

    list.appendChild(listItem);


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
