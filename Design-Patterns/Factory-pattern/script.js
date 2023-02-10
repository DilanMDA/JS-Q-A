function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  //   console.log("Hi, I am " + this.name + " and I am a " + this.type);
  document.write(
    "Hi, I am " + this.name + " and I am a " + this.type + "</br>"
  );
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Akila", 1));
employees.push(employeeFactory.create("Saman", 2));
employees.push(employeeFactory.create("Dilan", 1));
employees.push(employeeFactory.create("Nimal", 1));
employees.push(employeeFactory.create("Amila", 2));

employees.forEach((emp) => {
  say.call(emp);
});

// // Superclass
// function CarMaker() {}
// CarMaker.prototype.drive = function () {
//   return "Driving a " + this.type;
// };

// // Concrete object factory
// function SedanMaker() {
//   this.type = "Sedan";
// }
// SedanMaker.prototype = new CarMaker();

// function SportsCarMaker() {
//   this.type = "Sports Car";
// }
// SportsCarMaker.prototype = new CarMaker();

// // Factory method
// function carMakerFactory(maker) {
//   if (maker === "Sedan") {
//     return new SedanMaker();
//   } else if (maker === "Sports Car") {
//     return new SportsCarMaker();
//   }
// }

// // Usage
// var car1 = carMakerFactory("Sedan");
// console.log(car1.drive()); // Output: "Driving a Sedan"

// var car2 = carMakerFactory("Sports Car");
// console.log(car2.drive()); // Output: "Driving a Sports Car"
