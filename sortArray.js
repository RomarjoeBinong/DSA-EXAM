// use fixed values for now
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// combine both arrays
let merged = numbers.concat(names);
console.log("Merged array:", merged);

// sort numbers biggest to smallest
let sortedNums = numbers.sort(function(a, b) {
  return b - a;
});
console.log("Sorted numbers (reverse):", sortedNums);

// sort names from A to Z
let sortedNames = names.sort();
console.log("Sorted names (A-Z):", sortedNames);