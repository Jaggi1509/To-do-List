document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteTask">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Add event listener to delete button
        const deleteButton = taskItem.querySelector('.deleteTask');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
