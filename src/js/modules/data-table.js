import {DataTable} from "simple-datatables";


export const dataTable = () => {
  const myTable = document.querySelector("#tblCongressmen");
  let dataTable = new DataTable(myTable);
  console.log('holis');
}
