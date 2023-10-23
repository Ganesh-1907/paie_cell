import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
export const Confirmregister=()=>
{
    const[data,sdata]=useState([]);
    const[photo,sphoto]=useState([])
    const [select,sselect]=useState([]);
    const Openphoto=async(photo)=>
    {
        document.getElementById('screenshort').style.display="block"
    }
    const Close=async()=>
    {
        document.getElementById('screenshort').style.display="none"
    }
    const Confirm=async()=>
    {
        let ebody=`
        <p>This <b>Mail</b> from <h1>PAIE CELL</h1></p>
        <p>
        <b>Name::<b>${select.Name}
        <br/>
        <b>Gmail::<b>${select.Gmail}
        <br>
        <p>we are inviting you to join in ART OF LIVING course here is the link to pay the amount for registration </p>
        <h3>Click Here::</h3><h4></h4>
        <p>After payment you will upload your screenshort in the below link then you will get login cerditinals</p>
        <h4>Click Here::</h4>
        <p>
        `
        window.Email.send({
            SecureToken :"3c068e1e-2b17-48d8-b96f-2fa30f12bb6f",
            To:"ramsaiandhavarapu07@gmail.com",
            From :"aolsrkr2002@gmail.com",
            Subject : "YES+ Registrations",
            Body : ebody
        }).then(
          message =>alert(message)
        )
        await axios.post("http://localhost:8000/cnfrmregt/"+select.Gmail)
        .then((res)=>
        {
            if(res.data)
            {
                alert("Confirmed");
            }
            else
            {
                alert("Try again");
            }
        })
        .catch((e)=>console.log(e))
    }
    const Remove=async()=>
    {
        await axios.post("http://localhost:8000/rmvrgtr/"+select.Gmail)
        .then((res)=>
        {
            if(res.data)
            {
                alert("Removed");
            }
            else
            {
                alert("Try again");
            }
        })
        .catch((e)=>console.log(e))
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/registerdata")
        .then((res)=>
        {
            sdata(res.data)
        })
        .catch((e)=>console.log(e));
    })
    return(
        <>
        <Head/>
        <div className="openphoto" id="screenshort">
            <Button style={{backgroundColor:'orangered',position:'absolute'}} onClick={Close}>X</Button>
            <img src={photo} width={"100%"} height={"100%"}/>
        </div>
            <Table  bordered responsive hover variant="white">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Photo</th>
                        <th>Remove</th>
                        <th>Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,index)=>
                        (
                            val.Request && !val.Confirm?
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.Name}</td>
                                <td>{val.Gmail}</td>
                                <td style={{ width: '450px' }}>
                                    <img src={val.ScreenShort} width={"400px"} height={"200px"} onClick={Openphoto} onClickCapture={()=>sphoto(val.ScreenShort)}/>
                                </td>
                                <td>
                                    <Button style={{backgroundColor:'red'}} onClick={Remove} onClickCapture={()=>sselect(val.Gmail)}>Remove</Button>
                                </td>
                                <td>
                                    <Button onClick={Confirm} onClickCapture={()=>sselect(val)}>Confirm</Button>
                                </td>
                            </tr>:<b/>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}