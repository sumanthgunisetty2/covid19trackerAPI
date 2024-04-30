import axios from "axios";
import { useState } from "react";
import logo from './Logo/cvd2.jpg';

export default function Covid(){
     const [result, setResult] = useState(null)

     function handleDelete(event){
        alert(event.currentTarget.getAttribute("patient"))
        axios.delete('http://localhost:8081/delete',{params:{
            "name": event.currentTarget.getAttribute("patient")
       }}).then((response) => {
            console.log(response.data)
        })
     }

    if(result == null) {
    axios.get('http://localhost:8081/display').then((response) => {
        console.log(response.data);
        setResult(response.data);
    })
    return(
        <div>
            The COVID Data is Given Below
        </div>
    );
}
    else {
        return(
            <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
                <h1 
                style={{ textShadow: "1px 2px 2px black" ,color:"lightblue", fontSize:"25px" }}
                >The Covid-19 Data </h1>
                  <br/><br/>
           <table border="2" >
                    <tr>
                        <th style={{padding:'20px',backgroundColor:'lightblue'}}>Case no</th>
                        <th style={{padding:'20px',backgroundColor:'lightblue'}}>Patient Name</th>
                        <th style={{padding:'20px',backgroundColor:'lightblue'}}>Domain</th>
                        <th style={{padding:'20px',backgroundColor:'lightblue'}}>Country</th>
                        <th></th>
                    </tr>
                     {result.map((user) => {
                          return(
                            <tr>
                                <td style={{backgroundColor:'white',height:'15px',width:'150px',padding:'10px'}}>{user.cno}</td>
                                <td style={{backgroundColor:'white',height:'15px',width:'150px',padding:'10px'}}>{user.pname}</td>
                                <td style={{backgroundColor:'white',height:'15px',width:'150px',padding:'10px'}}>{user.domain}</td>
                                <td style={{backgroundColor:'white',height:'15px',width:'150px',padding:'10px'}}>{user.country}</td>
                                <td style={{backgroundColor:'white'}}> <button onClick={handleDelete} patient= {user.pname} > Remove</button></td>
                                
                            </tr>
              );
           })}
           </table>
           <p style={{ textShadow: "1px 2px 2px black" ,color:"lightblue", fontSize:"30px" }}>Total Cases:--     Total Deaths:--     Total Cured:--</p>               
            </div>
        )
    }

}