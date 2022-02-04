import React from "react";
import "./style.css"
import image from "./img/img.jpg"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Image =() =>{
      return(
          <div className="container">
              <img src={image}  height="500px" className="" alt="" />
          </div>
      )
}
export default Image