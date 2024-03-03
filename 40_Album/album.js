"use strict";
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(music_album) {
    //console.log("Artist name is: ",artist_name,"Artist album is: ",album_title);
    return music_album;
}
function three_dictionaries(dictionaries) {
    let album1 = make_album({ artist_name: "Atif Aslam", album_title: "Meri Kahani" });
    console.log(album1);
    let album2 = make_album({ artist_name: "Ali Zafar", album_title: "Total Siyapa" });
    console.log(album2);
    let album3 = make_album({ artist_name: "Rahat fateh Ali Khan", album_title: "Ehd e Wafa" });
    console.log(album3);
    return dictionaries;
}
//console.log(three_dictionaries({album1:"1st album",album2:"2nd album",album3:"3rd album"}));
let newdic = three_dictionaries({ album1: "1st album", album2: "2nd album", album3: "3rd album" });
console.log(newdic);
console.log(make_album({ artist_name: "Nusrat Fateh Ali Khan", album_title: "Devotional songs", NoOfTrack: 2 }));
