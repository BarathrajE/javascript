/*==============let================*/

/*--------it`s possible---------*/

/*
let name="barath";
name="change";
console.log(name); //change


--------------- it`s not possible------------

let name="barath";
let name="change"

console.log(name);

//in this SyntaxError



/*===========const=================*/

/*--------it`s not possible---------*/
// const name="barath";
// const name="change"
// console.log(name); syntaxError


/*--------it`s possible---------*/
/*
const name="barath";
const fname=name;
console.log(fname); //change

*/
// strings
//let a='6';
//let b="3";
//console.log(a / b ); // 3, strings are converted to numbers

// let age = Number("an arbitrary string instead of a number");

// console.log(age); // NaN, conversion failed

// Value	                         Becomes…
// 0, null,  undefined, NaN, ""	     false
// any other value	                 true

//================String concatenation ===============
//console.log('1' + 2 + 2); // "122"
//console.log(2 + 2 + '1' ); // "41"

//=============binary plus concatenates strings============
//let apples = "2";
//let oranges = "3";
//
//console.log( apples + oranges ); // "23", the binary plus concatenates strings

// let n = 2;
// n = n + 5;
// n = n * 2;

// console.log(n); //  14


// let a = (1 + 2, 3 + 4);

// console.log(a);// 7 (the result of 3 + 4)


// let b=(1,3+1)
// console.log(b)
// console.log( 2 > 1 );  // true (correct)
// console.log( 2 == 1 ); // false (wrong)
// console.log( 2 != 2 ); // true (correct)

// let a=1;
// let message=(a<3)? "hey baby":
// (a<18)?"hello":
// (a<100)?"hi":"what is your age";
// console.log(message);


//==========|| operator first check truthy=============
//==========?? operator first check defined values==========

// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

// let i=6
// while(i){
//     console.log(i);
//     i--

// }//
//
//let i=3;
//do{
//    console.log(i)
//    i++
//}while(i<10);
//

// for( let i=0;i<=10;i++){
//     console.log(i);
// }

// for(i=1;i<=10;i++){
//     if(i % 2!=0){
//     console.log(i);
//     }
    
// }
// let i=0;
// while(i<3){
//     console.log(i)
//     i++
// }

//==============FUNCTION===========

//=========local variable==========
// message()
// function message(){
//     let i ="hey hello"
//     console.log(i);
// }
// message()
// message()
//===========outer variable===========

// let name="barath" 
// function message(){
//     let fname="hello " +name
//     console.log(fname);
// }
// message()
//=========Return==============

// function sum(a,b){
//     return a + b;
// }
// console.log( sum(2,3));


// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     console.log('Access granted');
//   } else {
//     console.log('Access denied');
//   }

// function two(){
//     console.log("b");
// }
// function three(){
//     console.log("c");
// }
// function a() {
//     return console.log("a") +two() + three()
    
// }
// a()

// let a = () => {
//     console.log("a")
// }
// let b = () => {
//     console.log("b");
// }
// let c = () => {
//      return console.log("abc") + b() + a()
// }

// c(); 

