/**
 * Function to zip two lists by alternating elements.
 */

// Zip using a for loop
function zipList<T>(list1: T[], list2: T[]): T[] {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }

  const result: T[] = [];
  for (let i = 0; i < list1.length; i += 1) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

// Zip using functional programming (zip with reduce)
function zipListTheFunctionalWay<T>(list1: T[], list2: T[]): T[] {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }

  return list1.flatMap((value, index) => [value, list2[index]]);
}

// Test cases
const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

console.log('zipList:', zipList(listA, listB));
console.log('zipListTheFunctionalWay:', zipListTheFunctionalWay(listA, listB));
