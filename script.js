let formModalBox = document.getElementById('formModalBox');
let commentModalBox = document.getElementById('commentModalBox');
let closeBtns = document.getElementsByClassName('closeBtn');
function goToForm() {
formModalBox.style.display = 'block';
}
function goToComment() {
commentModalBox.style.display = 'block';
}
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function goToHome() {
    formModalBox.style.display = 'none';
    commentModalBox.style.display = 'none';
    }
}