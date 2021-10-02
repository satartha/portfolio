import React from 'react'
import Social_info from './Social_info'
import "../styles/Contact.css"

import {ImDownload3} from 'react-icons/im'

function Contact() {
    return (
        <section id="contact">
            <h4 className="title_style">Contact</h4>
           <div className="contact_wrapper">

               <div className="social_wrapper">
                   <p>
                       Want to contact via any other social media platform,<br/> Please check it out
                   </p>
                   <Social_info />

               </div>
               <div className="resume_download_section">
                   
                   <a download href={require("../assets/resume/resume_satartha_prakash.pdf").default} className="resume_link"><ImDownload3/> Download Resume</a>

               </div>

           </div>

            
        </section>
    )
}

export default Contact
