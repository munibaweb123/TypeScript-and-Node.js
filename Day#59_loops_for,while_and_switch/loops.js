//The “while” loop
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
//For instance, a shorter way to write while (i != 0) is while (i):
i = 3;
while (i){
    alert (i);
    i--;
}
//Curly braces are not required for a single-line body
i = 3;
while (i) alert(i--);

//The “do…while” loop
// /*do {
//     // loop body
//   } while (condition);
// */
   i = 0;
  do {
    alert( i );
    i++;
  } while (i < 3);
//The “for” loop
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }
  for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  alert(i); // error, no such variable
 i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop

// for (let i = 0; i < 3; i++) {
//   alert(i); // 0, 1, 2
// }
// alert(i); // error, no such variable

// i = 0;

// for (i = 0; i < 3; i++) { // use an existing variable
//   alert(i); // 0, 1, 2
// }

// alert(i); // 3, visible, because declared outside of the loop

//skipping parts
i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}

//we can also remove step part
i = 0;

for (; i < 3;) {
  alert( i++ );
}

//Breaking the loop
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
//Continue to the next iteration
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
for (let i = 2; i <= 10; i++) { //loop for even numbers from 1 to 10
  if (i % 2 == 0) {
    if (i > 5) {
      alert(i);//6 , 8 , 10
    } else {
      continue;
    }
    //alert( i );
  }
}
//(i > 5) ? alert(i) : continue; // continue isn't allowed here}