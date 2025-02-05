var age = 18
if (age >= 18) {
    console.log('You are an adult')
}
else {
    console.log('You are a child')
}

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
    },
}

if (steveJobs['swatter'].color == 'black'){
    console.log('The swatter is black')
}
else {
    console.log('The swatter is not black')
}