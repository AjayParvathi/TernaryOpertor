import React, { useState } from "react";

const Ternary = () => {
    const[login, setLogin]= useState("false")
    
    return(
        <div>
            <center>
            <h1>Welcome</h1>
            <button onClick={(e)=> setLogin()}>
                {login ? ("login") : ("Logout")}</button><br/>
            
            {login ? (
              <p>welcome</p>  
            ):(<input type="text"/>)}<br/>
            </center>
            

            </div>
    );
};

export default Ternary;