import React from 'react'
import {Skill_details} from "./data/Skill_details"
import "../styles/Skill.css"

function Skill() {
    return (
        <section id="skill" className="skill_section">
            <h4 className="title_style">Skill</h4>

            <div className="main_skill_div">
                {
                    Skill_details.map((item,i)=>
                    <div className="ind_skill" key={i}>
                        <div className="skill_name">
                        <h4 className="sub_heading">
                            {item.name}
                        </h4>
                        </div>

                        <div  className="skill_area">
                            {
                                item.value.map((ind,j)=>
                                
                                <div className="skill_card" key={j}>
                                    <img src={ind.LOGO} ></img>
                                    <h4>{ind.name}</h4>

                                </div>
                                
                                )
                            }
                        </div>
                    </div>
                    )
                }

            </div>
            
        </section>
    )
}

export default Skill
