import axios from 'axios'

const config = {
  baseURL: 'https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getId() {
  const url = `./plant?id=${localStorage.getItem('id')}`
  return protocolo.get(url)
}