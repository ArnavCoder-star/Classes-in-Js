class Student {
constructor(name) {
this.studentname = name;
    }
    
    static hello() { // static method
    
    return "Hello!!";
    
    }
    
    
    }
    
    myname = new Student("Carol");
    
    //Call 'hello()' on the class Student and NOT on the 'myname' object because 'hello()' is a static method it cannot access object
    
    console.log(Student.hello());