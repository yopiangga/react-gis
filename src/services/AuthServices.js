import axios from "axios";
import { BASE_URL } from "src/configs/url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class AuthServices {
  async SignIn({ email, password }) {
    try {
      const res = await axios.post(`${BASE_URL}/auth/sign-in`, {
        email: email,
        password: password,
      });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async SignUp({name, email, password }) {
    try {
      const res = await axios.post(`${BASE_URL}/auth/sign-up`, {
        name: name,
        email: email,
        password: password,
      });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }
}
