interface DirectorInterface {
    
     workFromHome(): string
     getCoffeeBreak(): string
     workDirectorTasks(): string 
}

interface TeacherInterface{
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string

}

class Director implements DirectorInterface{
    
    workFromHome(){
        return "Working from home"
    };
    getCoffeeBreak()
    {
        return "Getting a coffe break"
    };
    workDirectorTasks(){
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    
    workFromHome(){
        return "Cannot work from home"
    };
    getCoffeeBreak()
    {
        return "Cannot have a break"
    };
    workTeacherTasks(){
        return "Getting to work"
    }
}

function createEmployee (salary:number | string): Teacher | Director{
    if(typeof salary === 'number' && salary < 500){
        return new Teacher();
    }
     return new Director();
}
//test

//console.log(createEmployee(600));
//console.log(createEmployee(200));
//console.log(createEmployee("hola"));

// task 6
function isDirector (employee:Teacher | Director): employee is Director{
    
     return employee instanceof Director;
}

// task 7

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects){
    return `teaching ${todayClass}`;
}
console.log(teachClass("Math"));
console.log(teachClass("History"));