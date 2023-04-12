import React, { useEffect, useState } from 'react';
import { Space, Table, Tag ,Button} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../types/product';



interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
interface IProps {
  products: IProduct[],
  onRemove: (id: number) => void
}



const data: DataType[] = [
]


const ProductMangementPage = ({products, onRemove}:IProps) => {
  console.log(products);
  // return
  const [data,setData] = useState([])
  useEffect(()=>{
    const newData = products.map(item=> {
      return {
      key:item._id,
      name:item.name,
      price:item.price,
      description:item.description
     }
    })
    setData(newData)
  },[products])
  //  const data = products.map(item=> {
  //   return {
  //   key:item._id,
  //   name:item.name,
  //   price:item.price,
  //   description:item.description
  //  }
  // })
  // console.log(data);
  // return
   
  const removeProduct = (id:number)=>{
      onRemove(id)
      // console.log(id);
    
      
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
        render:(Text)=><a>{Text}</a>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'images',
      dataIndex: 'images',
      key: 'images',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'categoryId',
      dataIndex: 'categoryId',
      key: 'categoryId',
    },
    {
      title: 'Action',
      key: 'action',
      render: ( record) => (
        // console.log(record)
        
        <Space size="middle">
           <Space size="middle">
           <Button type="primary"    > <Link to={`/admin/products/${record.key}/update`}>update</Link></Button>
           <Button type="primary" onClick={() => removeProduct(record.key)}> remove </Button>
                </Space>
        </Space>
      ),
    },
  ];

  return (
    
    <div>
     <Link to={"/admin/products/add"}>  <Button type="dashed" >
          Thêm mới Sản Phẩm 
          </Button></Link>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ProductMangementPage