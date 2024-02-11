import axios from "axios";
import {baseURL} from "../constans/urls";

const axiosInstance = axios.create({baseURL});

export {axiosInstance};