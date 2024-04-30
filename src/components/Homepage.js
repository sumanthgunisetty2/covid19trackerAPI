import logo from './Logo/covid4.jpg'; 

export default function Error(){
    return(
       <div
       style={{
           backgroundImage: `url(${logo})`,
           backgroundSize: 'cover',
           minHeight: '100vh',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
       }}
       >
        <p  style={{ textShadow: "3px 3px 3px black",color:"white",fontFamily:'bold italic', fontSize:"75px",padding:'50px' }}>Home</p>
         <href style={{ textShadow: "3px 3px 3px black",color:"white",fontFamily:'bold italic', fontSize:"75px",padding:'50px' }}>Cases</href>
        <href  style={{ textShadow: "3px 3px 3px black",color:"white",fontFamily:'bold italic', fontSize:"75px",padding:'50px' }}>Profiles</href>
        </div>
    )

}