"use strict";
/**Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes. */
console.log(`before synchronous operation`);
for (let i = 0; i < 30; i++) {
    console.log(`After synchronous operation`);
}
console.log(`before aynchronous function`);
setTimeout(() => {
    console.log(`asynchronous operation completed`);
}, 1000);
console.log(`after asynchronous operation setup`);
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
