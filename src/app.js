/* console.log("Merhaba Kodlama.io")
let dolarDun=9.20
let dolarBugun=9.30

let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")

}
console.log("</ul>")
console.log(konutKredileri)
console.log("Ahmet ÖZER") */
let student={id:1, name:"Ahmet"}
function save(ogrenci, puan=10) {
    console.log(ogrenci.name + ":"+puan)
}
//save(student);

let students=["Ahmet", "Mehmet", "Tuna"]

//console.log(students)

let students2=[student,{id:2,name:"Nehir"},"Ahmet", "Mehmet", "Tuna"]
//console.log(students2)

//rest = geriye kalan parametreler (params, varArgs)
let showProducts=function (id,...products) 
{
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"]) //rest parametre


//Spread= ayrıştırmak (spread=...)
let points=[1,2,3,50,60,15,30]
console.log(...points)
console.log(Math.max(...points))
console.log("ABC","D",..."EFG","H")

//Destructuring = Parçalara ayırmak. Array değerlerini değişkenlere atamak için kullanır.
let populations=[10000,20000,30000]
let [small,medium, high]=populations
console.log(small)
console.log(medium)
console.log(high)
