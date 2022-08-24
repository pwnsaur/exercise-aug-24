// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result

const function1 = (a, b) => a + b;

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

const function2 = (string) => {
  if (string.length < 3) return 'Sorry, string is too short';
  return string.slice(-3);
};

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

const function3 = (a) =>
  a
    .toString()
    .split('')
    .map((item) => parseInt(item));

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

const function4 = (a, n) => {
  if (n > a.length) return 'Sorry, array is too short';
  return a.slice(-n);
};

// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

const function5 = (array1, array2) =>
  [...new Set(array1.concat(array2))].sort();

// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

const function6 = (a, b) => {
  if (Object.keys(a).includes(b)) return true;
  return false;
};
