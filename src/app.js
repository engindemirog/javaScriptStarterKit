console.log('Hello world')

let dolarDun = 9.20

let dolarBugun = 9.30

const euroDun = 11.2  // read-only

console.log(dolarDun);

//array
//camelCasing

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")    
}
console.log("</ul>");