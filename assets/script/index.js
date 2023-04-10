//выбираем элемент у которого ID начинается с "fio"
const nameElement = document.getElementById("fio");
//выбираем элемент с ID "fio-result"
const fioResultElement = document.getElementById("fio-result");
//выбираем элемент с ID"date"
const date = document.getElementById("date");
//выбираем элемент с ID  "comments"
const commentsElement = document.getElementById("comments");
//выбираем элемент с ID "comments-result"
const commentsResultElement = document.getElementById("comments-result");
//выбираем элементы с классом "container-img"
const containerImg = document.querySelectorAll("container-img");
//выбираем элемент с ID "imageResult"
const imageElement = document.getElementById("imageResult");
//выбираем элемент с ID "imageResult"
const button = document.getElementById("button");

// let commentChecked = () => {
//     let checkSpam = comments.replace(/\b(viagra|xxx)\b/gmi);
//     console.log(checkSpam);
// }


// при клике на кнопку ....
button.addEventListener('click', () => {
    const name = nameElement.value;
    // console.log(name); -проверка в консоли 
    let nameElementChaked = name.trim();
    nameElementChaked = nameElementChaked.toLowerCase(); //вывод имени 
    // nameElementChaked = nameElementChaked[0].toUpperCase() + nameElementChaked.slice(1); //почему-то не отрабатывается комментарий, когда стоит toUpperCase ,поэтому закоментировала, нужноо разобраться
    fioResultElement.value = nameElementChaked; //
    let comments = commentsElement.value;
    const userImage = date.value;
    document.querySelector('#img').src = userImage; //вывод ссылки на картинку
    let commentChecked = () => {
        comments = comments.replaceAll(/\b(viagra|xxx)\b/gmi, "***"); // замена в комментарии viagra или xxx на "***"
        return comments;
    }
    commentChecked();
    commentsResultElement.value = comments;
});

