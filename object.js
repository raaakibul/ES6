// object
// 1. Object.assign()
// 2. Object.keys()
// 3. Object.values()
// 4. Object.entries()
// 5. Object.getOwnPropertyDescriptors()
// 6. Object.defineProperty()
// 7. Object.defineProperties()
// 8. Object.preventExtensions()
// 9. Object.isExtensible()
// 10. Object.seal()
// 11. Object.isSealed()
// 12. Object.freeze()
// 13. Object.isFrozen()
// 14. Object.fromEntries()
// 15. Object.setPrototypeOf()
// 16. Object.getPrototypeOf()
// 17. Object.create()
// 18. Object.is()

var billGates = {
    name: 'Bill Gates',
    age: 64,
    title: 'Co-founder of Microsoft',
    netWorth: '110 $billion USD',
    company: 'Microsoft',
}

console.log(billGates.name); // Bill Gates
console.log(billGates.age); // 64
console.log(billGates.title); // Co-founder of Microsoft
console.log(billGates.netWorth); // 110 $billion USD
console.log(billGates.company); // Microsoft;

var steveJobs = {
    name: 'Steve Jobs',
    age: 56,
    title: 'Co-founder of Apple',
    netWorth: '100 $billion USD',
    company: 'Apple',
    shirt:{
        color: 'black',
        size: 'M',
        price: '100 USD',
    },

    swatter:{
        color: 'black',
        size: 'M',
        price: '100 USD',
    }
}
console.log(steveJobs);
console.log(steveJobs.shirt.color);