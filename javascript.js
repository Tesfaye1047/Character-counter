const textareaEl = document.getElementById
('textarea');
const totalcharEl = document.getElementById
('total-counter');
const remainingcharEl = document.getElementById
('remaining-counter');
textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
    popUp();
})
updateCounter();
function updateCounter() {
    totalcharEl.innerText = textareaEl.value.length
    remainingcharEl.innerText = textareaEl.getAttribute
    ("maxlength") - totalcharEl.innerText;
}
function popUp() {
    if(totalcharEl.innerText == 50) {
        alert("Maximum length reached!");
    }
}


