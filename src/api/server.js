import axios from "axios"

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000'

export const getProducts = () => {
	return axios.get(`${SERVER_URL}/products`)
}

export const getProductById = (id) => {
	return axios.get(`${SERVER_URL}/products/${id}`)
}
