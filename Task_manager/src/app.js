const taskinput = document.getElementById('taskinput');
const addtaskbtn = document.getElementById('addtaskbtn');
const tasklist = document.getElementById('tasklist');

addtaskbtn.addEventListener('click', addTask);
function addTask(){
    const taskTest = taskinput.value;
    if (taskTest === '') return;

    const li = document.createElement('li');
    li.textContent = taskTest;

    li.addEventListener('click', () => {
        li.classList.toggle ('completed');
    });
    
    tasklist.appendChild(li);
    taskinput.value = '';
}