
import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Signin } from '../../../../api/user';
import { useNavigate } from 'react-router-dom';
const Sigin = () => {
const navigate = useNavigate()
  const onFinish =async (values: any) => {
    try {
    
    const {data} =await Signin(values);
    console.log(data);
    
    if(!data.data.user){
    console.log("huhuhuh")
    }else{
      message.success("Đăng nhập thành công")
      localStorage.setItem("user",JSON.stringify(data.data.user))  
      localStorage.setItem("token",JSON.stringify(data.data.accessToken))
      navigate("/admin")
    }
 
    
      
    } catch (error) {
      
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Sigin