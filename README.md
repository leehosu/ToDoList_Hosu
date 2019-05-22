
# ToDoList_Hosu

## ✨ Object와 rendering을 활용한 ToDoList 

#### 1. main Index display
![mainIndex](./image/mainIndex.png)

#### 2. add Event
- input tag에 text를 입력한 후 Add 버튼을 누르면 rendering을 통해
list가 입력된다.
![addEvent](./image/addText.png)


- 그 후 console에서 확인해 보면, array에 잘 입력 된 것을 확인 할 수 있다.
![addArray](./image/addArray.png)


#### 3. eidt Event
- 출력된 list에 text를 수정하고 싶다면 edit button을 클릭해 이벤트를 활성화시킨다.
![editEvent](./image/editEvent.png)

- 배열에 저장되있는 isEdit 값이 true로 바뀌며 contentEditable이 활성화 됩니다.
![eidtEventArray](./image/editEventArray.png)

- 수정을 한 뒤 edit를 다시 한번 click하게 되면 바뀐 text로 수정됩니다.
![editFinish](./image/editFinish.png)

- console로 배열을 확인해보면 바뀐 text로 value가 수정되어있고 isEdit값도 false로 변경되어있음을 확인 할 수 있습니다.
![editFinishArray](./image/editFinishArray.png)

#### 4. check Event
![checkEvent](./image/checkEvent.png)
- 출력된 list에 해결 여부를 확인하려고 checkBox를 활성화 시키기위해 객체에 isChecked라는 속성을 추가해 checked일때 true를 표현했습니다.

![checkEventArray](./image/checkEventArray.png)
- console에서 확인해보면 정상적으로 object의 속성 값이 변경된것을 확인 할 수 있다.

#### 5. LocalStorage Function
- 더욱 완벽한 todolist를 구현하기 위해 localstorage를 활용하여 list를 저장시키고 todoApp을 실행할때에 list를 불러올 수 있게 구현하였습니다.
1) save storage function
~~~
function saveStorage(){
            localStorage.setItem("storageList",JSON.stringify(todos));
            localStorage.setItem("idCount",JSON.stringify(idCount));
}
~~~
=======
