import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTable
} from 'react-table';
;
function MyTable({
  columns,
  data
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows
    
  } = useTable(
    {
      columns,
      data
    }
  );

  return (
    <div style={{overflowX:'scroll',maxWidth:'100vw',padding:0}}>
      <TableContainer component={Paper}>
      <Table
        {...getTableProps()}
      //  className="table table-bordered"
      >
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()} style={{textTransform:'uppercase',whiteSpace:'nowrap'}}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.length>0?rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                  );
                })}
              </TableRow>
            );
          }):<TableRow>
            <TableCell colSpan={8} style={{textAlign:'center'}}>
            No Data In Table
            </TableCell>
            </TableRow>}
          
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}


  
  

export default MyTable;
