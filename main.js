(function(){
    "use strict"
    function todo(){
        
        const inputText = document.querySelector(".inputText");
        const addBtn = document.querySelector(".addBtn");
        const list = document.querySelector(".list");
        let objectList = [];
        const ENTER = 13;    //enterkey

        let newObject = {
            value : "",
            isChecked : false
        }
            

        function init(){
            
            loadStorage();

            if(objectList !== null){
                objectList.forEach(function(newObject){
                    showList(newObject);
                    btnEventHandlr();
                })
            }

            addBtn.addEventListener('click', () => {  //when add button click,,
                mainEvent();
            });

            function mainEvent(){
                newObject.value = inputText.value;
                if (!newObject.value.trim()) return;

                if (objectList == null){
                    objectList = [];
                }
                addArray();
                showList(newObject);
                btnEventHandlr();

                console.log(newObject);
                console.log(objectList);

            }
            function addArray(){
                objectList.push({
                    value : newObject.value,
                    isChecked : newObject.isChecked
                });
                saveStorage();
            }
    
            function showList(newObject){
                list.innerHTML += templeteEvent(newObject);
                inputText.value = "";
                saveStorage();
            }
    
            function templeteEvent(newObject){
                return `
                    <li class="item-list">
                        <label class="app-list">
                            <input type="checkbox" class="checkbox" ${newObject.isChecked ? "checked" : ""}>
                        </label>
                        <span class="spanText" contentEditable = 'false'>${newObject.value}</span>
                        <div class="list-btn">
                            <button class="delete">Delete</button>
                            <button class="edit">Edit</button>
                        </div>
                    </li>
                    ` ;
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

                let checkBox = list.querySelectorAll(".checkbox");
                checkBox.forEach((element, index) => {
                    checkBox[index].addEventListener('click', checkBoxEvent);
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
                saveStorage();
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
                saveStorage();
            }

            function checkBoxEvent(){
                const itemList = document.querySelectorAll(".item-list");
                const nowList = this.parentNode.parentNode;
                const checkBox = list.querySelectorAll(".checkbox");
                const spanText = list.querySelectorAll(".spanText");

                itemList.forEach((element,index) => {
                    if(element === nowList){
                        if(checkBox[index].checked){
                            objectList.splice(index,1,{
                                value : spanText[index].innerHTML,
                                isChecked : true
                            })
                        }
                        else{
                            objectList.splice(index,1,{
                                value : spanText[index].innerHTML,
                                isChecked : false
                            })
                            
                        }
                    }
                })
                saveStorage();

            }
    
            function saveStorage(){
                localStorage.setItem("arrayList",JSON.stringify(objectList));
            }
    
            function loadStorage(){
                let stoarageArray = localStorage.getItem("arrayList");
                objectList = JSON.parse(stoarageArray);
                console.log(objectList);
            }
            inputText.addEventListener("keyup", function(event) { //when enter key click,,
                if (event.keyCode === ENTER) {
                    event.preventDefault();
                    mainEvent();
                }
            });
        }
        init();
    }
    todo();
})();
