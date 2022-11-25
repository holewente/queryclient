import axios from 'axios';
let url=""

export const checkUsername=async(formdata)=>{
    const response = await axios.post(url+'/auth/checkUsername', formdata)
    return await response
}
export const login=async(formdata)=>{
    const response = await axios.post(url+'/auth/login', formdata)
    return await response
}

export const checkEmail=async(formdata)=>{
    const response = await axios.post(url+'/auth/checkEmail', formdata)
    return await response
}
export const register=async(formdata)=>{
    const response = await axios.post(url+'/auth/register', formdata)
    return await response
}