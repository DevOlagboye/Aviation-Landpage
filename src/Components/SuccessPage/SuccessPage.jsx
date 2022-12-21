import React from 'react'
import {Alert} from 'antd'
import "./SucessPage.css"

const SuccessPage = () => {
  return (
    <div>
         <Alert
      message="Book Successful"
      description="Hi there, You've Successful booked your ticket kindly check your gmail for mor information from us"
      type="success"
      showIcon
    />
    </div>
  )
}

export default SuccessPage