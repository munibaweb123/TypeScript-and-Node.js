"use strict";
let ordinal_Num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinal_Num.forEach(ordinal_Num => {
    let suffix = 'th';
    if (ordinal_Num == 1) {
        suffix = "st";
    }
    else if (ordinal_Num == 2) {
        suffix = "nd";
    }
    else if (ordinal_Num == 3) {
        suffix = "rd";
    }
    console.log(`${ordinal_Num}${suffix}`);
});
