import axios from "axios"

export const APIClient = () => axios.create({
    baseURL: 'https://vote.sku-sku.com:8000',
    headers: {
        'Content-Type': 'application/json',
    }
})