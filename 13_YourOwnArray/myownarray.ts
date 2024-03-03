// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var mytransport=["green bus","red line","honda civic"];
var mylistcomment="I would like to own a "
for(var i=0;i<mytransport.length;i++){
    console.log(mylistcomment+mytransport[i])
}