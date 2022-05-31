var task = document.getElementById('input_data');
var list = document.getElementById('task');
var taskAdd = document.getElementById('addTask');
var task_count = document.getElementById('taskCount');
var count = 0;
var arrayOfTask = [];
var today = new Date().toDateString();
document.getElementById('dateWithDays').innerHTML =today;


//  implement addEventListener to the  form from  where we get data
taskAdd.addEventListener('click', (event) => {
    // get the value of text
    var input_text = document.getElementById('text').value;
    if (input_text.length == 0) {
        document.getElementById('error').textContent = "Please Add Task !!";
        document.getElementById('error').style.color = "red";
        return false;
    }
    if(!isNaN(input_text) && !isNaN(parseInt(input_text))){
        document.getElementById('error').textContent = "Task Can Not Number !!";
        document.getElementById('error').style.color = "red";
        return false;
    }
    var date = document.getElementById('date').value;
    document.getElementById('error').innerHTML = "";
    var index = arrayOfTask.indexOf(input_text);
    if (index == -1) {
        arrayOfTask.push(input_text);
        // creating template to add dynamic list
        let length = arrayOfTask.length;
        let template = `<tr >  
        <td>${length}</td><td>${date}</td><td>${input_text}</td><td><span class ="deleteButton" onmouseover ="myremove()" ></i><i class="fa-solid fa-trash-can"></i>&nbspDelete</span></td></tr>`;
        list.innerHTML += template;
        count++;
        task_count.innerHTML = count + ' tasks Left';
    } else {
        document.getElementById('error').textContent = "Task Already Added !!";
        document.getElementById('error').style.color = "red";
        return false;
    }
    // change the value of input to blank
    document.getElementById('text').value = "";
    document.getElementById('date').value = "";
}

);

function myremove() {
    var getAllTaskList = document.querySelectorAll('tr');
    for (var i = 0; i < getAllTaskList.length; i++) {
        var data = getAllTaskList[i].innerHTML;
        var removeTaskIndex = arrayOfTask.indexOf(getAllTaskList[i].children[i].textContent);
        arrayOfTask.splice(removeTaskIndex, 1);
        getAllTaskList[i].onclick = function () {
            this.remove();
            count--;
            task_count.innerHTML = count + ' tasks Left';
        }

    }


}


