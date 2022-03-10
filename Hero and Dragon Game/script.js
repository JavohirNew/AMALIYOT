const prompt = require(`prompt-sync`)();

console.log("AJDAR VA QAHRAMON OYINIGA HUSH KELIBSIZ!");
console.log("Demak: O`yinda qahramonSIZ, va Ajdarni mag`lub qilishinggiz kerak!");
const ajdar = {
    joni: 2000,
    himoya: 120,
    kuch: 150,
    qurol: 0
}
const qahramon = {
    joni: 700,
    himoya: 100,
    kuch: 120,
    qurol: 100,
    qalqon: 100
}
let info = `Ajdar va Qahramonning ayni vaqtdagi  ma\`lumotlari: 
        AJDAR                           QAHRAMON
    joni:    ${ajdar.joni}                    joni:    ${qahramon.joni}
    himoya:  ${ajdar.himoya}                  himoya:  ${qahramon.himoya}
    kuch:    ${ajdar.kuch}                  kuch:    ${qahramon.kuch}
    qurol:   ${ajdar.qurol}                    qurol:   ${qahramon.qurol}
                                  qalqon:  ${qahramon.qalqon}`
console.log(info);
console.log("Harakatni birinchi Qahramon boshlaydi: ");
while(true){
    console.log(`\nQahramonning navbati.  Variantlardan tanlang: 
        1 - hujum.
        2 - himoya.
        3 - hech nima qilmaslik.`);

    let harakat = prompt("Harakat raqami: ");
    let qahramonHimoyasi = false;
    
    if(harakat == 1){
        console.log("1 - hujum");
        let ehtimollilik = Math.floor(Math.random() * 4);
        if(!ehtimollilik == 0){
            ajdar.joni -= ((qahramon.kuch + qahramon.qurol) - ajdar.himoya);
            console.log(`Tegdi...   => ajdarning joni: ${ajdar.joni}`);
            if(ajdar.joni <= 0){
                console.log("SIZ YUTDINGGIZ! :)");
                break;
            }
        }else {
            console.log(`Tegmadi...   => ajdarning joni: ${ajdar.joni}`);
        }
    }else if(harakat == 2){
        qahramonHimoyasi = true;
        console.log("2 - himoya.");
    }else if(harakat == 3){
        qahramonHimoyasi = false;
        console.log("3 - hech nima qilmaslik.");
    }

    console.log("\nAjdarning navbati...");
    let ehtimollilikAjdarHujumi = Math.floor(Math.random() * 2);
    if(!ehtimollilikAjdarHujumi == 0){
        console.log("Hujum...");
        if(qahramonHimoyasi == true){
            let zarar = ((ajdar.kuch + ajdar.qurol) - (qahramon.himoya + qahramon.qalqon));
            if(zarar <= 0) {   zarar = 0;  }
            qahramon.joni -= zarar; 
            console.log(`Qahramon himoyalangan. Ostalnie joni: ${qahramon.joni}`);
            if(qahramon.joni <= 0){
                console.log("YUTQAZDINGGIZ :(");
                break;
            }
        }else {
            qahramon.joni -= (ajdar.kuch + ajdar.qurol) - qahramon.himoya;
            console.log(`Qahramon himoyalanmagan. Ostalnie joni: ${qahramon.joni}`);
            if(qahramon.joni <= 0){
                console.log("YUTQAZDINGGIZ :(");
                break;
            }
        }
    }else {
        console.log("Ajdar uxlayapti...");
    }
}