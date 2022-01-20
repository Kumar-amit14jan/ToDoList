var task = document.getElementById('input_data');
var list = document.getElementById('taskList');

//  implement addEventListener to the  form from  where we get data
task.addEventListener('submit' ,(event)=>{
    // get the value of text
    var input_text = document.getElementById('text').value;
    event.preventDefault();
    // creating template to add dynamic list
    let template =`<div class ="addTask" onClick ="this.remove()">
    <div class ="task"><li>${input_text} </div>
    <div class ="deleteTask"><button class ="deleteButton"  >X</button></div></li>
    </div>`;
    // creating element
    const divElement =document.createElement('div');
    divElement.innerHTML = template;
    // adding divElement as child of div
    list.appendChild(divElement);
    // change the value of input to blank
    document.getElementById('text').value ="";
}

);



