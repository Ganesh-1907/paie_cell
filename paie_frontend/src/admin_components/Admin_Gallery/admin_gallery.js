import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
import image from "../addingphotos/imageupload.jpeg";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
import Alert from "react-bootstrap/Alert";

export const AddGallery=()=>
{
    const[data,sdata]=useState([]);
    const[theme,stheme]=useState();
    const[file,sfile]=useState();
    const[load,sload]=useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let val2;

    const firebaseConfig = {
        apiKey: "AIzaSyBq36iHg3MK2o3acO9CEcK7FZkxaO3N490",
        authDomain: "paie-cell.firebaseapp.com",
        projectId: "paie-cell",
        storageBucket: "paie-cell.appspot.com",
        messagingSenderId: "616259866547",
        appId: "1:616259866547:web:85fdf8b0349cb2601e85c6",
        measurementId: "G-CNVYPEY493"
    };
    const app = initializeApp(firebaseConfig);
    const imgdb = getStorage(app);
    const Upload=async()=>
    {
       if(!theme||!file)
       {
        // alert("")
        setErrorMessage("All fields are required");
       }
       else
       {
        for(var i=0;i<file.length;i++)
        {
            sload(true)
            const imgref = ref(imgdb, `paiecell/Gallery/${theme}/${v4()}`);
            uploadBytes(imgref, file[i]).then((val) => {
                getDownloadURL(val.ref).then(async (url) => {
                    const name=imgref.name
                    await axios.post("https://paiecell.onrender.com/addgallery", { theme,name, url })
                        .then((res) => {
                            if (res.data) {
                                sload(false)
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                })
            })
        }
       }
    }
    const Deletephoto=async()=>
    {
        const storage = getStorage();
        const desertRef=ref(storage,`paiecell/Gallery/${file.val.Theme}/${file.val1.Name}`)
        deleteObject(desertRef) && axios.post("https://paiecell.onrender.com/deletegalleryphoto",{file})
        .then((res)=>
        {
            if(res.data)
            {
                // alert("Deleted");
                setSuccessMessage("Photo deleted successfully")
            }
            else
            {
                // alert("Try again");
                setErrorMessage("The photo was not successfully deleted; please attempt it again.")
            }
        })
        .catch((e)=>
        {
            console.log(e);
        })
    }
    useEffect(()=>
    {
        axios.post("https://paiecell.onrender.com/showgallery")
        .then((res)=>
        {
            sdata(res.data)
        })
        .catch((e)=>console.log(e));
    })
    return (
      <>
        <Head />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "720px", width: "100%" }}>
            <Alert
              variant="success"
              show={successMessage !== ""}
              onClose={() => setSuccessMessage("")}
              dismissible
              style={{ margin: "0 auto" }}
            >
              {successMessage}
            </Alert>
            <Alert
              variant="danger"
              show={errorMessage !== ""}
              onClose={() => setErrorMessage("")}
              dismissible
              style={{ margin: "0 auto" }}
            >
              {errorMessage}
            </Alert>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5% 0 0% 0%",
          }}
        >
          <select
            style={{ width: "20%", height: "5vh", margin: "0% 2% 0% 0%" }}
            onChange={(e) => {
              stheme(e.target.value);
            }}
          >
            <option>Select Theme</option>
            {data.map((val) => (
              <option>{val.Theme}</option>
            ))}
          </select>
          OR
          <input
            type="text"
            style={{ width: "20%", height: "5vh", margin: "0% 0% 0% 2%" }}
            placeholder="Enter photo Theme"
            onChange={(e) => {
              stheme(e.target.value);
            }}
          />
          <label
            style={{
              width: 70,
              height: 50,
              backgroundImage: `url(${image})`,
              backgroundSize: "70px 50px",
            }}
            for="photo"
          >
            {" "}
            <br />
            <br />
            <h5>select</h5>
          </label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            id="photo"
            style={{ display: "none" }}
            multiple
            onChange={(e) => sfile(e.target.files)}
          />
          {file ? <p>{file.length} Files Selected</p> : <b />}
        </div>
        <br />
        <br />
        <p style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>
          If you can create the theme then you can select only one file, else
          select from dropdown you can select multiple files
        </p>
        <div
          style={{ justifyContent: "center", display: "flex", padding: "1%" }}
        >
          <Button onClick={Upload}>{load ? "Uploading" : "Upload"}</Button>
        </div>
        <div>
          {data.map((val) => (
            <>
              <h1 style={{ textAlign: "center", color: "blue" }}>
                {val.Theme}
              </h1>
              {val.Photo.map((val1, index) => (
                <>
                  <img
                    width={150}
                    height={150}
                    src={val1.Link}
                    style={{ margin: "0 0 3% 10%" }}
                  />
                  <p style={{ display: "none" }}></p>
                  <Button
                    className="coruselbtn"
                    onClick={Deletephoto}
                    onClickCapture={() => {
                      sfile({ val, val1 });
                    }}
                  >
                    X
                  </Button>
                </>
              ))}
            </>
          ))}
        </div>
      </>
    );
}