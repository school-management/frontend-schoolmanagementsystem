import React, { Component } from 'react'
import { Table, TableHead, TableRow, TableHeading, Tablebody } from '../components/table/Table'

class TableCom extends Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHeading>students</TableHeading>
                    <TableRow>
                        <TableHead>Firstname</TableHead>
                        <TableHead>Firstname</TableHead>
                        <TableHead>Firstname</TableHead>
                    </TableRow>
                    <TableRow>
                        <Tablebody>jill</Tablebody>
                        <Tablebody>Jill</Tablebody>
                        <Tablebody>Jill</Tablebody>
                    </TableRow>
                    <TableRow>
                        <Tablebody>Jill</Tablebody>
                        <Tablebody>Jill</Tablebody>
                        <Tablebody>Jill</Tablebody>
                    </TableRow>

                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </Table>
            </div >
        )
    }
}

export default TableCom;