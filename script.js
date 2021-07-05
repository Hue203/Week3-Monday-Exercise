// // const name = 'Parrot'
// // const colors = ['Red', 'Green', 'Blue', 'Yellow']

// // const bird = {
// //   name: name,
// //   colors: colors
// // }

// // console.log(bird)

// const name = "Parrot";
// const colors = ["Red", "Green", "Blue", "Yellow"];
// const talons = ["Prey", "Eagles", "Hawks", "Falcons"];

// const bird = {
//   name: name,
//   colors: colors,
//   talons: talons,
// };

// console.log(bird);

// const capital = "Hanoi";
// const continent = "Asia";

// const vietnam = {
//   capital,
//   continent,
// };

// console.log(vietnam);

// const wheelsCount = 4;
// const doorsCount = 4;
// const color = "black";

// const car = {
//   wheelsCount,
//   doorsCount,
//   color,
// };

// console.log(car);

// ////3. Destructuring.///

// function getAverage(obj) {
//   const { x, y, z } = obj;
//   return Math.floor((x + y + z) / 3.0);
// }

// console.log("getAverage", getAverage({ x: 3.6, y: 7.8, z: 4.3 }));

// function getAddress() {
//   let coderSchool = {
//     city: "HCM",
//     country: "Vietnam",
//     address: {
//       number: 12,
//       street: "Ton Dan",
//       district: "4",
//     },
//   };
//   const {
//     city,
//     country,
//     address: { street },
//   } = coderSchool;
//   return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
// }

// console.log(getAddress());

// function objectifyElements() {
//   const arr = [0, 1, 2, 4, 3, 5, 6, 7, 8];
//   const [first, , third, fourth] = arr;
//   return { first, third, fourth };
// }

// console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4);

// ///

// function getFoodItems() {
//   const food = [
//     ["carrots", "beans", "peas", "lettuce"],
//     ["apples", "mangos", "oranges"],
//     ["cookies", "cake", "pizza", "chocolate"],
//   ];
//   // const carrots = food[0][0];
//   // const cookies = food[2][0];
//   // const mangos = food[1][1];
//   const [[carrots], [, mangos], [cookies]] = food;
//   return { carrots, cookies, mangos };
// }

// console.log(getFoodItems().mangos === "mangos");

// /// Refactor so that the return is true //

// // function getHistoricPrices(index) {
// //   const bingo = index[0];
// //   return bingo;
// // }

// // console.log(getHistoricPrices([true, false, true]));

// // function getHistoricPrices(index) {
// //   const bingo = index[0][0];
// //   return bingo;
// // }

// // console.log(
// //   getHistoricPrices([
// //     [true, false],
// //     [false, true],
// //   ])
// // );

// // function getHistoricPrices(index) {
// //   const bingo = index[0][0][0];
// //   return bingo;
// // }

// // console.log(
// //   getHistoricPrices([
// //     [
// //       [true, false],
// //       [true, false],
// //     ],
// //   ])
// // );

// //// 4. Rest and Spread.///

// function restParams(first, ...rest) {
//   return first === "first" && rest[0] === "second";
// }

// console.log(restParams("first", "second"));

// function restParams2(first, ...rest) {
//   return first === "first" && rest[0] === "second" && rest[1] === "third";
// }

// console.log(restParams2("first", "second", "third"));

// function restParams3(first, ...rest) {
//   return (
//     first === "first" &&
//     rest[0] === "second" &&
//     rest[1] === "third" &&
//     rest[2] === undefined
//   );
// }

// console.log(restParams3("first", "second", "third")); // CHANGE ME

// function restParams4(...rest) {
//   return rest[2] === "first" && rest[0] === "second" && rest[1] === "third"; // CHANGE ME
// }

// console.log(restParams4("second", "third", "first"));

// function ontoAnObject() {
//   const array = [1, 2, 3, 4, 5, 6];
//   const object = {};
//   [object.one, object.two, object.three, ...object.rest] = array;

//   return object;
// }

// console.log(ontoAnObject());

// function findTheMax() {
//   const arr1 = [1, 7, 2, 4];
//   const arr2 = [1, 9, 5, 8];
//   return Math.max(...arr1, ...arr2);
// }
// console.log(findTheMax());

// function concatenateArrays() {
//   const arr1 = [0, 1, 2, 3];
//   const arr2 = [4, 5, 6];
//   const arr3 = [7, 8, 9];
//   const result = [...arr1, ...arr2, ...arr3];
//   return result;
// }

// console.log(concatenateArrays());

function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };
  const result = { ...obj1, ...obj2 };
  console.log(result);
  return (
    result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g === "g from obj2" &&
    result.d.h === "h from obj2"
  );
}
console.log(mergeObjects());

//// 5. Arrow functions///
//Refactor to an arrow function.
function multiArgument() {
  const divide = (a, b) => a / b;

  return divide(40, 10);
}
console.log(multiArgument());
//Refactor to an arrow function.
function spreadWithArrow() {
  const asArray = (...args) => args;
  return asArray(1, 2, 3, 4);
}
console.log(spreadWithArrow());
//Refactor to an arrow function.

function withObject() {
  const getObject = (favoriteCandy) => {
    return { favoriteCandy };
  };
  return getObject("twix");
}
console.log(withObject());

function withMultiLineExpression() {
  const getString = (name) => {
    return `
        Hello there ${name}
        How are you doing today?
      `;
  };
  return getString("John");
}
console.log(withMultiLineExpression());

function curryAdd() {
  return curryAddition(9)(3)(5);
  function curryAddition(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
}

console.log(curryAdd());
