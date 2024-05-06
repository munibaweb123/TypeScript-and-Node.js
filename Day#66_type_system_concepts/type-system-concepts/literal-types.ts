/*****************
 * LITERAL TYPES *
 *****************/

let direction: "left" | "right" | "up" | "down";

function setColor(color:"red"|"green"|"blue"){
    return color;
}
direction="down";
console.log(direction);
console.log(setColor("blue"))