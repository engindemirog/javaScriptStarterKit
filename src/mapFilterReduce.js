let cart=[
    {id:1, productName:"Telefon",quantitiy:10, unitPrice:3500},
    {id:2, productName:"Bardak",quantitiy:100, unitPrice:50},
    {id:3, productName:"Kalem",quantitiy:50, unitPrice:35},
    {id:4, productName:"Kitap",quantitiy:20, unitPrice:500},
    {id:5, productName:"Televizyon",quantitiy:10, unitPrice:6500},
    {id:6, productName:"Bilgisayar",quantitiy:5, unitPrice:13500},
]
console.log("<ul>")
cart.map(product=>
    {
        console.log("<li>"+product.productName+":"+product.unitPrice*product.quantitiy+"</li>")
    })
console.log("</ul>")

//acc = acümülatör
let total = cart.reduce((acc,product)=>acc+product.unitPrice * product.quantitiy,0)
console.log(total)

let quantityOver2=cart.filter(product=>product.quantitiy>15)
console.log(quantityOver2)

// cart.map(product=>console.log(product.productName))

// function addToCart(sepet) {
//     sepet.push({id:7, productName:"Monitör",quantitiy:2, unitPrice:1500})
// }

// addToCart(cart)
// console.log(cart)

// let sayi=10

// function sayiToplam(number) {
//     number +=1
// }
// sayiToplam(sayi)
// console.log(sayi)