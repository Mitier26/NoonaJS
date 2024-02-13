let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');

let taskList = [];

addButton.addEventListener('click', addTask);

function addTask() {
    // let taskContent = taskInput.value;
    let task = {
        taskContent: taskInput.value,
        isComplete: false,
    };
    taskList.push(task);
    console.table(taskList);

    render();
}

function render() {
    let resultHTML = ``;

    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
                            <div>${taskList[i].taskContent}</div>
                            <div>
                                <button>체크</button>
                                <button>삭제</button>
                            </div>
                        </div>`;
    }

    document.getElementById('task-board').innerHTML = resultHTML;
}
