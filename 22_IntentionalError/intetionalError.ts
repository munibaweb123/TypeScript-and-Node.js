//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var mytransport=["green bus","red line","honda civic"];
var mycar;//no value at any index
mycar=[];
var mylistcomment="I would like to own a "
for(var i=0;i<mytransport.length;i++){
    console.log(mylistcomment+mytransport[i])
}
console.log(mytransport);
console.log(mycar[0])//there is no value on 0 index