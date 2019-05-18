(function(){
    "use strict"

    function todo(){
        const $todoInput = document.querySelector(".inputText");
        const $list = document.querySelector(".list");
        const $checkBox_all = document.querySelector(".checkboxAll"); 
        const $delete_all = document.querySelector(".deleteAll"); 
    
        let todos = [];
        let idCount = 0;
        const ENTER = 13;
      
        function init() {
            buttonEventBinder();
            loadStorage();

            //when array is empty ,,
            if(todos == null){
                todos = [];
            }

            //  when array is empty, idCount reset,,
            if(todos.length == 0){
                idCount =0;
            }

            showList();
            allEventBinder();
        }

        // add Event,,
        function addTodos(value) {
            if(!$todoInput.value.trim()) return;
            if(todos.length == 0){
                idCount =0;
            }
            todos.push({
                value,
                isChecked: false,
                id: idCount,
                isEdit : false
            });

            idCount++;
            $todoInput.value = '';
            showList();
            saveStorage();

            console.log(todos);
        }

        // template function,,
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

        // show in the display ,,
        function showList() {
            $list.innerHTML = todos.map(todo => template(todo)).join('');
            buttonEventBinder();
        }
        
        function allEventBinder(){
            $checkBox_all.addEventListener('click', checkboxAllEvent);
            $delete_all.addEventListener('click', deleteAllEvent);
        }

        // button evnet binder,,
        function buttonEventBinder() {
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

        function checkboxAllEvent(){
            const $checkBox = $list.querySelectorAll(".checkbox");

            $checkBox.forEach((element,index) =>{
                if($checkBox_all.checked){
                    todos.splice(index,1,{
                        value : todos[index].value,
                        isChecked : true,
                        id : todos[index].id,
                        isEdit : todos[index].isEdit
                    });
                }else {
                    todos.splice(index,1,{
                        value : todos[index].value,
                        isChecked : false,
                        id : todos[index].id,
                        isEdit : todos[index].isEdit
                    });
                }
            });
            
            showList();
            saveStorage();
        }

        function deleteAllEvent(){
            todos.splice(0,todos.length);
            showList();
            saveStorage();
        }

        // delete event,,
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

        // edit event,,
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

        // checkbox event,,
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

        // storage save function,,
        function saveStorage(){
            localStorage.setItem("storageList",JSON.stringify(todos));
            localStorage.setItem("idCount",JSON.stringify(idCount));
        }

        //storage load function,,
        function loadStorage(){
            todos = JSON.parse(localStorage.getItem("storageList"));
            idCount = Number(JSON.parse(localStorage.getItem("idCount")));
            console.log(todos);
        }

        init();
    }
    todo();
})();