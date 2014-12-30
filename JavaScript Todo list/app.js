var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder= document.getElementById("incomplete-tasks");
var completedTaskHolder= document.getElementById("completed-tasks");


var createNewTaskElement = function(taskString){
  var listItem= document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton  = document.createElement("button");
  
  checkBox.type = "checkBox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className="delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
  
}

var addTask = function(){
  console.log("Add Task...");
  if (taskInput.value===""){alert("Please enter an item!"); return;}
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  
  taskInput.value="";
}

var editTask = function(){
    console.log("Edit Task...");
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var button = listItem.querySelector("button");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    
    if (containsClass){
       label.innerText = editInput.value;
       button.innerText = "Edit";
       
    }
    else{
        editInput.value = label.innerText;
        button.innerText = "Save";

    }
  
    listItem.classList.toggle("editMode");
  
  
}

var deleteTask = function(){
    console.log("Delete Task...");
    var listItem = this.parentNode; //button is child
    var ul = listItem.parentNode
    ul.removeChild(listItem);
  
}

var taskCompleted = function(){
    console.log("Task Complete...");
    var listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  
}

var taskIncomplete = function(){
    console.log("Task Incomplete...");
    var listItem = this.parentNode; //checkBox is child
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
 console.log("Bind item event listener");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  editButton.onclick=editTask;
  deleteButton.onclick=deleteTask;
  
  checkBox.onchange=checkBoxEventHandler;
}

var ajaxRequest = function(){
  console.log("AJAX request");
}

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

for (var i =0; i < incompleteTaskHolder.children.length;i++){
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for (var i =0; i < completedTaskHolder.children.length;i++){
  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}




