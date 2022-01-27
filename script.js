const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');
const list = document.querySelector("ul");

function addListEntry() {
    // checks to make sure there's something to enter and it doesn't start with a space
    if (entry.value.length > 0 && !entry.value.startsWith(' ')) {
        // creates list item and delete button
        let li = document.createElement("li");
        li.innerHTML = `<div class="list-entry" 
            onclick="this.classList.toggle('done')">${entry.value} 
            <button onclick="this.parentNode.remove()">Delete</button></div>`; 
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
