//32- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_Users=["rumaisa","Bisma","Komal","Sania","Mahnoor"];
let new_Users=["Rumaisa","Dua","Hermain","Saneela","komal"];
for(let i=0;i<current_Users.length;i++){
console.log(current_Users[i])
}

new_Users.forEach(new_Users=>{
    if(current_Users.some(current_Users=>current_Users.toLowerCase()===new_Users.toLowerCase())){
console.log(`${new_Users} will need to enter new user name.`);
    }
    else{
        console.log(`${new_Users} is available.`);
    }
});