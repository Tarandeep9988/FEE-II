var person1 = {
    name: "xyz",
    id: '123',
    subject: 'FEE',
};

console.log(person1);

const person2 = Object.create(person1);
// This is called protyping
// by default we cannot print person2, but we can access its key, values.
console.log(person2);
// person2.name = "Taran";
console.log(person2);

const person3 = Object.create(person2);
console.log(person3);
console.log(person3.__proto__ == person1);
