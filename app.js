var task = document.getElementById('input_data');
var list = document.getElementById('taskList');
var task_count = document.getElementById('taskCount');
var count  = 0 ;


//  implement addEventListener to the  form from  where we get data
task.addEventListener('submit' ,(event)=>{
    // get the value of text
    var input_text = document.getElementById('text').value;
    event.preventDefault();
    
    // creating template to add dynamic list
    let template =`<div class ="addTask">
    ${input_text}<b><button class ="deleteButton" onmouseover ="myremove()" >X</button><b></div>`;
    // creating element
    const divElement =document.createElement('li');
    divElement.innerHTML = template;
    // adding divElement as child of div
    list.appendChild(divElement);
    count++;
    task_count.innerHTML =count +' tasks Left';
    // change the value of input to blank
    document.getElementById('text').value ="";
}

);

 function myremove(){
    var getAllTaskList = document.querySelectorAll('li');
     for(var i = 0 ; i< getAllTaskList.length ; i++){
        var data = getAllTaskList[i].innerHTML; 
        getAllTaskList[i].onclick = function(){
             this.remove();
             count--;
             task_count.innerHTML =count +' tasks Left';
        }
        
    }
    
     
 }


