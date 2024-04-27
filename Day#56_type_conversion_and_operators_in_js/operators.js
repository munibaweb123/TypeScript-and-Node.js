let x = 1;
//unary operator
x = -x;
alert( x ); // -1, unary negation was applied
let y = 3;
alert( y - x ); // 3 - -1 => 3+1 => 4, binary minus subtracts values

// Remainder %
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// Exponentiation **
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

//String concatenation with binary +
let s = "my" + "string";
alert(s); // mystring
alert( '1' + 2 ); // "12" if anyone is string other is convertes into a string
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14" left to right
//string concatenation does not work on '-' as well as other arithmetic operators except '+'
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
// No effect on numbers
 x = 1;
alert( +x ); // 1

 y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
alert( Number(apples) + Number(oranges) ); // 5
x = 2 * 2 + 1;//multiply has higher precedence than add

alert( x ); // 5
//Assignment = returns a value '=' has lowest priority i.e 2
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16
let counter = 1;
 a = ++counter; // (*)

alert(a); // 2
 counter = 1;
 a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
 counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value