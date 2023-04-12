import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import React, {useState, useEffect} from 'react'
import HomePages from './assets/pages/HomePages'
import Product from './assets/pages/Product'
import ProductDetail from './assets/pages/productDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct  } from './api/product'
import AddProduct from './assets/pages/Admin/AddProduct'
import ProductMangementPage from './assets/pages/Admin/ProductMangementPage'
import Web from './assets/pages/layouts/Web'
import Admin from './assets/pages/layouts/Admin'
import UpdateProduct from './assets/pages/Admin/UpdateProduct'
import AdminHomepage from './assets/pages/Admin/AdminHomepage'
import Item from 'antd/es/list/Item'
import { IProduct } from './types/product'
import Sigin from './assets/pages/Admin/sign/Sigin'
import Signup from './assets/pages/Admin/sign/Signup'
import { Sigup,  } from './api/user'




function App(){
  const [products, setProduct] = useState([])
  useEffect(() => {
    (async()=>{
      await getAllProduct().then(({data})=>setProduct(data.data) )

    })()
  },[])

  const onHandleRemove = (id:number) => {

    deleteProduct(id).then(() => setProduct(products.filter((item: IProduct)=> item._id !== id))) 
  }
  const onHandleAdd = (product:IProduct) => {
    
    addProduct(product).then(() =>getAllProduct().then(({data})=> setProduct(data.data)))
  }
  const addUser =  (user:any) =>{
    Sigup(user)
  }

  const onHandleUpdate = (product:IProduct) => {
    // console.log(product);
    
    updateProduct(product).then(() => getAllProduct().then(({data})=> setProduct(data.data)))
  }
   return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path='/' element={<Web />}>
            <Route index element={<HomePages />} />
            <Route path='sigup' element= { <Signup onAddUser={addUser} />} />
            <Route path='sigin' element={ < Sigin/>} />
            <Route path='products/:id' element={<ProductDetail products={products} />} />
          </Route>

          <Route path='/admin' element={<Admin />}>
            
           
              <Route index element={<ProductMangementPage  products={products}   onRemove={onHandleRemove}/>} />
              <Route path='products/add' element={<AddProduct onAdd={onHandleAdd} />} />
              <Route path='products/:id/update' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
           
          </Route>
        </Routes>
</BrowserRouter>
     
    </div>
  )
}
export default App
