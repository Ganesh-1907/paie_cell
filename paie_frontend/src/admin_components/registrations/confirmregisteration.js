import React from "react";
import { Head } from "../head/head";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import image from "../addingphotos/imageupload.jpeg";
export const Confirmregister=()=>
{
    return(
        <>
        <Head/>
            <Table striped bordered hover variant="white">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Photo</th>
                        <th>Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Teja</td>
                        <td>tejasimma033@gmail</td>
                        <td style={{width:'450px'}}>
                            <img src={image} width={"400px"} height={"200px"}/>
                        </td>
                        <td>
                            <Button>Confirm</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}