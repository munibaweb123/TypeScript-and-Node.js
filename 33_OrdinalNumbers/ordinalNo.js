"use strict";
let ordinal_Num = ["1st", "5th", "6th", "7th", "8th", "9th", "2nd", "3rd", "4th"];
for (let i = 0; i < ordinal_Num.length; i++) {
    if (ordinal_Num.sort()) {
        console.log("\n" + ordinal_Num[i]);
    }
    else {
        ordinal_Num.sort();
    }
}
