(function(){
    "use strict"
    Sentry.init({ dsn: 'https://8c1b6d857a834079a4876243c81c2820@sentry.io/1463553' });

    function todoApp(){
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
                idCount = 0;
            }

            rendering();
            allEventBinder();
        }

        // add Event,,
        function addTodos(value) {
            if(!$todoInput.value.trim()) return;
            if(todos.length == 0){
                idCount = 0;
            }
            todos.push({
                value,
                isChecked: false,
                id: idCount,
                isEdit : false
            });

            idCount++;
            $todoInput.value = '';
            rendering();
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
        function rendering() {
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
                $checkBox[index].addEventListener('click', checkBoxEvent);
            });   
        }

        function checkboxAllEvent(){

            todos = todos.map(element => ({ 
                ...element, 
                isChecked : $checkBoxAll.checked
            }));
            
            rendering();
            saveStorage();
        }

        function deleteAllEvent(){
            todos = [];
            rendering();
            saveStorage();
        }

        // delete event,,
        function deleteButtonEvent(nowIndex){
            todos = todos.filter(element => element.id !== nowIndex );
            rendering();
            saveStorage();
        }

        // edit event,,
        function editButtonEvent(nowIndex){ 
            const $spanText = $list.querySelectorAll(".spanText");

            todos[nowIndex].isEdit = !todos[nowIndex].isEdit;
            todos[nowIndex].value = $spanText[nowIndex].innerHTML;

            rendering();
            saveStorage();
            console.log(todos);
        }

        // checkbox event,,
        function checkBoxEvent(){
            const $checkBox = $list.querySelectorAll(".checkbox");
            
            todos = todos.map((element,index) => ({
                ...element, 
                isChecked : $checkBox[index].checked
            }));

            rendering();
            saveStorage();
            console.log(todos);
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
    try {
        todoApp();
        
    } catch (error) {
        Sentry.captureException(new Error(error));
    }
})();