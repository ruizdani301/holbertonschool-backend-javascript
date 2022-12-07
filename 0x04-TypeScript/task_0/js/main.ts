interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string
}

const studentOne: Student = {
  firstName: "maria",
  lastName: "perez",
  age: 20,
  location: "palmira"
};


const studentTwo: Student = {
  firstName: 'luisa',
  lastName: "munez",
  age: 21,
  location: "cali"
};
const studentList:Array<Student> = [studentOne, studentTwo];


  const table = document.createElement('table');
  const body = document.createElement('body');

  studentList.map((student:Student) => {
    const tdName = document.createElement("td");
    const tdLocation = document.createElement("td");
    const tr = document.createElement("tr");
    
    tdName.innerText = student.firstName;
    tdLocation.innerText = student.location;
    tr.appendChild(tdName);
    tr.appendChild(tdLocation);
    body.appendChild(tr);
  });
  table.appendChild(body);
  document.body.appendChild(table);
  


