// task-1 Let's build a Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [param: string]: any
  }

  // task-2 2. Extending the Teacher class
  //class Teacher {
  //  constructor(fullTimeEmployee, location)
    
  //  }
  
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

interface student{
  name: String
  last: String
  workOnHomework: String
  displayName: String
}

class studentClass implements student{
  name: string
  last: string

  constructor(firstName: string, lastName: string){
    this.name = firstName
    this.last = lastName
  }
  get workOnHomework(){
    return `Currently working`;
  }
  get displayName(){
    return this.name;
  }
}