import React from "react"
import "./style.css"
import logo from "./logo/logo.png"


const Header = ()=> {
    return(
        <section className="sectio">
            <div className="image">
                <img src={logo} alt="" width={150} />
            </div>
            <div className="links">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>FEEDBACK</li>
                </ul>
            </div>
        </section>
    )
}
export default Header