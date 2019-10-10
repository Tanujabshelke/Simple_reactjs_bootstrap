import React from "react"
import './index.css'

function Header() {
    return (
        <header >
            <img  style={{height :"80%",marginLeft:"10%", padding:"2%"}}
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            />
            <h1 className="text-white text-center p-4">Meme Generator</h1>
        </header>
    )
}

export default Header
