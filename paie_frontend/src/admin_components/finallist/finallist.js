import axios from "axios";
import { React, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Head } from "../head/head";
import Button from "react-bootstrap/esm/Button";
export const FinalList=()=>
{
    const[data,sdata]=useState([]);
    const date=new Date
    const[load,sload]=useState(false)
    useEffect(()=>
    {
        axios.post("http://localhost:8000/registerdata")
        .then((res)=>
        {
            sdata(res.data)
        })
        .catch((e)=>console.log(e));
    })
    const SubmitList=async()=>
    {
        sload(true)
        axios.post("http://localhost:8000/finilizelist/"+date.toDateString())
        .then((res)=>
        {
            if(res.data)
            {
                alert(date.toDateString()+"Submitted List")
                sload(false)
            }
            else
            {
                sload(false)
                alert("Try again");
            }
        })
        .catch((e)=>console.log(e));
        
        console.log(date.toDateString())
    }
    return(
        <>
        <Head/>
        <Table  bordered responsive hover variant="white">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Phone Number</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Register Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,index)=>
                        (
                            val.Request && val.Confirm?
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.Name}</td>
                                <td>{val.Gmail}</td>
                                <td>{val.Phonenumber}</td>
                                <td>{val.Branch}</td>
                                <td>{val.Section}</td>
                                <td>{val.Registernumber}</td>
                            </tr>:<b/>
                        ))
                    }
                </tbody>
            </Table>
            <Button style={{marginLeft:'10%'}} onClick={(e)=>{document.getElementById('totallist').style.display="none"}} onDoubleClick={(e)=>{document.getElementById('totallist').style.display="block"}}>Total List</Button>
            double click it's shows and singls click it close


            <Button style={{float:'right',marginRight:'10%',backgroundColor:'green'}} onClick={SubmitList}>{load?"Submitting..":"Submit List"}</Button>
            <div style={{display:'none'}} id="totallist">
            <Table  bordered responsive hover variant="white">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Phone Number</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Register Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,index)=>
                        (
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.Name}</td>
                                <td>{val.Gmail}</td>
                                <td>{val.Phonenumber}</td>
                                <td>{val.Branch}</td>
                                <td>{val.Section}</td>
                                <td>{val.Registernumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
        </>
    )
}