var dreamhome = {
  location: "sainik farm",
  type: "farm house",
  area: "5000sqft",
  amenities: ["garden", "dogs", "big house"],
  mustHavePool: true,
  greeting: "Hello Friend!",
  sayGreeting: function () {
    console.log(this.greeting)
  }
}

console.log(dreamhome)

dreamhome.sayGreeting()

console.log(dreamhome.area)