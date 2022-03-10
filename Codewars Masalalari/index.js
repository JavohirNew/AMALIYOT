"use strict";
// let massiv = [-1, 0, 3, 4, 25, 26, 9, 50, 100, 85];
// for(let i=0; i<massiv.length; i++){
//     console.log(`${massiv[i]} => ${Number.isInteger(Math.sqrt(massiv[i]))}`);    
// }
// 2-masala
// let massiv = [-1, 0, 3, 4, -25, 26, 9, -50, 100, 85];
// let negativeMassive:number[] = [];
// for(let i=0; i<massiv.length; i++){
//     if(massiv[i] == 0){
//         negativeMassive.push(massiv[i]);
//     }else{
//         negativeMassive.push(-massiv[i]);
//     }
// }
// console.log(massiv);
// console.log(negativeMassive);
// 3-masala
// let n = 8468971;
// let stringN = n.toString();
// let arr:number[] = [];
// for(let i=0; i< stringN.length; i++){
//     arr.push(+stringN.charAt(i))
// }
// console.log(n + "\n"+arr);
// 4-masala
// function getSenteredLetterInWord (word:string):string|undefined{
//     if(word == ""){
//         console.log("Bo`sh qiymat kiritilgan!")
//     }else if(word.length == 1){
//         return word;
//     }else if(word.length%2 == 0){
//         return word.charAt((word.length/2)-1) + word.charAt((word.length/2));
//     }else if(word.length%2 == 1){
//         return word.charAt(Math.ceil((word.length/2)-1));
//     }
// }
// let soz = "test";
// console.log(`${soz} => ${getSenteredLetterInWord(soz)}`);
// 5-masala
let arr1 = [66, 91], x1 = 6, arr2 = ["what", "a", "great", "cata"], x2 = "cat";
if (arr1.includes(x1)) {
    console.log("'arr1' da x1 ga teng qiymat bor.");
}
else {
    console.log("'arr1' da x1 ga teng qiymat yo`q.");
}
if (arr2.includes(x2)) {
    console.log("'arr2' da x2 ga teng qiymat bor.");
}
else {
    console.log("'arr2' da x2 ga teng qiymat yo`q.");
}
