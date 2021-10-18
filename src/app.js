console.log("Merhaba kodlama.io")
    //güncel durumda var yerine let kullanılır.
    //const sabit demektir ve sıklıkla kllanılan veri tiplerinden

//let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun
}
console.log(dolarDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredileri", "Emlak Konut kredileri", "Kamu Konut kredileri"]

//json formatında api ler çekmek için kullanılır.(çakma json dataları için:)
​ //(https://jsonplaceholder.typicode.com/)
//let users = getUsersFramApi
//console.log(konutKredileri)

//const olarak verdiğin bir değişkene tekrar atama yapamazsın
//hata verecektir.
//const euroDun = 11.2
//euroDun = 11

//console.log(euroDun)

console.log("<ul>")
for (let i = 0; i < 3; i++) {
    console.log("<li>")
}
console.log("</ul>")