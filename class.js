// class and object

class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log(this.name, this.age);
    }
}

var obj = new person('Rahim', 25);
obj.show();

class addition{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    sum(){
        return this.a + this.b;
    }
}

var add = new addition(10, 20);
console.log(add.sum());