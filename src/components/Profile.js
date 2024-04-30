import axios from 'axios';
import {useState} from 'react';
import logo from './Logo/profile.jpeg';

export default function Profile(){
   const [result, setResult] = useState(null);

   if(result == null){
        axios.get('http://localhost:8081/show').then((response) => {
            console.log(JSON.stringify(response.data));
            setResult(response.data);
        })
        return(
            <div>
                There is no Data to Display
            </div>
        );
   }
   else {
    return(
        <div 
        style={{
            backgroundImage: `url(${logo})`
        }}>
            <h1
            style={{ textShadow: "1px 2px 2px black" ,color:"lightgreen", fontSize:"25px",margin:'40px' }}
            >
             The Profile Data is Given Below
            </h1>
            <br/><br/>
           <table border="1">
                    <tr style={{padding:'20px'}}>
                        <th style={{padding:'20px',backgroundColor:'lightgreen'}}>Name</th>
                        <th style={{padding:'20px',backgroundColor:'lightgreen'}}>Email</th>
                        <th style={{padding:'20px',backgroundColor:'lightgreen'}}>Role</th>
                    </tr>
           {result.map((user) => {
              return(
                            <tr>
                                <td style={{backgroundColor:'white',height:'20px',width:'250px',padding:'10px'}}>{user.name}</td>
                                <td style={{backgroundColor:'white',height:'20px',width:'350px',padding:'10px'}}>{user.email}</td>
                                <td style={{backgroundColor:'white'}}>{user.role}</td>
                            </tr>
              );
           })}
           </table>
        </div>
    );
   } 
}