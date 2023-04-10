const nameElement = document.getElementById("fio");
const fioResultElement = document.getElementById("fio-result");
const date = document.getElementById("date");
const commentsElement = document.getElementById("comments");
const commentsResultElement = document.getElementById("comments-result");
const containerImg = document.querySelectorAll("container-img");
const imageElement = document.getElementById("imageResult");
const button = document.getElementById("button");

// let commentChecked = () => {
//     let checkSpam = comments.replace(/\b(viagra|xxx)\b/gmi);
//     console.log(checkSpam);
// }

button.addEventListener('click', () => {
    const name = nameElement.value;
    // console.log(name); -проверка в консоли 
    let nameElementChaked = name.trim();
    nameElementChaked = nameElementChaked.toLowerCase();
    // nameElementChaked = nameElementChaked[0].toUpperCase() + nameElementChaked.slice(1);
    fioResultElement.value = nameElementChaked;
    let comments = commentsElement.value;
    const userImage = date.value;
    document.querySelector('#img').src = userImage;
    let commentChecked = () => {
        comments = comments.replaceAll(/\b(viagra|xxx)\b/gmi, "***");
        return comments;
    }
    commentChecked();
    commentsResultElement.value = comments;
});

