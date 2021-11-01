function addToCart(productName,quantity) {
    console.log("Sepete Eklendi : " + productName +" Adet : "+quantity)
} //productName="Ahmet" Default değer ataması

addToCart("Elma", 10)
//addToCart("Armut")
//addToCart("Karpuz")

let sayHello=()=>{
console.log("Selam Ahmet")
}
sayHello()

let sayHello1 =function () {
    console.log("Hello Word")
}
sayHello1()
function addToCart2(productName, quantity, unitPrice) {
    
}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 10, 20)
addToCart2("Karpuz", 70, 5)

let product1={productName:"Elma", unitPrice: 5, quantity: 10}
function addToCart3(product) {
    console.log("Ürün: " +product.productName)
    console.log("Ürün Fiyatı: " +product.unitPrice)
    console.log("Ürün Adedi: " +product.quantity)
}

addToCart3(product1)


function addToCart4(ourProdutcs) {
    console.log(ourProdutcs) 
}
let products=[
    {productName:"Elma", unitPrice: 5, quantity: 10},
    {productName:"Armut", unitPrice: 15, quantity: 100},
    {productName:"Karpuz", unitPrice: 2, quantity: 80}
]
addToCart4(products)

//res
function add(...numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }        console.log(total)
}
add(20,30)
add(30,60,80)
add(10,20,30,40,50)

// ... nokta spread=ayrıştırmak için kullanılır.
let numbers=[30,10,50,500,300,600,120]
console.log(Math.max(...numbers))

//distraction
let [icAnadolu, maramara, karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul", "Bursa"],
        ["Trabzon", "Rize"],
    ]
]
//console.log(icAnadolu.name)
// console.log(icAnadolu.population)
// console.log(maramara.name)
// console.log(maramara.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
