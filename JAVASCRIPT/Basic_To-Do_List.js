document.getElementById("add_task_button").onclick = function () {

  let input = document.getElementById("task_input").value;
  let li = document.createElement("li");

  li.innerHTML = `<input type="checkbox"> ${input}`;

  document.getElementById("task_output").appendChild(li);
 
};
