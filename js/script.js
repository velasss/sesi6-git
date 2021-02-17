console.log('Hello, world!')

// STORE "phi" with 3.14
// STORE "R" with any value
// STORE "Luas" without any value
// STORE "Keliling" without any value

// INPUT "Luas" with "const phi" * "R" * "R"
// INPUT "Keliling" with 2 * "const phi" * "R"

// PRINT "Luas"
// PRINT "Keliling"

// cara penulisan variable: var, let, const
// var: variable yg dideklarasikan dalam sebuah blok akan dianggap sebagai variable sendiri
// const: variable constant (valuenya tidak dapat diubah)

// Data Type:
// Number: tipe data berupa angka
// String: tipe data berupa satu / beberapa karakter
// Boolean: tipe data true / false

var numb = 5;
var str = "Hello World";
var boolean = false;

// Operator Aritmatika
// Tambah (+)
// Kurang (-)
// Kali (*)
// Bagi (/)
// Modulus (%) <- sisa hasil Bagi

console.log(5+5);
console.log(5-2);
console.log(5*5);
console.log(5/2);
console.log(5%2);

console.log("Hello" + "World");
console.log("Hell0" - "World");// NaN
console.log("Hello" * "World");// NaN
console.log("Hello" / true);// NaN

// Comparison Operator
// Equal operator (==)
// -> hanya membandingkan nilai
console.log("Equal Operator");
console.log(5 == 5);
console.log(5 == 4);
console.log("Not Equal Operator");
console.log(5 != 5);
console.log(5 != 4);

// Strict Equal operator (===)
// -> membandingkan nilai dan tipe data
console.log("Strict Equal Operator");
console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== 5);
console.log(5 !== 4);

// less than (<) / greater than (>)
console.log("< or >");
console.log(5 > 7);
console.log(5 < 7);
console.log(5 <= 7);

// Conditional operator
// or (||)
console.log("or (||)");
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(true || false || false || true);

// and (&&)
console.log("and (&&)");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true && false && false && true);

//Conditional
var num = 4;

if (num == 3) {
  console.log ("num adalah angka 3");
} else if (num == 5) {
  console.log("num adalah angka 5");
} else {
  console.log("num bukan angka 3 atau 5");

} 

// switch case
switch(num) {
  case 2: {
    console.log("num adalah angka 2");
    break;
  }
  case 3: {
    console.log("num adalah angka 3");
    break;
  }
  case 4:{
    console.log("num adalah angka 4");
    break;
  }
  default: {
    console.log("num bukan angka 2 / 3 / 4");
    break;
  }
}


// const phi = 3.14;
// var r = 4;
// var luas;
// var keliling;

// luas = phi * r * r;
// keliling = 2 * phi * r

// console.log (luas);
// console.log (keliling);

// var a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

// let b = 10;
// {
//     let b = 20;
//     console.log(b);
// }
// console.log(b);

