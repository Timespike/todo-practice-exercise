const submitBtn = document.getElementById('submit-button');
const entry = document.getElementById('entry');

function buttonTest() {
    console.log("button clicked");
}

submitBtn.addEventListener('click', buttonTest);