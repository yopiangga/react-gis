import { BASE_URL } from "src/configs/url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class HomeServcies {
  async getTypeRecruitment() {
    try {
      const response = await axios.get(`${BASE_URL}/home/type-recruitment`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getTypeWork() {
    try {
      const response = await axios.get(`${BASE_URL}/home/type-work`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getTypeSalary() {
    try {
      const response = await axios.get(`${BASE_URL}/home/type-salary`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getState() {
    try {
      const response = await axios.get(`${BASE_URL}/home/state`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getCity() {
    try {
      const response = await axios.get(`${BASE_URL}/home/city`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getCountStudent() {
    try {
      const response = await axios.get(`${BASE_URL}/home/count-student`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getCountCompany() {
    try {
      const response = await axios.get(`${BASE_URL}/home/count-company`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getCountJob() {
    try {
      const response = await axios.get(`${BASE_URL}/home/count-job`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getCountPostActivity() {
    try {
      const response = await axios.get(`${BASE_URL}/home/count-post-activity`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
