import axios from "axios";

export const AuthLogin = (data, callback) => {
  axios.post('https://fakestoreapi.com/auth/login', data)
    .then((res) => { 
      callback(true, res.data.token)
    }).catch((err) => {
      callback(false, err)
    })
}