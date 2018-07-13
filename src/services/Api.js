import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/group?id=2650225,2673730&units=metric&APPID=2224f0fb90f0d015e442ca2c30f99d9d',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
