import logo from './Logo/covid3.jpeg'
export default function Error(){
    return(
        <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <div
        style={{ textShadow: "3px 3px 3px black",color:"red", fontSize:"55px",padding:'150px' }}
        >
               Please Login
             To View This Page
        </div>
        </div>
    )
}