const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');
const list = document.querySelector("ul");

function addListEntry() {
    if (entry.value.length > 0 && !entry.value.startsWith(' ')) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(entry.value));
        list.appendChild(li);
        entry.value = "";
    }
}

submitBtn.addEventListener('click', addListEntry);
entry.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    e.preventDefault();
    addListEntry();
    }
});

