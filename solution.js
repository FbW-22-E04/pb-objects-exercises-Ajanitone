//1
// # JS Object

// **Complete the code in `solution.js`**

// ## 1. isPlainObject
// Write a function named 'isPlainObject' that verifies an argument is a plain object, not an array or null
// ### Expected Result:
// True if object is plain, false otherwise.

// ({ a: 1 }) => true

// ([1, 2, 3]) => false

const data = { a: 1 };

const isPlainObject = (obj) =>
  typeof obj === "object" && !Array.isArray(obj) && obj !== null
    ? "True"
    : "False";

console.log("Q01:", isPlainObject(data)); // true

console.log("Q01:", isPlainObject([1, 2, 3]));

console.log("-----------------------------------------------");
// ## 2. makePairs
// Write a function named 'makePairs' that returns a deep array like [[key, value]]

//2
const data2 = { a: 1, b: 2 };

const makePairs = (obj) => Object.entries(obj);
//write your code here
console.log("Q02:", makePairs(data2)); // [['a', 1], ['b', 2]]

console.log("-----------------------------------------------");

// ## 3. without
// Write a function named 'without' that returns a new object without provided properties

// ### Expected Result:
// `({ a: 1, b: 2 }, 'b') => { a: 1 }`

const data3 = { a: 1, b: 2 };

const without = (obj) =>
  Object.fromEntries(Object.entries(obj).filter((obj) => obj[0] != "b"));

console.log(without(data3)); // { a: 1 }

console.log("-----------------------------------------------");

// ## 4. isEmpty
// Write a function named 'isEmpty' that makes a shallow check is object empty
// ### Expected Result:
// `({}) => true, ({ a: undefined }) => true`

// `({ a: 1 }) => false`

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
const data41 = {};

const isEmpty = (obj) => Object.entries(obj).every((el) => el[1] === undefined);

console.log("Q04:", isEmpty(data4)); // false
console.log("Q04:", isEmpty(data40)); // true
console.log("Q04:", isEmpty(data41)); // true

console.log("-----------------------------------------------");

// ## 5. isEqual
// Write a function named 'isEqual' that makes a shallow compare of two objects

// ### Expected Result:
// True if objects are identical, false if objects are different

`({ a: 1, b: 1 }, { a: 1, b: 1 }) => true`;

const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };

// const isEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

const isEqual2 = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);

  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) if (obj1[key] !== obj2[key]) return false;

  return true;
};

console.log(isEqual2(data5, data51)); // true
console.log(isEqual2(data5, data52)); // false

console.log("-----------------------------------------------");

// ## 6. invoke
// Write a function named 'invoke' that invokes an array method on a specific path

// ### Expected Result:
// `({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]`

const data6 = { a: { b: [1, 2, 3] } };

const invoke = (object, path, func, args) => {
  const splittedPath = path.split(".");

  const target = splittedPath.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});

  return Array.prototype[func].apply(target, args);
};

console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]

console.log("-----------------------------------------------");

// ## 7. isEmptyDeep
// Write a function named 'isEmptyDeep' that makes a deep check is an object empty
// **Empty values:** '', null, NaN, undefined, [], {}
// ### Expected Result:

// `({}) => true``({ a: { b: undefined } }) => true``({ a: { b: [] } }) => true`;

const data7 = { a: { b: undefined } };

const isEmptyDeep = (obj) => {
  //   Object.values(obj).every(
  //     (el) => el === undefined || el === 0 || el === NaN || el === [] || el === {}

  for (const value1 of Object.values(obj)) {
    for (const value2 of Object.values(value1)) {
      if (value2 !== undefined) {
        return false;
      }
    }
  }
  return true;
};

console.log("Q7:", isEmptyDeep(data7));
console.log("Q7:", isEmptyDeep({ a: { b: undefined } }));
console.log("Q7:", isEmptyDeep({ a: { b: 1 } }));
console.log("Q7:", isEmptyDeep({ a: { b: undefined }, c: { d: undefined } }));

console.log("-----------------------------------------------");

// `## 8.  isEqualDeep
// Write a function named 'isEqualDeep' that makes a deep compare of two objects

// ### Expected Result:
// True if objects are equal, false if objects are different

// `({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true`

const data8 = { a: 1, b: { c: 1 } };
const data81 = { a: 1, b: { c: 1 } };
const data82 = { a: 1, b: { c: 2 } };

const isEqualDeep = (object1, object2) =>
  JSON.stringify(object1) === JSON.stringify(object2);

console.log("Q8:", isEqualDeep(data8, data81)); // true
console.log("Q8:", isEqualDeep(data8, data82)); // false

console.log("-----------------------------------------------");

// ## 9. intersection
// Write a function named 'intersection' that finds shallow intersections of objects

// ### Expected Result:
// `({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }`

const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };

const intersection = (obj3, obj4) => {
  const obj3Keys = Object.keys(obj3);
  return obj3Keys.reduce((acc = {}, key) => {
    if (obj3[key] === obj4[key]) {
      acc = {
        ...acc,
        [key]: obj3[key],
      };
    }
    return acc;
  }, {});
};
console.log(intersection(data9, data91)); // { b: 2 }

console.log("-----------------------------------------------");

// ## 10.  intersectionDeep
// Write a function named 'intersectionDeep' that finds all intersections of objects

// ### Expected Result:
// `({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }`

const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };

const intersectionDeep = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }
    if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
      const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

      if (isEqualArrays) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
    } else if (
      typeof firstObj[key] === "object" &&
      typeof secondObj[key] === "object"
    ) {
      const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

      if (Object.keys(hasIntersection).length !== 0) {
        acc = {
          ...acc,
          [key]: hasIntersection,
        };
      }
    }
    return acc;
  }, {});
};
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }
