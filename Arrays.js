// Array 
// 1. Array.from()
var array = Array.from("hello");
console.log(array); // ["h", "e", "l", "l", "o"]
// 2. Array.of()
var array = Array.of(1, 2, 3, 4, 5);
console.log(array); // [1, 2, 3, 4, 5]

// 3. Array.prototype.copyWithin()
var array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3, 5);
console.log(array); // [4, 5, 3, 4, 5]

// 4. Array.prototype.entries()
// 5. Array.prototype.every()
// 6. Array.prototype.fill()
// 7. Array.prototype.filter()
// 8. Array.prototype.find()
// 9. Array.prototype.findIndex()
// 10. Array.prototype.forEach()
// 11. Array.prototype.includes()
// 12. Array.prototype.indexOf()
// 13. Array.prototype.join()
// 14. Array.prototype.keys()
// 15. Array.prototype.lastIndexOf()
// 16. Array.prototype.map()
// 17. Array.prototype.pop()
// 18. Array.prototype.push()
// 19. Array.prototype.reduce()
// 20. Array.prototype.reduceRight()
// 21. Array.prototype.reverse()

var array = ['a', 'b', 'c', 'd', 'e']
console.log(array);

var myarray = new Array('a', 'b', 'c', 'd', 'e')
console.log(array[1]); // b
console.log(array[2]); // c

for (let item of array) {
    console.log(item); // a b c d e
}

// Multidimensional Array
var array1 = [[1, 2], [3, 4], [5, 6]];
var array2 = [[7, 8], [9, 10], [11, 12]];
var array3 = [[13, 14], [15, 16], [17, 18]];

var number = [array1, array2, array3];
console.log(number); // [[[1, 2], [3, 4], [5, 6]], [[7, 8], [9, 10], [11, 12]], [[13, 14], [15, 16], [17, 18]]]

console.log(number[1][2]);

// Array destructuring
var [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
