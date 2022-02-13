const whiteBtn = document.querySelector(".location__white-btn");
const blueBtn = document.querySelector(".location__blue-btn");

const article = document.querySelector("article");

blueBtn.onclick = () => {
    if(article.style.marginLeft ==0){
        article.style.marginLeft = "-100%";
    }else {
        alert("xato");
    }
}