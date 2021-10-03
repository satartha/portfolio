import React from 'react'
import "../styles/About.css"
import Social_info from './Social_info'

function About() {
    return (
        <section id="about" className="about_section">
            
            <div className="about-info">
                <div className="info-info">
                    <h4> I'm <span className="color">SATARTHA PRAKASH PARIDA</span>. <br></br>
                    <span className="color">Web</span> Developer and <span className="color">React Js</span>  Developer,<br/> 
                        expert in <span className="color">PHP</span> and <span className="color">MYSQL</span>. Knowledge in <span className="color">React Js</span> and <span className="color">JQuery</span>
                    </h4>

                </div>
                <div className="info-pic">
                 <img className="profile_img" src={require("../assets/code.png").default}></img>
                </div>

            </div>
            <div className="about-contact">
                     <Social_info />
            
            </div>

        </section>
    )
}

export default About
