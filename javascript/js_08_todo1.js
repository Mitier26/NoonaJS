let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let tabs = document.querySelectorAll('.task-tabs div');
let taskList = [];
let mode = 'all';
let filterList = [];

addButton.addEventListener('click', addTask);

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (event) {
        filter(event);
    });
}

function addTask() {
    //let taskContent = taskInput.value;

    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };

    taskList.push(task);

    render();
}

function render() {
    let list = [];
    if (mode === 'all') {
        list = taskList;
    } else if (mode === 'ongoing' || mode === 'done') {
        list = filterList;
    }

    let resultHtml = '';

    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHtml += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">체크</button>
                <button onclick="deleteTask('${list[i].id}')">삭제</button>
            </div>
        </div>`;
        } else {
            resultHtml += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">체크</button>
            <button onclick="deleteTask('${list[i].id}')">삭제</button>
        </div>
    </div>`;
        }
    }

    document.getElementById('task-board').innerHTML = resultHtml;
}

function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }

    render();
}

function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1);
            break;
        }
    }
    render();
}

function filter(event) {
    mode = event.target.id;
    filterList = [];
    if (mode === 'all') {
        render();
    } else if (mode === 'ongoing') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }
        render();
    } else if (mode === 'done') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === true) {
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substring(2, 9);
}
