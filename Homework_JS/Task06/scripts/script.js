let addReminder = document.getElementById('addReminder')
let allReminders = document.getElementById('allReminders')
let title = document.getElementById('title')
let priority = document.getElementById('priority')
let color = document.getElementById('color')
let description = document.getElementById('description')
let container = document.getElementById("tableContainer");
let reminders = [];

function createItem(title, priority, color, description) {

    let newItem = new Reminder(title.value, priority.value, color.value, description.value)
    reminders.push(newItem);
    title.value = ''
    priority.value = ''
    color.value = ''
    description.value = ''
    console.log(reminders)

}

function createTable(reminders, container) {
    container.innerHTML = "";

    let table = document.createElement("table");
    table.border = "5";

    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let headers = ["Title", "Priority", "Color", "Description"];

    headers.forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    reminders.forEach(reminder => {
        let row = document.createElement("tr");

        let tdTitle = document.createElement("td");
        tdTitle.textContent = reminder.title;
        tdTitle.style.color=reminder.color;
        row.appendChild(tdTitle);

        let tdPriority = document.createElement("td");
        tdPriority.textContent = reminder.priority;
        row.appendChild(tdPriority);

        let tdColor = document.createElement("td");
        tdColor.textContent = reminder.color;
        row.appendChild(tdColor);

        let tdDescription = document.createElement("td");
        tdDescription.textContent = reminder.description;
        row.appendChild(tdDescription);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    container.appendChild(table);

}

addReminder.addEventListener('click', function () {

    createItem(title, priority, color, description)
})

allReminders.addEventListener('click', function () {
    createTable(reminders, container)
})