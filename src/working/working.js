//1. soru
//----------------------------------------------------
function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 1) {
      console.log("En küçük asal sayı 2 dir.Girilen sayı : " + numbers[i]);
      i += 1;
    }
    let count = 0;

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        count++;
      }
    }
    if (count == 0) {
      console.log(numbers[i] + " asal sayıdır");
    } else {
      console.log(numbers[i] + " asal sayı degildir");
    }
  }
}

findPrime(1, 35, 25, 39, 45, 52, 23, 3, 5, 7);

//2.soru
//----------------------------------------------------

function friendNumbers(number1, number2) {
  let top1 = 0;
  let top2 = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      top1 += i;
    }
  }
  for (let i = 1; i < number2; i++) {
    if (number2 % i == 0) {
      top2 += i;
    }
  }
  if (number1 == top2 && number2 == top1) {
    console.log(`${number1} ve ${number2} arkadaş sayılardır`);
  } else console.log(number1 + " ve" + number2 + " arkadaş sayı değildir");
}
friendNumbers(220, 284);
friendNumbers(220, 248);

//3.soru
//--------------------------------------------
function perfectNumber() {
  let perfectList = [];
  for (let i = 1; i <= 1000; i++) {
    let count = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        count = count + j;
      }
    }
    if (count === i) {
      perfectList.push(i);
    }
  }
  console.log(perfectList);
}
perfectNumber();

//4.soru
//---------------------------------------------
function findPrime2() {
  let list = [];
  for (let i = 2; i < 1000; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 0) {
      list.push(i);
    }
  }
  console.log("1000'kadar asal sayılar " + list);
}
findPrime2();
