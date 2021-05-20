// 1. Create a variable called dogName and set it to "Bixby"
const dogName = "Bixby"
// Variable goes here ^^^
console.log("This says 'Bixby':", dogName)
//----------------------------------------
const dogAge= 6
// 2. Create a variable called dogAge and set it to 6

// Variable goes here ^^^
console.log("This says 6:", dogAge)
//----------------------------------------

// 3. Create an object variable called dog that has Bixby's age and name:
dog = {
  age: 6,
  name: "Bixby"
}
// Object variable goes here ^^^
console.log("This says 'Bixby':", dog.name)
console.log("This says 6:", dog.age)
//----------------------------------------

// 4. Create a function called generateDog that generates a new dog when you give it a name and age:
generateDog= (name, age) => {
dog = {
  name: name,
  age: age
}
return dog
}
// Function goes here ^^^
console.log("This says 'Mesa'", generateDog("Mesa", 3).name)
console.log("This says 3", generateDog("Mesa", 3).age)
//----------------------------------------