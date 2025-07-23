import React from "react";
import Navbar from "./Compounds/Navbar/Navbar.js";
import Drop from "./Compounds/Navbar/Drop/Drop.js";
import Signup from "./Compounds/Signup/Signup.js";
import Animation from "./Compounds/Animation/Animation.js";
import Demo from "./Compounds/DemoPage/DemoPage.js";
import {Route,Routes} from "react-router-dom";
import FrameMotion from "./Compounds/FrameMotion/FrameMotion.js";
import New from "./Compounds/New/New.js";


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
            <Route path="/" element={<Signup setHide={setHide}/>}/>
            <Route path="/Demo" element={<Demo />}/>
            <Route  path="/FrameMotion" element={<FrameMotion />}/>
            <Route  path="/New" element={<New />}/>
        </Routes>
    )
}

export default App