const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');
const list = document.querySelector("ul");

<<<<<<< HEAD
// function isEnter(e) {
//     let key = e.keyCode || e.which;
//     if (key === 13) {
//         addListEntry;
        
//     }
// }
=======
function isEnter(e) {
    let key = e.keyCode || e.which;
    if (key === 13) {
        entry.preventDefault;
        addListEntry;
    }
    
}
>>>>>>> f2dc4c57e3825e231645d4bf0f6878f82d74a2ad

function addListEntry() {
    if (entry.value.length > 0 && !entry.value.startsWith(' ')) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(entry.value));
        list.appendChild(li);
        entry.value = "";
    }
}

submitBtn.addEventListener('click', addListEntry);
<<<<<<< HEAD
entry.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
    addListEntry;
    }
});
=======
// try adding the logic to the event listener as an arrow function?
entry.addEventListener('keydown', isEnter);
>>>>>>> f2dc4c57e3825e231645d4bf0f6878f82d74a2ad
