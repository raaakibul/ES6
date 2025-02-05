// Spread operator
// Spread operator is used to split up array elements or object properties.

let poorCountry = ['Bangladesh', 'Nepal', 'Bhutan'];
console.log("Poor Country: ", poorCountry);

let richCountry = ['USA', 'UK', 'Canada'];
console.log("Rich Country: ", richCountry);

let allCountry = [...poorCountry, ...richCountry];
console.log("All Country Name : ",allCountry); 
// Output: All Country:  [ 'Bangladesh', 'Nepal', 'Bhutan', 'USA', 'UK', 'Canada' ]

// Without spread operator
let allCountryWithoutSpread = poorCountry.concat(richCountry);
console.log(allCountryWithoutSpread);

let allCountry2 = richCountry.push(poorCountry);
console.log(allCountry2);