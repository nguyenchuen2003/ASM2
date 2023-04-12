import instance from "./instance"


 export  const Sigup = (user: any) =>{
    return instance.post("/signup" , user) ; 
}


export const Signin = (user : any) =>{
    return instance.post("/signin",user)
}

