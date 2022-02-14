const whiteBtn = document.querySelector(".location__white-btn");
const blueBtn = document.querySelector(".location__blue-btn");

const article = document.querySelector("article");

blueBtn.onclick = () => {
    if(article.style.marginLeft == "" || article.style.marginLeft == 0){
        article.style.animation = "none"
        article.style.marginLeft = "-100%"
    }else if(article.style.marginLeft == "-100%"){
        article.style.animation = "none"
        article.style.marginLeft = "-200%"
    }else if(article.style.marginLeft == "-200%"){
        article.style.animation = "none"
        article.style.marginLeft = "";
    }else {
        console.log(article.style.marginLeft);
    }
}
whiteBtn.onclick = () => {
    if(article.style.marginLeft == "-100%"){
        article.style.marginLeft = ""
    }else if(article.style.marginLeft == "-200%"){
        article.style.marginLeft = "-100%"
    }else {
        console.log(article.style.marginLeft);
    }
}