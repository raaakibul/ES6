function calculation(...numbers){
    let sum = 0
    for(let i of numbers){
        sum += i
    }

    console.log("Sum: ", sum);
}
calculation(1,2,3); // Sum: 6
calculation(1,2,3,4,5); // Sum: 15
calculation(1,2,3,4,5,6,7,8,9); // Sum: 45
calculation(1,2,3,4,5,6,7,8,9,10); // Sum: 55