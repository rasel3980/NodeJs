const firstName = 'Md Rasel';
const lastName = 'Ahammed';
const fullName = firstName+lastName;
const age = 23;
const person ={
    name:'Rasel',
    age:23,
    gender: 'Male'
}

const displayName = ()=>{
    console.log("Rasel Mia");
}


// single by single function exports

// exports.firstName = firstName;
// exports.lastName = lastName;
// exports.fullName = fullName;
// exports.age = age;
// exports.person = person;
// exports.displayName = displayName;


// multi function exports
module.exports = {
    firstName,
    lastName,
    fullName,
    person,
    age,
    displayName,
}