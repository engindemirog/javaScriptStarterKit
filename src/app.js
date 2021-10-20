console.log("Merhaba kodlama.io")
console.log("Hello World")

//Hayatımıza 'let' ile devam ediyoruz.
//Artık 'var' kullanmak yok
let dolarDun = 9.2
let dolarBugun = 9.30
dolarDun = "Ankara"
//JS is not type safe
{
    let dolarDun = 9.10
}

console.log(dolarDun)

//const ile sadece sabitlerimizi tutabiliriz.
const euroDun = 11
console.log(euroDun)

//array
//camelCase
let konutKredileri = ["Konut kredisi", "Emlak konut kredisi","Kamu konut kredisi"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    const element = konutKredileri[index];
    console.log("   <li>")
    console.log("       ",element)
    console.log("   </li>")
}
console.log("</ul>")