import React from "react";
import Navbar from "./Compounds/Navbar/Navbar.js";
import Drop from "./Compounds/Navbar/Drop/Drop.js";
import Signup from "./Compounds/Signup/Signup.js";


const App =()=>{
    
    const [hide, setHide] = React.useState(false);



    return (
        <div>
            <Drop hide={hide}/>
            <Navbar setHide={setHide}/>
            <Signup />
        </div>
    )
}

export default App