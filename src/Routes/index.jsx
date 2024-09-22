import React from "react";
import {Route,Routes} from 'react-router-dom'
import { Overview,Tickets,Agents,Articles,Contacts,Ideas,Settings,Subscription } from "../pages";


function Routers(){
    return(
        <div className="w-[80%]">
        <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/tickets" element={<Tickets/>}/>
            <Route path="/ideas" element={<Ideas/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/Agents" element={<Agents/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/subscription" element={<Subscription/>}/>
            <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
        </div>
    )
}

export default Routers