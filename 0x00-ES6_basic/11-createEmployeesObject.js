import { array } from "yargs"

export default function createEmployeesObject(departmentName, employees) {
    let e = [];
    for (const l of employees){
        e.push(l)
    }
    return `{ ${departmentName}: ${e}}`;
   
}