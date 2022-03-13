console.log("Merhaba Kodlama.io");
var dolarDun=9.20;
let dolarBugun=9.30;

{
    dolarDun=10;
    let dolarBugun=11;
}

console.log(dolarDun);
console.log(dolarBugun);

const euroDun=12.25;
//euroDun=11;
//aşagıda hata alırız çünkü const değeri değiştirilemezdir.
//console.log(euroDun);


//js type Safe değildir.
// const ile bir değişken tanımladığımızda ona başka bir değer atayamayız. Sabittir.
//let ile var arasındaki fark da bloklardaki değişkenlerdeki değiimlerde var heryerde değiştirilebilir
//ancak let ise bloklarda farklı bir değişken olarak tutulmakta olduğundan değişimlerde kendi bloğundaki değiştirilebilir sadece.


//Arrayler 
//camelCasing
let konutKredileri1=["12","Emlak Konut Kredisi",["a","b",123]];

let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"];
document.write("<ul>");
konutKredileri.forEach(element => {
    document.write("<li>"+element+"</li>");
});
document.write("</ul>");
console.log("konutKredileri ",konutKredileri);

