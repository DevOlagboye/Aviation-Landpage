import React from 'react'
import Memories1 from "../../Assets/images/Memories1.png"
import Memories2 from "../../Assets/images/Memories2.png"
import Memories3 from "../../Assets/images/Memories3.png"
import Memories4 from "../../Assets/images/Memories4.png"
import "./Memories.css"

const Memories = () => {
  return (
    <div className='memories-container'>
        <h4>Make Memories With Us</h4>
        <div className='memories-cards'>
            <div className='memory-card'>
                <img src={Memories1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Memories