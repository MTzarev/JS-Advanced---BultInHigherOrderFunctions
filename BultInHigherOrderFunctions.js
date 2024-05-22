users = [ {
    name: `Gosho`, 
    age: 25
}, 
{
    name: `Dragan`, 
    age: 40
},
{
    name: `Petkan`, 
    age: 52
}];
getName = (user)=>user.name;
usernames = users.map(getName);
getAges = (user)=>user.age
ages = users.map(getAges).reduce((a,b)=>a+b)
console.log(`${usernames} with total years: ${ages}`);