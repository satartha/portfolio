import React from 'react'
import {social_data} from "./data/Social_data"
import "../styles/social_info.css";
function Social_info() {
    return (
       
        <div className="social_section">
           {
              
                        social_data.map((item,i)=>
                        <a href={item.link} key={i}>
                            <img src={item.image} className='social_img'></img>
                        </a>
                       )
                   
                
           }
           
            
        </div>
    )
}

export default Social_info
