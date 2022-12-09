/// <reference path="crud.d.ts" />
import {RowID, RowElement} from "./interface"
import * as CRUD from "./crud"

//Se crea una fila con 2 campos de tipo RowElement {firstName: "Guillaume",
//    lastName: "Salva"}
const row: RowElement =
{
    firstName: "Guillaume",
    lastName: "Salva"
}
//Se inserta la fila y se genera el ID
const newRowID: RowID = CRUD.insertRow(row)
// se actualiza o modifica el row con los nuevos datos
const updateRow: RowElement = {age:23, ...row};
// se agregan los datos actualizados al ID actual
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
