import axios from "axios";
import { React, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Head } from "../head/head";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";

export const FinalList=()=>
{
    const[data,sdata]=useState([]);
    const[load,sload]=useState(false)
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const[date1,setdate1]=useState();
    const date=new Date(date1);
    // const date2=date(date1)
    useEffect(()=>
    {
        axios.post("https://paiecell.onrender.com/registerdata")
        .then((res)=>
        {
            sdata(res.data)
        })
        .catch((e)=>console.log(e));
    })
    const SubmitList=async()=>
    {
        console.log(date.toDateString())
        sload(true)
        axios.post("https://paiecell.onrender.com/finilizelist/"+date.toDateString())
        .then((res)=>
        {
            if(res.data)
            {
                // alert(date.toDateString()+"Submitted List")
                setSuccessMessage(date.toDateString() + "Submitted List");
                sload(false)
            }
            else
            {
                sload(false)
                // alert("Try again");
                setErrorMessage("Try again");
            }
        })
        .catch((e)=>console.log(e));
        
        // console.log(date.toDateString())
    }
    return(
        <>
        <Head/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '720px', width: '100%' }}>
          <Alert variant="success" show={successMessage !== ''} onClose={() => setSuccessMessage('')} dismissible style={{ margin: '0 auto' }}>
            {successMessage}
          </Alert>
          <Alert variant="danger" show={errorMessage !== ''} onClose={() => setErrorMessage('')} dismissible style={{ margin: '0 auto' }}>
            {errorMessage}
          </Alert>
        </div>
      </div>
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

            <input type="date" onChange={(e)=>setdate1(e.target.value.toString())}/>
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