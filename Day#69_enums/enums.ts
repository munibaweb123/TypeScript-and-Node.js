/*********
 * ENUMS *
 *********/

enum Days{
Sunday,
Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,

}

const today = Days.Friday;
console.log(`Today is ${Days[today]}`);