import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://api.jsonbin.io/v3/b'; // Replace with your actual API URL

export const apiRequest = {
  get<T>(url: string, params: object = {}): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${API_BASE_URL}${url}`, { params });
  },
  post<T>(url: string, data: object): Promise<AxiosResponse<T>> {
    return axios.post<T>(`${API_BASE_URL}${url}`, data);
  },
  put<T>(url: string, data: object): Promise<AxiosResponse<T>> {
    return axios.put<T>(`${API_BASE_URL}${url}`, data);
  },
  delete<T>(url: string): Promise<AxiosResponse<T>> {
    return axios.delete<T>(`${API_BASE_URL}${url}`);
  },
  // async get<T>(url: string, params: object = {}): Promise<AxiosResponse<T>> {
  //   // Example of additional logic where `await` might be used
  //   const response = await someOtherAsyncFunction();
  //   return axios.get<T>(`${API_BASE_URL}${url}`, { params });
  // }
};
