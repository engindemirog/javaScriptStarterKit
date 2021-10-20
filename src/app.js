//console.log("Merhaba Kodlama.io")

let dolarDun = 9.20

let dolarBugun = 9.30


{
    let dolarDun=9.10
}

//console.log(dolarDun)

const euroDun=11.2
//euroDun =11 // Eklenemiyor hata verir const da
 
//console.log(euroDun)

//array

let konutKrediler = ["Konut Kredisi","Emlak konut Kredisi","Kamu Konut Kredisi"]

//let users = getUsersFromApi();
for (let i = 0; i < konutKrediler.length; i++) 
{
    //console.log( konutKrediler[i])
    
}
//console.log(konutKrediler)


/////
let student = {id:1, name:"Osman"}
//console.log(student);

function save(ogrenci) {
    //console.log(ogrenci)
}
save();//Boş gönderdiginde undefined hatası verir
save(student);



let student2 = {id:1, name:"Osman"}
//console.log(student);

function save2(ogrenci2,puan=50) {
    //console.log(ogrenci2.name + " : " +puan)
}
save2(student,100);
save2(student);


let students=["Osman","Ömer","Eda","Ayşe"]
let students2=[student,{id:2,name:"halit"},"Bayburt",{city:"İstanbul"}]
//console.log(students2);

//rest
//params
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts) 
//showProducts(10,["Elma","Armut","Karpuz"])

//spread
let points = [1,2,3,4,52,45,89,99]
console.log(...points)
console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H")

//Destructuring

let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryhigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function someFunction([Small1],number) {
    console.log(Small1)
}
someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category.name)

let{id,name}=category
console.log(id)
console.log(name)

