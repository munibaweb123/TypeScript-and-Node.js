// The result is Boolean
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

// String comparison
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
alert('a'>'A');// true, according to ASCII value i.e:97 > 65
alert('B'>'b');// false, 66 is not greater than 98
// Comparison of different types!
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
let a=0;
alert(Boolean(a)); //false
let b="0";
alert(Boolean(b)); //true\=][/-=p0[lert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
// An incomparable undefined
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

