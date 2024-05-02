import { BASE_URL } from "src/configs/url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class MapServices {
  async getCompanies() {
    try {
      const response = await axios.get(`${BASE_URL}/map/companies`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
