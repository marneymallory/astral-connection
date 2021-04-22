const myObj = new Object()
myObj.name = `stuart`
/* myObj

Object {
  name: 'stuart'
}
f
*/
const myObjDoesHaveName = myObj.hasOwnProperty(`name`)
// ^prototype method that returns a boolean^

const myObjKeys = Object.keys(myObj)
// ^static method that returns an array^

// myObjKeys is ['name']

// -------------------------------------------------------
// What you should do with arrow functions

function adf() {
  return `foo`
} // normal function def

const adg = () => `foo` // arrow function def

const double = int => int * 2

const myNumber = double(2) // = 4

// -------------------------------------------------------
// What not to do with arrow functions

function Hubble() {}

Hubble.prototype.cleanLenses = () => `lenses cleaned, boss!`

// -------------------------------------------------------
// Instead, do this

/* eslint-disable func-names */
Hubble.prototype.cleanLenses = function () {
  return `lenses cleaned, boss!`
}
/* eslint-enable func-names */
