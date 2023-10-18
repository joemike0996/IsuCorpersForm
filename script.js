window.addEventListener("load", resizer);
window.addEventListener("resize", resizer);

function resizer() {
  let headerHt = document.querySelector('header').getBoundingClientRect().height;
  let footerHt = document.querySelector('footer').getBoundingClientRect().height;
  screenHt = window.innerHeight;
  docHt = document.body.offsetHeight;
  let mainHtScrn = screenHt - headerHt - footerHt;

  if (docHt < screenHt) {
    document.querySelector('main').style.height = mainHtScrn+"px";
  } else {
    document.querySelector('main').style.height = 'auto';
  }
}

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