(function(){
    "use strict"
    function todo(){
        
        const $todoInput = document.querySelector(".inputText");
        const $list = document.querySelector(".list");

        let count = 0;
        let todos = [];
        const ENTER = 13;

        function init() {
            buttonEventHandlr();
            loadStorage();
            showList();
        }

        function addTodos(value) {
            if(!$todoInput.value.trim()) return;
        
            todos.push({
                value,
                isChecked: false,
                id: count ++,
                isEdit : false
            });

            $todoInput.value = '';
            showList();
            saveStorage();

            console.log(todos);
        }

        function template(todos) {
            return `
               <li class="item-list" data-key="${todos.id}">
                  <label class="app-list">
                      <input type="checkbox" class="checkbox" ${todos.isChecked ? "checked" : " "}>
                  </label>
                  <span class="spanText" contentEditable = '${todos.isEdit ? true : false}'>${todos.value}</span>
                  <div class="list-btn">
                      <button class="delete">Delete</button>
                      <button class="edit">Edit</button>
                  </div>
              </li> 
            `;
        }

        function showList() {
            $list.innerHTML = todos.map(todos => template(todos)).join('');
            buttonEventHandlr();
        }

        function buttonEventHandlr() {
            const $addBtn = document.querySelector(".addBtn");
            const $deleteButton = $list.querySelectorAll(".delete");
            const $editButton = $list.querySelectorAll(".edit");
            const $checkBox = $list.querySelectorAll(".checkbox");

            $addBtn.addEventListener('click', () => {
                addTodos($todoInput.value);
            });

            $todoInput.addEventListener('keyup', (e) => {
                if(e.keyCode === ENTER) {
                    addTodos($todoInput.value);
                }
            });        

            $deleteButton.forEach((element, index) => {
                $deleteButton[index].addEventListener('click', deleteBtnEvent)
            });

            $editButton.forEach((element, index) => {
                $editButton[index].addEventListener('click', editBtnEvent);
            });

            $checkBox.forEach((element,index) => {
                $checkBox[index].addEventListener('click', checkBoxEvent);
            })
        }

        function deleteBtnEvent(){
            const $itemList = document.querySelectorAll(".item-list");
            const $nowList = this.parentNode.parentNode;
    
            $itemList.forEach((element, index)=>{
                if($itemList[index] == $nowList){
                    $nowList.remove();
                    todos.splice(index, 1);
                }
            });
            console.log(todos);
            saveStorage();
        }

        function editBtnEvent(){
            const $itemList = document.querySelectorAll(".item-list");
            const $spanText = $list.querySelectorAll(".spanText");
            const $nowList = this.parentNode.parentNode;

            $itemList.forEach((element, index) => {
                if (element == $nowList ) {
                    if (todos[index].isEdit == false) {
                        todos[index].isEdit = true;
                    } else {
                        todos[index].isEdit  = false;
                        todos.splice(index,1,{
                            value : $spanText[index].innerHTML,
                            isChecked : todos[index].isChecked,
                            id : todos[index].id,
                            isEdit : false
                        })
                    }
                }
            });
            showList();
            saveStorage();
        }

        function checkBoxEvent(){
            const $itemList = document.querySelectorAll(".item-list");
            const $nowList = this.parentNode.parentNode;
            const $checkBox = $list.querySelectorAll(".checkbox");

            $itemList.forEach((element,index) => {
                if(element === $nowList){
                    if($checkBox[index].checked){
                        todos.splice(index,1,{
                            value : todos[index].value,
                            isChecked : true,
                            id : todos[index].id,
                            isEdit : todos[index].isEdit
                        })
                    }
                    else{
                        todos.splice(index,1,{
                            value : todos[index].value,
                            isChecked : false,
                            id : todos[index].id,
                            isEdit : todos[index].isEdit
                        })
                        
                    }
                }
            })
            showList();
            saveStorage();
        }

        function saveStorage(){
            localStorage.setItem("arrayList",JSON.stringify(todos));
        }

        function loadStorage(){
            let stoarageArray = localStorage.getItem("arrayList");
            todos = JSON.parse(stoarageArray);
            console.log(todos);
        }

        init();
    }
    todo();
})();