import axios from "axios";

const baseURL = axios.create({baseURL:"https://api.etoolabs.com"})

export default baseURL