import React, { useState } from 'react'
import { Head } from '../head/head'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
export const Register=()=>
{
    const[name,sname]=useState(null)
    const[gmail,sgmail]=useState(null)
    const[phone,sphone]=useState(null)
    const[branch,sbranch]=useState(null)
    const[sec,ssec]=useState(null)
    const[reg,sreg]=useState(null)
    const Registers=async()=>
    {
        await axios.post("http://localhost:8000/register/"+name+"/"+gmail+"/"+phone+"/"+branch+"/"+sec+"/"+reg)
        .then((res)=>
        {
           if(res.data)
           {
            alert('register sucessfully');
            window.location.reload(3);
           }
           else
           {
            alert("Try again");
           }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <Head/>
        <div style={{marginTop:'5%',textAlign:'center'}}>
            <h1 style={{fontSize:'50px',color:'green'}}>Register Form</h1>
        </div>
            <table className='registerform'>
                <tr>
                    <td>
                    <label>Full Name :</label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Name' onChange={(e)=>sname(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Gmail :</label>
                    </td>
                    <td>
                    <input type='email' placeholder='Enter Mail' onChange={(e)=>sgmail(e.target.value.toLowerCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Phone Number :</label>
                    </td>
                    <td>
                    <input type='number' placeholder='Enter Phone Number' onChange={(e)=>sphone(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Branch :</label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Branch' onChange={(e)=>sbranch(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Section :</label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Section' onChange={(e)=>ssec(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Register Number : </label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Register Number' onChange={(e)=>sreg(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td colSpan={2} style={{float:'right'}}>
                        <Button onClick={Registers}>Register</Button>
                    </td>
                </tr>
            </table>
        </>
    )
}