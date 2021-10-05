// Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Objet.create(myProtoObj)

// Object.assign(myObj, myProtoObj)

// console.log(myObj)

myObj['qux'] = 3;