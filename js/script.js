const newTask = document.querySelector("#myInput");
const submitTask = document.querySelector(".addBtn");
const taskCollection = document.querySelector("#myUL");
const clearBtn = document.querySelector("#clear-list");

//CreatedElement




//Event Listeners

submitTask.addEventListener("click", function() {
  if (newTask.value === "") {
    alert("Write Something");
  } else {
    //Create Li Element and append Task
    let li = document.createElement("li");
    let taskText = document.createTextNode(newTask.value);
    li.appendChild(taskText);

    //Create Close Eleent and Append to Li
    let close = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    close.className = "close";
    close.appendChild(txt);
    li.appendChild(close);
    
    //Append Li to Ul
    taskCollection.appendChild(li);
    newTask.value = "";
  }
});

taskCollection.addEventListener("click", function(e) {
  if(e.target.className === "close") {
    if (confirm("Are You Sure?")) {
        e.target.parentElement.remove();
  }
}
});

taskCollection.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
      if (confirm("Are You Sure?")) {
          console.log("Hello World")
          e.target.classList.toggle('checked');
    }
  }
  });

  clearBtn.addEventListener("click", function() {
      if(confirm("Do You Want TO Delete All")) {
        taskCollection.innerHTML = "" 
      }
      
  });
