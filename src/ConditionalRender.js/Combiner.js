import React, { useState } from "react";
import Amazon from "./Amazon";
import Hotstar from "./Hotstar";

const Combiner = () => {
    const[login, SetLogin]= useState(<Amazon/>)
    // const[SignUp, SetSignUp]= useState(<Hotstar />)
    
    return(
        <div>

        <center>
        <button className="btn btn-primary btn-lg" onClick={()=> SetLogin(!login)}>
            {login ? "SignUp": "login"}
        </button>
        {/* <button onClick={()=> SetSignUp(!SignUp)}>
            {login ? "SignUp": "login"}
        </button> */}
        </center>
          {login ? (<Amazon />) : (<Hotstar />)}; 
          
        </div>
    );
};

export default Combiner;