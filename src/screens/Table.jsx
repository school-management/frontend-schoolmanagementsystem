import React, { Component } from 'react'
import Table from '../components/table/Table'

class TableCom extends Component {
    render() {
        return (
            <div>
                <Table>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </Table>
            </div>
        )
    }
}

export default TableCom;