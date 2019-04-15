let inputText = document.querySelector("input.inputText");
let addButton = document.querySelector(".AddBtn");
var list = document.querySelector(".list");
const indexList = [];

// loadList();
const createInput =()=> {
    let templete = `
            <label class="app-list">
                <input type="checkbox" class="checkbox">
                <span class="spanText">${inputText.value}</span>
            </label>
            <div class="list-btn">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            </div>
    `;

    list.innerHTML = templete;

    console.log(list);

    inputText.value = "";
    return list;
}

let addBtn = function() {
    if (!inputText.value.trim()) return;
    var listItem = createInput(inputText.value);
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
