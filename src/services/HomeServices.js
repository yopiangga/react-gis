import { BASE_URL } from "src/configs/url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import axios from "axios";

export class HomeServcies {
  async getStatistics() {
    try {
      const response = await axios.get(`${BASE_URL}/home/statistics`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getCounts() {
    try {
      const response = await axios.get(`${BASE_URL}/home/counts`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
