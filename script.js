"use strict";

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
console.log("---Using map method---");

function PrintDeveloperbyMap(arr) {
  //Write your code here , just console.log
  const developerList = arr.map((acc) => {
    if (acc.profession === "developer") return `${acc.name} is a developer.`;
  });

  for (const list of developerList) {
    if (list) console.log(list.toUpperCase());
  }
}
PrintDeveloperbyMap(arr);

console.log("---Using forEach method---");

function PrintDeveloperbyForEach(arr) {
  //Write your code here , just console.log
  arr.forEach((acc) => {
    if (acc.profession === "developer")
      console.log(`${acc.name} is a developer.`.toUpperCase());
  });
}
PrintDeveloperbyForEach(arr);

console.log("---To add element to array---");

function addData(arr) {
  //Write your code here, just console.log
  arr.push({
    id: arr.length + 1,
    name: "susan",
    age: "20",
    profession: "intern",
  });
  console.log(arr[arr.length - 1]);
}
addData(arr);

console.log("---to remove a certain array element---");

function removeAdmin(arr) {
  //Write your code here, just console.log
  arr.forEach((acc, index, array) => {
    if (acc.profession === "admin") array.splice(index, 1);
  });
  console.log(arr);
}
removeAdmin(arr);

console.log("---to make a new concatinated array");

let arr2 = [
  { id: 5, name: "jerome", age: "78", profession: "developer" },
  { id: 6, name: "jenna", age: "90", profession: "developer" },
  { id: 7, name: "aron", age: "89", profession: "admin" },
];

function concatenateArray(a1, a2) {
  //Write your code here, just console.log
  return a1.concat(a2);
}
let newArray = concatenateArray(arr, arr2);
console.log(newArray);
