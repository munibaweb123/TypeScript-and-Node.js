/*Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information. */

let developerSkills={
    languages:["HTML","CSS","JavaScript","Typescript","Python","Typescript","C","C++","C#","Java"],
    framework:[".Net","Angular","Gradle","React","Vue"],
    tools:["Git","webpack","Docker"]

}
let {languages,framework,tools}=developerSkills;
console.log(`The specific skill set developer need at a time for web development:\n`)
console.log(`Language: ${languages[0]} Framework: ${framework[0]} tool: ${tools[0]}`)