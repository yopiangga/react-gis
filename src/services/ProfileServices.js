import axios from "axios";
import { BASE_URL } from "src/configs/url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import { headers } from "./config";

export class ProfileServices {
  async getProfile() {
    try {
      const response = await axios.get(`${BASE_URL}/profile`, {headers});
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
