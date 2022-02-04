import React from "react";
import"./style.css"
import Image from "./banner/img.png";

const Banner =()=>{
    return(
        <div className="names">
            <div className="namesss">
               <h4>
                   Karahci IceCream
               </h4>
               <p>
                   Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Asperiores necessitatibus incidunt repudiandae, fuga natus cupiditate nihil illum fugit voluptatibus molestiae magni reiciendis animi,
                    veniam ipsa, aspernatur quibusdam quidem ad consectetur?
               </p>
            </div>
            <div className="images">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}
export default Banner