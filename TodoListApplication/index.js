document.addEventListener('DOMContentLoaded', function () {

    let totalTask = 0;
    let pendingTask = 0;
    let completedTask = 0;

    document.getElementById('addTask').addEventListener('click', function () {

        // Get the value from the input field
        const taskName = document.getElementById('taskName').value;

        // Check if the input field is not empty
        if (taskName.trim() !== '') {
            totalTask++;
            pendingTask++;
            updateCounters();

            // Create a new task item
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';

            // Create a container for the text
            const taskText = document.createElement('div');
            taskText.className = 'task-text';
            taskText.textContent = taskName;
            taskText.contentEditable = true;

            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '×';

            // Create a status element
            const status = document.createElement('div');
            status.className = 'status-btn';
            status.textContent = 'Pending';
            status.style.backgroundColor = 'yellow';

            // Create a checkbox
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.className = 'check-box';

            // Add event listener to the checkbox
            checkBox.addEventListener('change', function () {
                if (checkBox.checked) {
                    status.textContent = 'Completed';
                    status.style.backgroundColor = 'rgb(39, 176, 5)';
                    completedTask++;
                    pendingTask--;
                } else {
                    status.textContent = 'Pending';
                    status.style.backgroundColor = 'yellow';
                    pendingTask++;
                    completedTask--;
                }
                updateCounters();
            });

            deleteBtn.addEventListener('click', function () {
                // Remove the task item when the delete button is clicked
                taskItem.remove();
                totalTask--;
                if (checkBox.checked) {
                    completedTask--;
                } else {
                    pendingTask--;
                }
                updateCounters();
            });

            // Append the text, delete button, status, and checkbox to the task item
            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteBtn);
            taskItem.appendChild(status);
            taskItem.appendChild(checkBox);

            // Append the new task item to the task list
            document.getElementById('taskList').appendChild(taskItem);

            // Clear the input field
            document.getElementById('taskName').value = '';

            // Hide and show delete button based on text focus
            taskText.addEventListener('focus', function () {
                deleteBtn.classList.add('hidden');
            });

            taskText.addEventListener('blur', function () {
                setTimeout(function () {
                    deleteBtn.classList.remove('hidden');
                }, 100);
                if (taskText.textContent.trim() === '') {
                    alert("Task can't be empty!");
                    taskText.textContent = 'Empty Task!';
                    taskText.style.border = '2px solid black';
                    completedTask--
                    updateCounters()
                    taskText.focus();
                } else {
                    taskText.style.border = '';
                }
            });
        } else {
            // Handle the case where the input is empty
            alert('Please enter a task name.');
        }

        function updateCounters() {
            console.log("total task:- " + totalTask);
            console.log("pending task:- " + pendingTask);
            console.log("completed task:- " + completedTask);
            console.log("------------------new task added------------------");

            document.getElementById('totalTask').textContent = totalTask;
            document.getElementById('totalPendingTask').textContent = pendingTask;
            document.getElementById('totalCompletedTask').textContent = completedTask;
        }
    })
})