const inputfield = document.getElementById('entry');
const submitButton = document.getElementById('submit');

console.log('inputfield');

// Add Items to the list

function buttonTest() {
    alert("button clicked");
}

inputfield.addEventListener('click', addListItem());
submitButton.addEventListener('click', buttonTest());