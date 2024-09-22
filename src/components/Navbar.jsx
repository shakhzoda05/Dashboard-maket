import React from "react";
import {Link} from 'react-router-dom'
import SiteLogo from '../assets/images/logo.svg'

function Navbar(){
    return(
        <div className="w-[20%] h-[100vh] bg-[#363740]">
            <div className="pt-[37px] pl-[55px] pb-[59px]"> 
                <Link className="flex items-center space-x-3" to={'/'}>
                <img src={SiteLogo} alt="img" width={32} height={32}/>
                <p className="font-bold text-[19px] text-[#A4A6B3] opacity-70">Dashboard</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar