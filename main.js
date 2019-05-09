(function(){
    "use strict"

    const inputText = document.querySelector('.inputText');
    const indexList = [];
    const addButton = document.querySelector(".addBtn");
    const list = document.querySelector(".list");
    const ENTER = 13;    //enterkey
    
    const basicStatus = {
        value : "",
        isChecked : "checked"
    };

    function showList() {

        loadList();
        addButton.addEventListener('click', () => {
            mainBtnEvent();//add button lister
        }); 
   
        function mainBtnEvent() {        
            templeteCrtl();
            inputText.value = "";
            BtnHandler();
        }

        function templeteCrtl(){
            basicStatus.value = inputText.value
            const {value} = basicStatus;
            const {isChecked} = basicStatus;
            if (!value.trim()) return; //inputText insert
            
            let templete = `
            <li class="item-list">
                <label class="app-list">
                    <input type="checkbox" class="checkbox" ${isChecked}>
                </label>
                <span class="spanText" contentEditable = 'false'>${value}</span>
                <div class="list-btn">
                    <button class="delete">Delete</button>
                    <button class="edit">Edit</button>
                </div>
            </li>
            `;
            
            list.innerHTML += templete;
            madeArray(basicStatus);
            saveList(); 
        }

        function madeArray(basicStatus){
            indexList.push({
                value : basicStatus.value,
                isChecked : basicStatus.isChecked
            });
            console.log(indexList);
        }

        function BtnHandler(){
            let deleteButton = list.querySelectorAll(".delete"); // delete button Active
            
            deleteButton.forEach((element, index) => {
                deleteButton[index].addEventListener('click', deleteBtnEvent);
            });

            let editButton = list.querySelectorAll(".edit"); //edit button Active
            editButton.forEach((element, index) => {
                editButton[index].addEventListener('click', editBtnEvent);
            });
    
            let checkBox = list.querySelectorAll(".checkbox");
            checkBox.forEach((element, index) => {
                checkBox[index].addEventListener('click', checkBoxEvent);
            });
        }

        function deleteBtnEvent() { //delete button listner
            const itemList = document.querySelectorAll(".item-list");
            const parent = this.parentNode.parentNode;
    
            itemList.forEach((element, index) => {
                if (element === parent) {
                    parent.remove();
                    indexList.splice(parent, 1);
                    saveList();
                }
            })
        }
    
        function editBtnEvent() { //editbutton listner
            const itemList = document.querySelectorAll(".item-list");
            const spanText = list.querySelectorAll(".spanText");
            const parent = this.parentNode.parentNode;
            const editButton = list.querySelectorAll(".edit");
    
            itemList.forEach((element, index) => {
                const isEdit = spanText[index].contentEditable;
                if (element === parent) {
                    if (isEdit === 'false') {
                        spanText[index].contentEditable = 'true';
                        spanText[index].style.color = 'gray';
                    } else {
                        spanText[index].contentEditable = 'false';
                        spanText[index].style.color = 'black';
                        indexList[index] = spanText[index].innerHTML;
                        saveList();
                    }
                }
            })
            console.log(indexList);
    
        }
    
        function checkBoxEvent() {      //checked
            const itemList = document.querySelectorAll(".item-list");
            const parent = this.parentNode.parentNode;
            let checkBox = list.querySelectorAll(".checkbox");
    
            itemList.forEach((element, index) => {
                const isChecked = checkBox[index].checked;
                if (element === parent) {
                    if (isChecked === false) {
                        basicStatus.isChecked='uncheck';
                    }else{
                        basicStatus.isChecked='checked';
                    } 
                }
            });
            saveList();
            console.log(basicStatus.isChecked);
        }

        function saveList() {
            var todoList = list.innerHTML;
            localStorage.setItem("todoList", todoList);
          }
          
        function loadList() {
            var todoList = localStorage.getItem("todoList");
            list.innerHTML = todoList;
            BtnHandler();
         }

        inputText.addEventListener("keyup", function(event) { //enter key
            if (event.keyCode === ENTER) {
                event.preventDefault();
                mainBtnEvent();
            }
        })

    }

    showList();
})();
