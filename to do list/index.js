function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      taskList.appendChild(li);
      taskInput.value = "";
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
      li.appendChild(deleteButton);
    } else {
      alert("Please enter a task.");
    }
  }
  