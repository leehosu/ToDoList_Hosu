var inputText = document.getElementById("inputText");
let addButton = document.getElementsByTagName("button")[0];
let list = document.getElementById("listItem");

var createInput = function() {
    var listItem = document.createElement("listItem");
    var li = document.createElement("li");
    var checkBox = document.createElement("input");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    var newInput = inputText.value;

    if (!newInput.trim()) {
        alert("hi");
        return false;
    }

    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(newInput));
    li.appendChild(deleteButton);
    listItem.appendChild(li);

    document.getElementById("inputText").value = "";
    btnEvents(listItem);
    return listItem;
}

var addBtn = function(e) { //enter눌렀을때 입력
    var listItem = createInput(inputText.value);
    list.appendChild(listItem);
}

var addEnter = function() {
    var listItem = createInput(inputText.value);
    list.appendChild(listItem);
}

var deleteBtn = function() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

var btnEvents = function(listItem) { //btn 이벤트 처리하는 함수
    var deleteButton = listItem.querySelector("button.delete");
    deleteButton.onclick = deleteBtn;
}

inputText.addEventListener("keydown", function(e) { //enter를 눌렀을때
    if (e.keyCode === 13) {
        addButton.onclick = addBtn(e);
    }
});

addButton.onclick = addBtn; //add 버튼을 눌렀을때!
