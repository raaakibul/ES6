// map 
// key and value pair
var map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map); // Map { 'name' => 'John', 'age' => 30 }

console.log(map.get('name')); // John
console.log(map.get('age')); // 30
console.log(map.size); // 2
console.log(map.values()); // [Map Iterator] { 'John', 30 }
console.log(map.keys()); // [Map Iterator] { 'name', 'age' }
console.log(map.entries()); // [Map Iterator] { [ 'name', 'John' ], [ 'age', 30 ] }
console.log(map.has('name')); // true
console.log(map.has('age')); // true

var countries = new Map();
countries.set('name1', 'India');
countries.set('name2', 'USA');
countries.set('name3', 'UK');
countries.set('name4', 'Australia');
countries.set('name5', 'Canada');

for (let country of countries.values()){
    console.log(country);
}
countries.delete('name1');
console.log(countries);