const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');
const list = document.querySelector("ul");

function buttonTest() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(entry.value));
    list.appendChild(li, <button>Delete</button>);
}

submitBtn.addEventListener('click', buttonTest);