import React from "react";
import Navbar from "./Compounds/Navbar/Navbar.js";
import Drop from "./Compounds/Navbar/Drop/Drop.js";
import Signup from "./Compounds/Signup/Signup.js";
import Animation from "./Compounds/Animation/Animation.js";
import Demo from "./Compounds/DemoPage/DemoPage.js";
import {Route,Routes} from "react-router-dom";


const App =()=>{
    
    const [hide, setHide] = React.useState(false);



    return (
        // <div>
        //     <Drop hide={hide}/>
        //     <Navbar setHide={setHide}/>
        //     <Signup />
        //     <Animation />
        //     <Demo />
        // </div>
        <Routes>
            <Route path="/" element={<Signup />}/>
            <Route path="/Demo" element={<Demo />}/>
        </Routes>
    )
}

export default App