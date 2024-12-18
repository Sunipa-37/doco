import { Form } from 'antd';
import React from 'react';

import "../styles/RegisterStyle.css";

const register = () => {


  const onFinishHandler = (values) =>{
    console.log(values)
  }
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="card">
        <h3>register form</h3>
        <Form.Item label="Name" name="name" >
          <input type="text" required/>
        </Form.Item>
        <Form.Item label="Email" name="email" >
          <input type="email" required/>
        </Form.Item>
        <Form.Item label="Password" name="password" >
          <input type="password" required/>
        </Form.Item>
        <button className="btn btn-primary" type ="submit">register</button>
      </Form>
    </div>
  )
}

export default register
