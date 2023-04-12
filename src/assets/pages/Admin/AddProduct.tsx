import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input, message } from 'antd';

interface Iproduct{
  id: number , 
  name: string , 
  price: number ,
  description:string
}

interface Iprops{
 onAdd:(product:Iproduct) => void
}


const AddProduct = (props:Iprops) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
   props.onAdd( values) 

   navigate ("/admin")
   message.success("update thành công " , 2)

  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
    // const navigate = useNavigate()
    // const { register, handleSubmit } = useForm()
    
    // // const onHandleSubmit = (data) => {
    // //     props.onAdd(data );
    // //     navigate('/admin/products')
    // // }

  return (
    <div >    <h1>Them san pham </h1>
            <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 ,  margin:"0 auto" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Tên Sản Phẩm"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="description"
      name="description"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>
    

    
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default AddProduct