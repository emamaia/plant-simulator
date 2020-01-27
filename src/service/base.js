import axios from 'axios'

const config = {
  baseURL: 'https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPlants() {
  const url = `./front-plantTest-service?sun=${localStorage.getItem('sun')}&water=${localStorage.getItem('water')}&pets=${localStorage.getItem('pets')}`
  return protocolo.get(url)
}