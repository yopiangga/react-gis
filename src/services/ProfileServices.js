import { BASE_URL } from "src/configs/url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class ProfileServices {
  async getProfile() {
    try {
      const response = await axios.get(`${BASE_URL}/profile`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
