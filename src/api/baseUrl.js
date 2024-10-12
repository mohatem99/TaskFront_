import axios from "axios"

const api = axios.create({
  baseURL: 'https://task-management-depi.vercel.app/api',
});

export default  api