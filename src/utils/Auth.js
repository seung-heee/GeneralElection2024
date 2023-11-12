import axios from "axios"

export const APIClient = () => axios.create({
    baseURL: 'https://vote.sku-sku.com',
    headers: {
        'Content-Type': 'application/json',
    }
})