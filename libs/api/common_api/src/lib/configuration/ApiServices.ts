import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { handleError } from "../utils";


class ApiServices<Req, Res> {
  
  // Create a new Data
  async createData(url: string, Data: Req): Promise<Res> {
    try {
      const response: AxiosResponse<Res> = await axiosInstance.post(url, Data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  // Get all Data
  async getData(url: string): Promise<Res> {
    try {
      const response: AxiosResponse = await axiosInstance.get(url);
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }

  // Get an Data by ID
  async getDataById(url: string, id: string): Promise<Res> {
    try {
      const response: AxiosResponse = await axiosInstance.get(`${url}/${id}`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }

  // Update a data by ID
  async updateData(url: string, id: string, Data: Req): Promise<Res> {
    try {
      const response: AxiosResponse<Res> = await axiosInstance.patch(`${url}/${id}`, Data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  // Delete an Data by ID
  async deleteData(url: string, id: string): Promise<Res> {
    try {
      const response: AxiosResponse<Res> = await axiosInstance.delete(`${url}${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  // Change employee state to active from inactive
  async changeEmplyeeState(url: string, id: string): Promise<Res>{
    try{
      const response: AxiosResponse<Res> = await axiosInstance.patch(`${url}${id}`);
      console.log(response.data);
      return response.data;
    }catch(error){
      handleError(error);
    }
  }
}

export default ApiServices;
