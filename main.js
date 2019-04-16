const inputText = document.querySelector("input.inputText")
const addButton = document.querySelector(".addBtn")
const list = document.querySelector(".list")
const indexList = [];
const ENTER = 13

const createList = (value) => {
    let templete = `
        <li class="item-list">
            <label class="app-list">
                <input type="checkbox" class="checkbox">
                <span class="spanText">${value}</span>
                </label>
                <div class="list-btn">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            </div>
        </li>
    `

    list.innerHTML += templete

    indexList.push(value)

    var deleteButton = list.querySelectorAll(".delete")

    deleteButton.forEach((element, index)=>{
        deleteButton[index].addEventListener('click', deleteBtnEvent)
    })

    console.log(list)
    return list
}

function addBtnEvent() {
    const {value} = inputText
    if (!value.trim()) return
    createList(value);
    inputText.value = ""
}

function deleteBtnEvent(event) {

    console.log('detet')
    const itemList = document.querySelectorAll(".item-list")

    const parent = this.parentNode.parentNode
    itemList.forEach(( element, index) => {
        console.log('here')
        if(element === parent) {
            index
            parent.remove()
        }
    })
    console.log(this.parentNode.parentNode)
}

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === ENTER) {
        event.preventDefault()
        addBtnEvent()
        }
});

addButton.addEventListener('click',addBtnEvent)
