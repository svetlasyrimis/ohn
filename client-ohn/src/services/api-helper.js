import axios from 'axios';

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://blooming-tundra-33956.herokuapp.com/'


export const api = axios.create({
  baseURL: baseUrl
})
// const getToken = async () => {
//   const token = localStorage.getItem('jwt');
//   api.defaults.headers.common.authorization = `Bearer ${token}`;
// }

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  console.log(registerData)
  const resp = await api.post('/users/', { user: registerData })
  
  return resp.data
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  console.log(token)
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    console.log(resp.data)
    return resp.data
  }
  return false;
}