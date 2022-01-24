const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');
const list = document.querySelector("ul");

function isEnter(e) {
    if (e.which === 13) {
        buttonTest()
    } 
}

function buttonTest() {
    if (entry.value.length > 0 && !entry.value.startsWith(' ')) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(entry.value));
        list.appendChild(li);
        entry.value = "";
    }
}

submitBtn.addEventListener('click', buttonTest);
entry.addEventListener('keypress', isEnter(e));