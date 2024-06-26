/**Question 147: Explain how to handle errors in a callback pattern.

Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution. */

// Function that uses a callback pattern, including error handling
function fetchData(
    callback:(error:Error |null,data?:string)=>void
):void{
    // Simulating an error condition
    const error=new Error("failed to fetch data");
    const data = "Some data";
// Simulate fetching data with a chance of error
    if(Math.random()>0.5){
        callback(null,data); // No error, data is fetched successfully
    }
    else{
        callback(error);  // Passes error to the callback
    }
}
fetchData((error,data)=>{
    if(error){
        console.log(error.message); // Handles the error 
    }
    else{
        console.log(data); // process the data
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
