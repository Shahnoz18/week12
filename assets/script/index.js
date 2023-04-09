const nameElement = document.getElementById("fio");
const fioResultElement = document.getElementById("fio-result");
const date = document.getElementById("date");
const commentsElement = document.getElementById("comments");
const commentsResultElement = document.getElementById("comments-result");
const imageElement = document.getElementById("imageResult");
const button = document.getElementById("button");

// let commentChecked = () => {
//     let checkSpam = comments.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
//     console.log(checkSpam);
// }

button.addEventListener('click', () => {
    const name = nameElement.value;
    // console.log(name); -проверка в консоли 
    fioResultElement.value = name;
    const comments = commentsElement.value;
    commentsResultElement.value = comments;

})

// let nameElementChaked = nameElement.trim(); //проверка на пробелы

