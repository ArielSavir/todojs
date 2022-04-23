var taskIndex = 1;

function init() {

}

function addTask() {
    var id = taskIndex++;

    var input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input" + id);
    input.setAttribute("placeholder", "Task " + id + " here");
    input.setAttribute("onblur", "inputBlur(" + id + ")");
    input.setAttribute("style", "width: 170px");

    var done = document.createElement("img");
    done.setAttribute("id", "done" + id);
    done.setAttribute("src", "done.png");
    done.setAttribute("data-check", "false");
    done.setAttribute("style", "width:25px; height: 25px; object-fit: contain; filter: grayscale(1); cursor: pointer");
    done.setAttribute("onclick", "onDoneClick(" + id + ")");

    var del = document.createElement("img");
    del.setAttribute("id", "btn" + id);
    del.setAttribute("src", "trash.png");
    del.setAttribute("style", "width:21px; height: 21px; object-fit: contain; cursor: pointer");
    del.setAttribute("onclick", "onDeleteTask(" + id + ")");

    var div = document.createElement("div");
    div.setAttribute("id", "row" + id)
    div.setAttribute("style", "width: 240px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin-bottom: 10px");
    div.appendChild(input);
    div.appendChild(done);
    div.appendChild(del);

    tasks.appendChild(div);
    document.getElementById("input" + id).focus();
}

function inputBlur(index) {
    var input = document.getElementById("input" + index);
    if (input.value === '') {
        input.value = 'Task ' + index;
    }
}

function onDoneClick(index) {
    var done = document.getElementById("done" + index).getAttribute("data-check");
    var input = document.getElementById('input' + index);
    var bg = done === "false" ? 'yellow' : 'white';
    var td = done === "false" ? 'line-through' : 'none';
    var filter = done === "true" ? 1 : 0;
    input.style.background = bg;
    input.style.textDecoration = td;

    done = done === "true" ? "false" : "true";
    document.getElementById("done" + index).setAttribute("data-check", done);
    document.getElementById("done" + index).style.filter = "grayscale(" + filter + ")"
}

function onDeleteTask(index) {
    var task = document.getElementById("input" + index).value;
    task = task === "" ? "" : "'" + task + "'";
    var r = confirm("Delete task " + task + "?");
    if (r === true) {
        var div = document.getElementById("row" + index);
        tasks.removeChild(div);
    }
}
