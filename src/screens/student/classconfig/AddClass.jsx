import React, { Component } from 'react';
import ClassFlex from "./ClassFlex";
import Heading3 from '../../../components/typography/Heading3';
import Selection from '../../../components/inputs/Select';
import Label from '../../../components/typography/Label';
import { Table, TableRow, TableHead, Tablebody } from '../../../components/table/Table1';
import PrimaryCard from '../../../components/cards/PrimaryCard';
import Card from '../../../components/cards/Card';
import FlatInput from '../../../components/inputs/FlatInput';


export default class AddClass extends Component {
    render() {
        return (
            <Card style={{ width: "60em", height: "30em" }}>
                <flexContainer >
                    <flexRow style={{ textAlign: "center" }}>
                        <flexCol>
                            <Heading3>Select grade</Heading3>
                            <Selection style={{ textAlign: "center" }}>
                                <select>1</select>
                            </Selection>
                        </flexCol>
                    </flexRow>

                    <flexRow>
                        <flexCol style={{ textAlign: "rigth" }}>
                            <Table style={{ width: "20em" }}>
                                <TableRow heading>
                                    <TableHead>Grade</TableHead>
                                    <TableHead>Division</TableHead>
                                    <TableHead>Actions</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                                <TableRow >
                                    <Tablebody>1</Tablebody>
                                    <Tablebody>A</Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
                                    </Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
                                    </Tablebody>
                                </TableRow>
                                <TableRow >
                                    <Tablebody>1</Tablebody>
                                    <Tablebody>B</Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
                                    </Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
                                    </Tablebody>
                                </TableRow>
                                <TableRow >
                                    <Tablebody>1</Tablebody>
                                    <Tablebody>C</Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
                                    </Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
                                    </Tablebody>
                                </TableRow>
                                <TableRow >
                                    <Tablebody>1</Tablebody>
                                    <Tablebody>D</Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
                                    </Tablebody>
                                    <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
                                    </Tablebody>
                                </TableRow>
                            </Table>
                            <Label></Label>
                        </flexCol>

                    </flexRow>
                    <flexRow style={{ textAlign: "left" }}>

                        <flexCol >
                            <FlatInput></FlatInput>

                        </flexCol>
                    </flexRow>
                </flexContainer >
            </Card >

        )
    }
}
