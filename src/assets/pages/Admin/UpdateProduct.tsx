import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';

interface Iproduct{
  id: number , 
  name: string , 
  price: number ,
  description:string
}

interface Iprops{
  products:Iproduct[],
  onUpdate:() => void
}



const UpdateProduct = ({onUpdate,products} : Iprops) => {

  const {id :_id} =useParams() ; 
  
  const navigate = useNavigate() ;


  const [product , setProduct] = useState<Iproduct>() 
  useEffect(()=>{
    const currentProduct =  products.find((product:Iproduct) => product._id == _id)
    setProduct(currentProduct)
  },[products])

  useEffect(() =>{
    setFields()
  },[product])
  const [form] = Form.useForm();
  const setFields = () => {// hàm này để set lại giá trị cho các input
    form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
        id: product?._id,
        name: product?.name,
        price: product?.price,
        description:product?.description
        
    })
}
  const onFinish = (values: any) => {
    // console.log({_id,...values});
    
    onUpdate({_id,...values}); 
    navigate('/admin')
   };
  //  const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
    // const navigate = useNavigate()
    // const { register, handleSubmit, reset } = useForm()
    // const { id } = useParams()
    // useEffect(() => {
    //     const currentProduct = props.products.find(item => item.id == id) 
    //     reset(currentProduct) 
    // }, [props])
    // const onHandleSubmit = (data) => {
    //     props.onUpdate(data);
    //     navigate('/admin/products')
    // }
  return (
    // <div>
    //         <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
    //             <input type="text" {...register('name')} />
    //             <input type="number" {...register('price')} />
    //             <button type="submit">Update</button>
    //         </form>
    // </div>
  <div >    <h1>Update sản phẩm  </h1>
    <Form
name="basic"
form = {form}
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
style={{ maxWidth: 600 ,  margin:"0 auto" }}
initialValues={{ remember: true }}
onFinish={onFinish}
// onFinishFailed={onFinishFailed}
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
update
</Button>
</Form.Item>
</Form>
</div>
  )
}

export default UpdateProduct