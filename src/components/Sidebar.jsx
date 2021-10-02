import React from 'react'
import "../styles/Sidebar.css"
import { AiFillCloseCircle } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
function Sidebar({isOpen,setisOpen}) 
{
       
    return (
        <div className="s_bar">
            
            
           <div id="close_icon" onClick={()=>setisOpen(!isOpen)}>
           <AiFillCloseCircle />
           </div>

            

            <div id="sidebar_items">
                <div className="sidebar_item">
                <a href="#project" className="icon_link"><AiFillProject /> &nbsp; Project</a>

                </div>
                <div className="sidebar_item">
                <a href="#skill" className="icon_link"><GiSkills />&nbsp; Skill</a>
                </div>
                <div className="sidebar_item">
                <a href="#work" className="icon_link"> <FaSuitcase/>&nbsp; Work</a>
                </div>
                <div className="sidebar_item">
                <a href="#contact" className="icon_link"><RiContactsFill />&nbsp; Contact</a>
                </div>
                
            </div>
            
            
            
        </div>
    )
}

export default Sidebar

