import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import logo from './Logo/doc.jpg'; 

export default function Cases(){

    function handleSubmit(){
        console.log({
            pname: document.getElementById("idpname").value,
            cno: document.getElementById("idcno").value,
            country: document.getElementsByName("country")[0].value,
            domain: document.getElementsByName("domain")[0].value,

        })
        axios.post('http://localhost:8081/cases',{
            pname: document.getElementById("idpname").value,
            cno: document.getElementById("idcno").value,
            country: document.getElementsByName("country")[0].value,
            domain: document.getElementsByName("domain")[0].value,
         }).then((response) => {
            console.log(response.data);
         })
    }
    
    function handleUpdate (){
      axios.put('http://localhost:8081/cases',{
        pname: document.getElementById("idpname").value,
        cno: document.getElementById("idcno").value,
        country: document.getElementsByName("country")[0].value,
        domain: document.getElementsByName("domain")[0].value,
     }).then((response) => {
        console.log(response.data);
     })
    }


    return(
      <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <div>
          <h1 
          style={{ textShadow: "1px 2px 2px black" ,color:"black", fontSize:"35px",padding:'5px'}}
          >Cases Entry</h1>
            Patient Name: <input type="text" name="pname" id="idpname"
            style={{color:"black",
            backgroundColor:"white",
            width: '200px',
            height: '35px',
            fontSize: '20px',
            padding:'5PX',}}
            /><br/><br/>
            Case Number:<input type="text" name="cno" id="idcno"
            style={{color:"black",
            backgroundColor:"white",
            width: '200px',
            height: '35px',
            fontSize: '20px',
            padding:'5PX'
            }}
            /><br/><br/>
           Domain:
           <Select
                  id="iddomain"
                  label="Domain"
                  name="domain" 
                  defaultValue={"select"}
                >
                  <MenuItem value={"select"}>Select Domain</MenuItem>
                  <MenuItem value={"Deaths"}>Deaths</MenuItem>
                  <MenuItem value={"Infected"}>Infected</MenuItem>
                  <MenuItem value={"Cured"}>Cured</MenuItem>

            </Select><br/><br/>
            Country:
            <Select
                  id="idcountry"
                  label="Country"
                  name="country" 
                  defaultValue={"select"}
                >
                  <MenuItem value={"select"}>Select Country</MenuItem>
                  <MenuItem value={"Total Cases"}>World Wide</MenuItem>
                  <MenuItem value={"Australia"}>Australia</MenuItem>
                  <MenuItem value={"Brazil"}>Brazil</MenuItem>
                  <MenuItem value={"Canada"}>Canada</MenuItem>
                  <MenuItem value={"Dutch"}>Dutch</MenuItem>
                  <MenuItem value={"England"}>England</MenuItem>
                  <MenuItem value={"France"}>France</MenuItem>
                  <MenuItem value={"Georgia"}>Georgia</MenuItem>
                  <MenuItem value={"Holland"}>Holland</MenuItem>
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"Japan"}>Japan</MenuItem>
                  <MenuItem value={"Kenya"}>Kenya</MenuItem>
                  <MenuItem value={"Libya"}>Libya</MenuItem>
                  <MenuItem value={"Monacco"}>Monacco</MenuItem>
                  <MenuItem value={"Netherland"}>Netherland</MenuItem>
                  <MenuItem value={"Oman"}>Oman</MenuItem>
                  <MenuItem value={"Poland"}>Poland</MenuItem>
                  <MenuItem value={"Quatar"}>Quatar</MenuItem>
                  <MenuItem value={"Russia"}>Russia</MenuItem>
                  <MenuItem value={"San Marino"}>San Marino</MenuItem>
                  <MenuItem value={"Turkey"}>Turkey</MenuItem>
                  <MenuItem value={"Ukrain"}>Ukrain</MenuItem>
                  <MenuItem value={"Vietnam"}>Vietnam</MenuItem>
                  <MenuItem value={"West Indies"}>West Indies</MenuItem>
                  <MenuItem value={"Yemen"}>Yemen</MenuItem>
                  <MenuItem value={"Zimbabwe"}>Zimbabwe</MenuItem>
                </Select><br/><br/>
                <button style={{color:"black",
                            backgroundColor:"lightsteelblue",
                            width: '100px',
                            height: '35px',
                            fontSize: '18px',
                            padding:'5px',
                            marginRight: '20px'
                           }}  onClick={handleSubmit} > Submit </button>
               <button style={{color:"black",
                            backgroundColor:"lightsteelblue",
                            width: '100px',
                            height: '35px',
                            fontSize: '18px',
                            padding:'5px',
                            }}  onClick={handleUpdate} > Update </button>
        </div>
        </div>
    )
}