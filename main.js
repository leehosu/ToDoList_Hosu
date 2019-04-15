let inputText = document.querySelector("input.inputText");
let addButton = document.querySelector(".AddBtn");
var list = document.querySelector(".list");
const indexList = [];

const createInput =()=> {
    const li = document.createElement('li');
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

    li.innerHTML = templete;

    list.appendChild(li);
    inputText.value = "";


    indexList.push(li);
    console.log(indexList);
    // btnEvents(list);
    return list;
}

let addBtn = function() {
    if (!inputText.value.trim()) return;
    createInput();
}

// let deleteBtn = function(list) {
//     var listItem = this.parentNode;
//     var li = listItem.parentNode;
//
//     list.removeChild(li);
// }
//
// let btnEvents = function(list) {
//     var deleteButton = list.querySelector("button.delete");
//     console.log(deleteButton);
//     deleteButton.onclick = deleteBtn;
// }

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button.AddBtn").click();
    }
});

addButton.onclick = addBtn;
