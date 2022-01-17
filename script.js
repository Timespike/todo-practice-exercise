const inputfield = document.getElementById('entry');
const pushMe = document.getElementById('submit');

console.log('inputfield');

// Add Items to the list

function buttonTest() {
    alert("button clicked");
    console.log("button clicked");
}

inputfield.addEventListener('click', addListItem());
pushMe.addEventListener('click', buttonTest());