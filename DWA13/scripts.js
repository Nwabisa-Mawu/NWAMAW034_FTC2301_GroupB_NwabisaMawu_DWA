/* eslint-disable */

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/* Use forEach to console log each name to the console.  */
const ShowNames = names.forEach((name) => {
    console.log(name);
});

/* Use forEach to console log each name with a matching province (for example Ashwin (Western Cape) */
const nameAndProvince = names.forEach((name, index) => {
        console.log(`${name} (${provinces[index]})`);
});

/* Using map loop over all province names and turn the string to all uppercase. Log the new array to the console. */
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

/* Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 7, 7] */
const numOfCharNames = names.map((name) => name.length);
console.log(numOfCharNames);

/* Using toSorted to sort all provinces alphabetically. */
const sortedProvinces = provinces.toSorted();
console.log(sortedProvinces);

/* Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3 */
const filterProvinces = provinces.filter(province => {
  return !province.toLowerCase().includes('cape');
});
console.log(filterProvinces);
const lengthFilterProvinces = filterProvinces.length
console.log(lengthFilterProvinces);

/* Create a boolean array by using map and some to determine whether a name contains an S character. */
const checkS = names.map((name) => name.toLowerCase().includes('s'))
console.log(checkS);
const hasSInName = checkS.some((value) => value);
console.log(hasSInName);

/* Using only reduce, turn the above into an object that indicates the province of an individual. */
const newObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});

  console.log(newObject);






