 var data = {
    name: 'sreeraj',
    yob: 1997,
    getAge: function(){
        return new Date().getFullYear() - this.yob;
    },
    getName: function(){
        return this.name;
    }
 };


 //console.log(data.getName(), data.getAge());

 //class


//Method 1

 function printMinYob(...args){
    var arr = args.map((item => item.yob));
        console.log(Math.min(...arr))
 }



 class Student {
    name;
    yob;

    constructor(name, yob){
        this.name = name;
        this.yob = yob;
    }

    //method 3
    
    static printMinYob = function(...args){
        var arr = args.map((item => item.yob));
        console.log(Math.min(...arr))
    }

    getAge(){
        return new Date().getFullYear() - this.yob;
    };
    getName(){
        return this.name;
    };
 }


 //Method 2
 Student.printMinYob = function(...args){
    var arr = args.map((item => item.yob));
    console.log(Math.min(...arr))
 }


 var student1 = new Student('Sreeraj', 1997);
 var student2 = new Student('Krishna', 1998);
 var student3 = new Student('Nithin', 1999);

 //console.log(student1, student1.getName(), student1.getAge());
 //console.log(student2, student2.getName(), student2.getAge());
 //console.log(student3, student3.getName(), student3.getAge());

 console.log(student1);
 console.log(student2);
 console.log(student3);

 //printing method 1
 printMinYob(student1, student2, student3)

 //printing method 2
 Student.printMinYob(student1, student2, student3)


 //static function