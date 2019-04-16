let inputText = document.querySelector("input.inputText");
let addButton = document.querySelector(".addBtn");
let list = document.querySelector(".list");
const indexList = [];

const createList =(value)=> {
    let templete = `
        <li>
            <label class="app-list">
                <input type="checkbox" class="checkbox">
                <span class="spanText">${value}</span>
            </label>
            <div class="list-btn">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            </div>
        </li>
    `;

    list.innerHTML += templete;

    indexList.push(value);

    console.log(indexList);

    return list;
}

const addBtn = () => {
    const{value} = inputText;
    if(!value.trim()) return;
    createList(value);
    inputText.value=" ";
}

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button.addBtn").click();
    }
});

addButton.onclick = addBtn;
