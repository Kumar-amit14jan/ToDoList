var add_Button = document.getElementById('addButton');
var task = document.getElementById('input_data');
var list = document.getElementById('taskList');

task.addEventListener('submit' ,(event)=>{
    var input_text = document.getElementById('text').value;
    event.preventDefault();
    let template =`<div class ="addTask" onClick ="this.remove()">
    <div class ="task"><li>${input_text} </div>
    <div class ="deleteTask"><button class ="deleteButton" >X</button></div></li>
    </div>`;
    const divElement =document.createElement('div');
    divElement.innerHTML = template;
    list.appendChild(divElement);
    document.getElementById('text').value ="";
}

);
