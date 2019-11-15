import React, { Component } from 'react'
import { Table, TableRow, TableHeading, TableData, THead, TableBtn, Tablebody } from '../components/table/Table'
import editIcon from '../components/icon/table/editIcon'
import Card from '../components/cards/Card'

class TableCom extends Component {
    render() {
        return (

            <Table>
                <THead>
                    <TableRow heading>
                        <TableHeading>Admission No</TableHeading>
                        <TableHeading>First Name</TableHeading>
                        <TableHeading>Last Name</TableHeading>
                        <TableHeading colSpan={2} style={{ textAlign: "center" }}>Actions</TableHeading>
                    </TableRow>
                </THead>
                <TableRow body>
                    <TableData>001</TableData>
                    <TableData>Kishanth</TableData>
                    <TableData>Shanthakumar</TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/edit.png" /></TableBtn></TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/delete-forever.png" /></TableBtn></TableData>
                </TableRow>
                <TableRow body>
                    <TableData>001</TableData>
                    <TableData>Kishanth</TableData>
                    <TableData>Shanthakumar</TableData>
                    <TableData>E</TableData>
                    <TableData>D</TableData>
                </TableRow>
            </Table>


        )
    }
}

export default TableCom;