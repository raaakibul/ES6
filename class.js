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
