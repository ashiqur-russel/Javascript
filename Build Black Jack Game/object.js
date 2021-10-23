
// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

// Create a person object that contains some key

let person = {
    name:"Hassan",
    age : 35,
    country : "Bangladesh"
}
// create function that uses the person to set values
function logData(){
    console.log(person.name +" is " +person.age+" years old and lives in "+person.country);
}

logData();