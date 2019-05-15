(function(){
    "use strict"
    function todo(){
        
        const inputText = document.querySelector(".inputText");
        const addBtn = document.querySelector(".addBtn");
        const list = document.querySelector(".list");
        const objectList = [];
        const ENTER = 13;    //enterkey

        const newObject = {
            value : "",
            isChecked : false
        }

        function init(){
            addBtn.addEventListener('click', mainEvent);
            loadList();
        }

        function mainEvent(){
            newObject.value = inputText.value;
            const {value} = newObject;
            const {isChecked} = newObject;
            if (!value.trim()) return;
            
            objectList.push({
                value : newObject.value,
                isChecked : newObject.isChecked
            });

            showList(value);
            btnEventHandlr(newObject);
            console.log(objectList);
        }

        function templeteEvent(newObject){
            return `
            <li class="item-list">
                <label class="app-list">
                    <input type="checkbox" class="checkbox" ${newObject.isChecked}>
                </label>
                <span class="spanText" contentEditable = 'false'>${newObject.value}</span>
                <div class="list-btn">
                    <button class="delete">Delete</button>
                    <button class="edit">Edit</button>
                </div>
            </li>
            `;
        }
        function showList(value){
            list.innerHTML += templeteEvent(newObject);
            inputText.value = "";
            saveList();
        }

        function btnEventHandlr(){
            let deleteButton = list.querySelectorAll(".delete");
            deleteButton.forEach((element, index) => {
                deleteButton[index].addEventListener('click', deleteBtnEvent)
            });

            let editButton = list.querySelectorAll(".edit");
            editButton.forEach((element, index) => {
                editButton[index].addEventListener('click', editBtnEvent);
            });
        }

        function deleteBtnEvent(){
            const itemList = document.querySelectorAll(".item-list");
            const nowList = this.parentNode.parentNode;

            itemList.forEach((element, index)=>{
                if(itemList[index] == nowList){
                    nowList.remove();
                    objectList.splice(index,1);
                }
            });
            saveList();
        }

        function editBtnEvent(){
            const itemList = document.querySelectorAll(".item-list");
            const spanText = list.querySelectorAll(".spanText");
            const nowList = this.parentNode.parentNode;

            itemList.forEach((element, index) => {
                const isEdit = spanText[index].contentEditable;
                if (element === nowList) {
                    if (isEdit === 'false') {
                        spanText[index].contentEditable = 'true';
                        spanText[index].style.color = 'gray';
                    } else {
                        spanText[index].contentEditable = 'false';
                        spanText[index].style.color = 'black';

                        objectList.splice(index,1,{
                            value : spanText[index].innerHTML,
                            isChecked : newObject.isChecked
                        })
                    }
                }
            });
            saveList();
        }

        function saveList() {
            let todoList = list.innerHTML;

            localStorage.setItem("todoList", todoList);
            localStorage.setItem("listStorage", newObject);
        }
          
        function loadList() {
            let todoList = localStorage.getItem("todoList");
            let listStorage = localStorage.getItem("newObject");
            list.innerHTML = todoList;
            objectList.push({
                value : newObject.value,
                isChecked : newObject.isChecked
            });
            btnEventHandlr();
        }

        inputText.addEventListener("keyup", function(event) { //enter key
            if (event.keyCode === ENTER) {
                event.preventDefault();
                mainEvent();
            }
        })
        init();
    }
    todo();
})();
