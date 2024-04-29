// Nullish Coalescing Operator '??':
/**The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b. */

//result = (a !== null && a !== undefined) ? a : b;
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
 user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)
//We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
// Comparison with Or '||'
//The OR || operator can be used in the same way as ??,
// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder