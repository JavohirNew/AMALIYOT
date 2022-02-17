let alert = document.querySelector(".alert")
let nameEdit = document.querySelector("#name")
let surNameEdit = document.querySelector("#surname")
let ageEdit = document.querySelector("#age")
let btn = document.querySelector("button")
let nameP = document.querySelector(".nameP")
let surnameP = document.querySelector(".surnameP")
let ageP = document.querySelector(".ageP")
let addedCards = document.querySelector(".addedCards")


btn.onclick = () => {
    console.log("ishladi");
    let name = nameEdit.value;
    let surName = surNameEdit.value;
    let age = ageEdit.value;
    // barcha inputga malumot kiritilganmi?
    if (name !== "" && surName !== "" && age !== "") {
        // name qiymati 2dan katta va 32dan kichikmi?
        if (name.length > 2 && name.length < 32) {
            nameP.classList.add("d-none");
            // surName qiymati 2dan katta va 32dan kichikmi?
            if (surName.length > 2 && surName.length < 32) {
                nameP.classList.add("d-none");
                surnameP.classList.add("d-none");
                // age qiymati kattami 12dan?
                if (age > 12) {
                    // Validatsiya qanoatlantirilganda shu skop ichi bajariladi.
                    nameP.classList.add("d-none");
                    surnameP.classList.add("d-none");
                    ageP.classList.add("d-none");

                    let card = document.createElement('div')
                    card.classList.add('card')

                    let cardHeader = document.createElement('div')
                    cardHeader.classList.add('card-header')
                    cardHeader.innerText = `Name: ${name}`

                    let cardBody = document.createElement('div')
                    cardBody.classList.add('card-body')
                    cardBody.innerText = `Surname: ${surName} \nAge: ${age}`

                    let cardFooter = document.createElement('div')
                    cardFooter.classList.add('card-footer', 'text-center')
                    let cardFooterBtn = document.createElement('button')
                    cardFooterBtn.classList.add('btn', 'btn-danger')
                    cardFooterBtn.innerText = "Remove"               
                    cardFooter.appendChild(cardFooterBtn)

                    card.appendChild(cardHeader)
                    card.appendChild(cardBody)
                    card.appendChild(cardFooter)
                    addedCards.appendChild(card)

                    cardFooterBtn.onclick = () => {
                        addedCards.removeChild(card)
                    }
                } else {
                    ageP.classList.remove("d-none");
                }
            } else {
                surnameP.classList.remove("d-none");
            }
        } else {
            nameP.classList.remove("d-none");
        }
    } else {
        alert.classList.remove("d-none");
    }
}