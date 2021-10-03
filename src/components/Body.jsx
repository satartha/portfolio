import React from 'react'
import About from './About'
import Project from './Project'
import Skill from './Skill'
import "../styles/Body.css"
import Divider from './Divider'
import Contact from './Contact'
import Work from './Work'




function Body() {
    return (
        <div className="body-div">
            <About/>
            <Divider />
            <Project/>
            <Divider />
            <Skill />
            <Divider />
            <Work />
            <Divider />
            <Contact />
            

            
        </div>
    )
}

export default Body
