const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');
const list = document.querySelector("ul");

function isEnter(e) {
    let key = e.keyCode || e.which;
    if (key === 13) {
        entry.preventDefault;
        addListEntry;
    }
    
}

function addListEntry() {
    if (entry.value.length > 0 && !entry.value.startsWith(' ')) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(entry.value));
        list.appendChild(li);
        entry.value = "";
    }
}

submitBtn.addEventListener('click', addListEntry);
// try adding the logic to the event listener as an arrow function?
entry.addEventListener('keydown', isEnter);