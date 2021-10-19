console.log("Merhaba Kodlama.io");

let dolarBugun = 9.3;

let dolarDun = 9.2;
dolarDun = "9.20";
{
  let dolarDun = 9.1;
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11

console.log(euroDun);

let konutKredileri = [
  "Konut kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
  "Özel Konut Kredisi",
];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");

{
  /* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */
}

console.log(konutKredileri);
