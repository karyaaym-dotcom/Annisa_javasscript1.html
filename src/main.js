//JavaScript --> Programing Language
/*
1. input & output
2. variabel and data type
3. condition (if, else)
4. looping (pengulangan)
5. function
*/

//output
//1. using console.log()
console.log("Hello World");
console.log("my name nisa");
console.log(4+9);

//2.alert()
alert("welcome to my channel");

//3. using document.write()

//4. using innerHTML
//document.getElementByID("id_name").innerHTML="text";
document.getElementById("first").innerHTML=("My Name Is Nisa");

//variable --> to store data 

//let
let name= "annisa";
console.log(name);
let a = 4;
let b = 3;
let c = a+b;
console.log(a+b);
console.log(c);
console.log(c+d);
let adsress= "solo";
console.log("my name is" + name +"Im from" + address);

let_oke1 = 8;
let OKE =7;
console.log(oke)
console.log(OKE) 

const school = "SMA ABBS SURAKARTA"

console.log(school);

*/
penjumlahan (+)
pengurangan (-)
perkalian  (*)
pembagian (/)
perpangkatan(**)
modulus (%)
*/
let number1 == 100;
let number2 = 250;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number**)

//calculator BMI
let tb=155;
let bb==60;

let bmi = bb/(tb*tb)*10000

console.log(bmi);

//variable = let, var, const
let angka = 5;
var angka = 6;
console.log(angka);

var angka1 = 5;
angka1 = 6;
console.log(angka1);

const angka2 = 5;
//angka2 = 6; (tidak boleh) 
console.log(angka2)

/*Data Type
1. String = Character --> using ""/''
2. number (integer , float)
     -integer = Bilangan Bulat
     -flout = Bilangan Pecahan
3. Boolean = true, false
*/
let data = "SMA ABBS Surakarta"; // string
let data1 = "100"; //string
let data3 = 50; //integer
let data4 = 25.255; //float
let data5 = false; //boolean

/*Comparison Operator ---> the output of comparison operator are true or false.
- equal (==)
-not equal (!=)
-greater than (>)
-greater than or equal (>=)
-less than (<)
-less than or equal (<=)
*/
//example

let  x = 5;
console.log(x == 5); //true
console.log(x !=5) //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/*
logical operators
- and (&&)
- or (||)
- not (!)
*/

//condition

/*1. if (1 condition)
     if (condition){
         action;
        }
*/

let time  = 5;
if (time1 <=6){
    console.log("good morning");
}
else{
    console.log("good bye")
}

/*kondisi
1. jika hari ini hujan, maka membawa payung
2. jika hari ini tidak hujan, maka tidak membawa payung.
*/
let cuaca = "hujan";
if (cuaca == "hujan"){
    console.log("bawa payung");
}
else{
    console.log("tidak bawa payung");
}

//jika nilai lebih dari 75, maka lulus
//jika nilai kurang dari 75, maka tidak lulus

let nilai = 90;
console.log ("nilai = ", nilai);
if(nilai > 75){
    console.log("lulus");
}
else{
    console.log("tidak lulus");
}

//jika bilangannya itu genap, maka genap
//jika bilangganya ganjil, maka ganjil

let bilangan = 80;
if(bilangan%2 == 0){
    console.log(bilanggan, + "adalah bilangan genap");
}
else{
    console.log(bilanggan, + "adalah bilanggan ganjil");
}

/*3. more than 2 conditions
    if(condition 1){
       action 1;
    }
    else if (condition 2){
        action 2;
    }
    else{
        action 3;
    }
*/

let TB=155;
let BB==60;

let BMI = BB/(TB*TB)*10000;
console.log("Tinggi Badan = ", "cm");
console.log("Berat Badan = ", "kg");
console.log("BMI = ", BMI);
//jika bmi < 18.5 , maka underweight (if)
//jika bmi 18.5 - 24.9, maka normal weight (else if)
//jika bmi 25.0 - 29.9, maka overweight (else if)
//jika bmi >= 30.0 maka obese (else)

if(BMI < 18.5){
    console.log("Underweight");
}
else if (BMI >= 18.5 && BMI <=24.9){
    console.log ("normal weight");
}
else if (BMI >= 25.0 && BMI <=29.9){
    console.log ("overweight");
}
else{
    console.log("Obese");
}