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