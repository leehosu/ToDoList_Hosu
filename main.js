    const inputText = document.querySelector("input.inputText")
    const addButton = document.querySelector(".addBtn")
    const list = document.querySelector(".list")
    const indexList = [];
    const ENTER = 13

    addButton.addEventListener('click', addBtnEvent)

    function addBtnEvent() {
        const {value} = inputText
        if (!value.trim()) return
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

        inputText.value = ""

        list.innerHTML += templete
        indexList.push(value)
        var deleteButton = list.querySelectorAll(".delete")
        deleteButton.forEach((element, index) => {
            deleteButton[index].addEventListener('click', deleteBtnEvent)
        })
        console.log(indexList)
        return indexList
    }

    function deleteBtnEvent() {
        const itemList = document.querySelectorAll(".item-list")
        const parent = this.parentNode.parentNode

        itemList.forEach((element, index) => {
            if (element === parent) {
                index
                parent.remove()
                indexList.splice(parent,1)
            }
        })
    }



    inputText.addEventListener("keyup", function(event) {
        if (event.keyCode === ENTER) {
            event.preventDefault()
            addBtnEvent()
        }
    })
