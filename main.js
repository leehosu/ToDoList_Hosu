(function(){
    "use strict"

    function todo(){
        const $todoInput = document.querySelector(".inputText");
        const $list = document.querySelector(".list");
        const $checkBoxAll = document.querySelector(".checkboxAll"); 
        const $deleteAll = document.querySelector(".deleteAll"); 
    
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
            $checkBoxAll.addEventListener('click', checkboxAllEvent);
            $deleteAll.addEventListener('click', deleteAllEvent);
        }

        // button evnet binder,,
        function buttonEventBinder() {
            const $addButton = document.querySelector(".addBtn");
            const $itemList = $list.querySelectorAll(".item-list")
            const $deleteButton = $list.querySelectorAll(".delete");
            const $editButton = $list.querySelectorAll(".edit");
            const $checkBox = $list.querySelectorAll(".checkbox");

            $addButton.addEventListener('click', () => {
                addTodos($todoInput.value);
            });

            $todoInput.addEventListener('keyup', (e) => {
                if(e.keyCode === ENTER) {
                    addTodos($todoInput.value);
                }
            });        

            $itemList.forEach((element,index) => {
                $deleteButton[index].addEventListener('click', () => {
                    deleteButtonEvent(todos[index].id);
                });
                $editButton[index].addEventListener('click', () => {
                    editButtonEvent(todos[index].id);
                });
                $checkBox[index].addEventListener('click', () => {
                    checkBoxEvent(todos[index].id);
                });
            });   
        }

        function checkboxAllEvent(){

            todos.forEach( element => {
                element.isChecked = $checkBoxAll.checked ?  true : false;
            });

            showList();
            saveStorage();
        }

        function deleteAllEvent(){
            todos = [];
            showList();
            saveStorage();
        }

        // delete event,,
        function deleteButtonEvent(nowIndex){
            todos = todos.filter(element => {
                return element.id !== nowIndex;
              });
            showList();
            saveStorage();
        }

        // edit event,,
        function editButtonEvent(nowIndex){
            const $spanText = $list.querySelectorAll(".spanText");

            todos[nowIndex].isEdit = todos[nowIndex].isEdit ? false : true;
            todos[nowIndex].value = $spanText[nowIndex].innerHTML;

            showList();
            saveStorage();
        }

        // checkbox event,,
        function checkBoxEvent(nowIndex){
            const $checkBox = $list.querySelectorAll(".checkbox");
            
            todos[nowIndex].isChecked = $checkBox[nowIndex].checked ?  true :  false;
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