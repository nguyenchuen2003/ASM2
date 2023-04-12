import instance, { token } from "./instance";


interface Iproduct{
    id: number , 
    name: string , 
    price: number ,
}
const getAllProduct = () => {
    return instance.get('/get');
}
const getOneProduct = () => {
    return instance.get('/getId/' + id);
}
const addProduct = (product:Iproduct) => {
    return instance.post('/add', product,{
        headers:{
            Authorization:`Bearer ${token} `
        }
    });
}
const updateProduct = (product:Iproduct) => {
    return instance.put('/update/' + product._id, product,{
        headers:{
            Authorization:`Bearer ${token} `
        }
    });
}
const deleteProduct = (id:number) => {
    return instance.delete('/delete/' + id,{
        headers:{
            Authorization:`Bearer ${token} `
        }
    });
}

export { getAllProduct, getOneProduct, addProduct, updateProduct, deleteProduct }