import React from 'react'
import "../styles/Project.css"
import { Project_data } from './data/Project_details'
//import {Button} from 'react-bootstrap'
function Project() {
    return (
        <section id="project" className="project_section">
            <h4 className="title_style">Project</h4>

            {
                Project_data.map((project, i) =>
                    <div className="project_ind" key={i}>
                        <h4 className="sub_heading">
                            {
                                project.name
                            }
                        </h4><br />
                        <div className="project_wrap">
                            <div className="project_info">
                                <div className="project_links">
                                    {
                                        project.links.map((lnk, j) =>
                                            <a href={lnk.link} key={j}>
                                                <div className="link_btn" >
                                                    {
                                                        lnk.name
                                                    }

                                                </div>
                                            </a>
                                        )
                                    }
                                </div>
                                <div className="project_description">
                                    <p>
                                        {
                                            project.description
                                        }
                                    </p>
                                </div>
                                <div className="project_skills">
                                    {
                                        project.tech.map((skill, i) =>

                                            <div className="skill_div" key={i}>
                                                {
                                                    skill
                                                }

                                            </div>

                                        )
                                    }
                                </div>

                            </div>
                            <div className="project_img">

                                <img src={project.image} className="p_image" alt="no such file"></img>

                            </div>
                        

                       </div>
                    </div>
                )
                
            }

        </section>
    )
}

export default Project
