import React,{useState} from 'react'

import "../styles/Header.css"
import Sidebar from './Sidebar';

import { FaBars } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";

function Header() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="header-main" >
        
            
            <div>
                <h4>HEADER TITLE</h4>
            </div>
            <div className="navbar_project">
                <div className="cursor">
                   <a href="#project" className="icon_link"><AiFillProject /> <label>Project</label></a>
                </div>
                <div className="cursor">
                <a href="#skill" className="icon_link"><GiSkills /> <lable>Skill</lable></a>
                </div >
                <div className="cursor">
                <a href="#work" className="icon_link"> <FaSuitcase/> <label>Work</label></a>
                </div>
                <div className="cursor">
                <a href="#contact" className="icon_link"><RiContactsFill /> <label>Contact</label></a>
                </div>
                
            </div>
            <div className="side-bar-icon">
                <FaBars  onClick={()=>setisOpen(!isOpen)}/>
                </div>
            {
                isOpen?
                <div id="sidebar">

                    <Sidebar setisOpen={setisOpen} isOpen={isOpen}/>

                </div>
                :null
            }

            
        </div>
    )
}

export default Header
