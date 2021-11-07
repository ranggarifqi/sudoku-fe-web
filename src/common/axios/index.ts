import axios from "axios"

export const getAxiosInstance = () => {
  const username = import.meta.env.VITE_BASIC_AUTH_USERNAME
  const password = import.meta.env.VITE_BASIC_AUTH_PASSWORD

  const encoded = btoa(`${username}:${password}`)

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Authorization': `Basic ${encoded}`
    }
  })

  return instance
}