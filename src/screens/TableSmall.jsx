import React, { Component } from 'react'
import { Table, TableRow, TableHeading, TableData, THead, TableBtn, Tablebody } from '../components/table/TableSmall'
import editIcon from '../components/icon/table/editIcon'
import Card from '../components/cards/Card'

class TableSmall extends Component {
    render() {
        return (

            <Table>
                <THead>
                    <TableRow heading>
                        <TableHeading>Grade</TableHeading>
                        <TableHeading>Division</TableHeading>
                        <TableHeading colSpan={2}>Actions</TableHeading>
                    </TableRow>
                </THead>
                <TableRow body>
                    <TableData>1</TableData>
                    <TableData>A</TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/edit.png" /></TableBtn></TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/delete-forever.png" /></TableBtn></TableData>
                </TableRow>
                <TableRow body>
                    <TableData>1</TableData>
                    <TableData>B</TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/edit.png" /></TableBtn></TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/delete-forever.png" /></TableBtn></TableData>
                </TableRow>
                <TableRow body>
                    <TableData>1</TableData>
                    <TableData>C</TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/edit.png" /></TableBtn></TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/delete-forever.png" /></TableBtn></TableData>
                </TableRow>
                <TableRow body>
                    <TableData>1</TableData>
                    <TableData>D</TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/edit.png" /></TableBtn></TableData>
                    <TableData><TableBtn><img src="https://img.icons8.com/cute-clipart/24/000000/delete-forever.png" /></TableBtn></TableData>
                </TableRow>
            </Table>


        )
    }
}

export default TableSmall;