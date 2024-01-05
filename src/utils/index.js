import {http} from './http'


const getBaseUrl = () => `${import.meta.env.VITE_FRONTEND_SERVER_ADDR}:${import.meta.env.VITE_FRONTEND_SERVER_PORT}/${import.meta.env.VITE_FRONTEND_SERVER_PREFIX}`
const getServerUrl = () => `${import.meta.env.VITE_BACKEND_SERVER_ADDR}:${import.meta.env.VITE_BACKEND_SERVER_PORT}`
const HTTP = new http();


export {HTTP, getBaseUrl, getServerUrl}