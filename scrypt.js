class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  isSameAuthor(articleToCompare) {
    this.age < articleToCompare.age;
    return (
      "il piu grande è " +
      " " +
      articleToCompare.lastName +
      " " +
      articleToCompare.firstName
    );
  }
}
const x = new User("Rufy", "Monkey D", 20, "Foosha");
const y = new User("Zoro", "Roronoa", 25, "Shimotsuki");

console.log(x.isSameAuthor(y));

const petUserOne = {};
class Pet {
  constructor(petName, ownerName, species) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
  }
  isSameAuthor(articleToCompare) {
    return this.ownerName === articleToCompare.ownerName;
  }
}
const pet1 = new Pet("Silvestro", "La Nonna", "Cat");
const pet2 = new Pet("Pluto", "Topolino", "Dog");
const pet3 = new Pet("Titty", "La Nonna", "Canary");
console.log(pet1.isSameAuthor(pet2));
console.log(pet1.isSameAuthor(pet3));
console.log(pet2.isSameAuthor(pet3));
const input = document.getElementById("input");
input.addEventListener("change", () => {
  return console.log((petUserOne["petName"] = input.value));
});
console.log(petUserOne);
