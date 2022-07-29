const btnPlus = document.querySelector('.plus')
const addTask = document.querySelector('.add-new-task')
const title = document.querySelector('.title')
const plus = document.querySelector('.plus')
const save = document.querySelector('.save')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')
const tasks = document.querySelector('.tasks')

let taskID = 0
const checkNewTask = () => {
    addTask.classList.toggle('translate')
    if(addTask.classList.contains("translate")) {
        title.innerHTML = ``
        plus.innerHTML = `<i class="fa-solid fa-minus"></i>`
    } else {
        title.innerHTML = `<p>dodaj zadanie</p>`
        plus.innerHTML = `<i class="fa-solid fa-plus"></i>`
    }
}
const addNewTask = () => {
    if (textarea.value === '') {
        error.style.color = 'red'
    } else {
        const newTask = document.createElement('div')
        newTask.classList.add('task')
        newTask.setAttribute('id', taskID);
        newTask.innerHTML = `
        <p class="task-title">${textarea.value}</p>
        <div class="task-icon">
            <button class="done-task" onclick="doneTask(${taskID})">
            <i class="fa-solid fa-check"></i>
            </button>
            <button class="delete-task" onclick="deleteTask(${taskID})">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        `
        tasks.appendChild(newTask)
        taskID++
        textarea.value = ''
        error.style.color = 'white'
        addTask.classList.remove('translate')
        title.innerHTML = `<p>dodaj zadanie</p>`
        plus.innerHTML = `<i class="fa-solid fa-plus"></i>`
    }
}
const deleteTask = id => {
    const taskDelete = document.getElementById(id)
    tasks.removeChild(taskDelete)
}
const doneTask = id => {
    const taskDone = document.getElementById(id)
    taskDone.classList.toggle('deleted')
}
btnPlus.addEventListener('click', checkNewTask)
save.addEventListener('click', addNewTask)