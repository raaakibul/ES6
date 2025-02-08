// set 
let colors = new Set(['red', 'green', 'blue']);
console.log(colors);

colors.add('yellow');
console.log(colors);

colors.delete('red');
console.log(colors);

console.log(colors.has('green'));

colors.clear();
console.log(colors);

var country = new Set();
country.add('India');
country.add('USA');
country.add('UK');
country.add('Australia');
console.log(country);
console.log(country.size);
console.log(country.values());
console.log(country.keys());
console.log(country.entries());
console.log(country.has('India'));
console.log(country.delete('USA'));