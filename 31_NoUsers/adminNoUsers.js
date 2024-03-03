"use strict";
let usernames = ["Admin", "Sir Danyal Nigori", "Sir Kamran Khan Tessori", "Sir Hamza", "Sir Zia Khan"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(" Hello " + usernames[i] + ", thank you for logging in again.");
    }
}
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "") {
        console.log("We need to find some users!?");
    }
    else {
        usernames = [];
    }
    console.log("We need to find some users!?");
}
