import {RowID, RowElement} from './interface'

declare function insertRow(row: RowElement): any;
declare function updateRow(rowID: RowID, rowElement: RowElement): any;
declare function deleteRow(rowID: RowID): any;