let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let tabs = document.querySelectorAll('.task-tabs div');
let underLine = document.getElementById('under-line');

let taskList = [];
let filterList = [];
let mode = 'all';

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (event) {
        underLine.style.left = event.currentTarget.offsetLeft + 'px';
        underLine.style.width = event.currentTarget.offsetWidth + 'px';
        underLine.style.top = event.currentTarget.offsetTop + event.currentTarget.offsetHeight + 'px';
        filter(event);
    });
}

function addTask() {
    let taskContent = taskInput.value;
    if (taskContent !== null && taskContent !== '') {
        console.log(taskContent);
        console.log('why');
        let task = {
            id: randomIDGenerate(),
            taskContent: taskInput.value,
            isComplete: false,
        };

        taskList.push(task);
        taskInput.value = '';
        render();
    }
}

function render() {
    let resultHTML = ``;
    let list = [];

    if (mode === 'all') {
        list = taskList;
    } else if (mode === 'ongoing' || mode === 'done') {
        list = filterList;
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div class="task-btn-group">
                <button onclick="toggleComplete('${list[i].id}')">체크</button>
                <button onclick="deleteTask('${list[i].id}')">삭제</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div class="task-btn-group">
                <button onclick="toggleComplete('${list[i].id}')">체크</button>
                <button onclick="deleteTask('${list[i].id}')">삭제</button>
            </div>
        </div>`;
        }
    }

    document.getElementById('task-board').innerHTML = resultHTML;
}

function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    filter();
}

function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1);
            break;
        }
    }
    filter();
}

function filter(event) {
    // mode = event.target.id;
    if (event) {
        mode = event.target.id;
        underLine.style.width = event.target.offsetWidth + 'px';
        underLine.style.left = event.target.offsetLeft + 'px';
        underLine.style.top = event.target.offsetTop + (event.target.offsetHeight - 4) + 'px';
    }

    filterList = [];

    if (mode === 'ongoing') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }
    } else if (mode === 'done') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === true) {
                filterList.push(taskList[i]);
            }
        }
    }

    render();
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substring(2, 9);
}
