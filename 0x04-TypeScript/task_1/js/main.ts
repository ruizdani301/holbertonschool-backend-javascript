// task-1 Let's build a Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [param: string]: any
  }

  // task-2 2. Extending the Teacher class
  
  
  interface Directors extends Teacher{
    numberOfReports: number
  }

 // task- 3
 interface Dates {
  firstName: string;
  lastName: string;
 }
 function printTeacher(datos: Dates) {
    let siglas: string;
    siglas = datos.firstName.slice(0, 1); 
    return `${siglas}.${datos.lastName}`
}
// punto 4
interface student{
  name: string
  last: string
  workOnHomework(): string
  displayName(): string
}

class studentClass implements student{
  public name: string
  public last: string

  constructor(param1: string, param2: string){
    this.name = param1
    this.last = param2
  }
  public workOnHomework(): string{
    return "Currently working";
  }
  public displayName(): string{
    return this.name;
  }
}

//test
const student: studentClass = new studentClass("Jhon", "Doe");
console.log(
  `${student.name} ${student.last} ${student.workOnHomework()}`
);