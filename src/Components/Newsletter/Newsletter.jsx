import React from 'react'
import "./Newsletter.css"
import {message} from "antd"
const Newsletter = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleNewsletter = (e) =>{
    e.preventDefault()
    messageApi
        .open({
          type: "loading",
          content: "Confirming",
          duration: 2.5,
        })
        .then(() => message.success("Thanks for subscribing...", 2.5))
  }
  return (
    <div className='newsletter-container'>
        <h4>Subscribe Newsletter & <br/> Get Latest News</h4>
        <form action='#'>
            <input type="email" name="" id="" placeholder="Enter your email address"/>
            {contextHolder}
            <button onClick={handleNewsletter}>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter