import axios from "axios";
import { ENDPOINTS } from "../constant/endpoint";



const ENV = process.env.NEXT_PUBLIC_API_URL

export const getUser = (args: any) => {
  return axios.get(`${ENV}${ENDPOINTS.USER.GET}`, { params: { ...args } });
};

export const getUserRepo = (url: string) => {
  return axios.get(url)
}

