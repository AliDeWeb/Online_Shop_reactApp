import axios from "axios";

const apiUrl = "https://ma-api.liara.run";

export const usersValidation = axios.create({
  baseURL: `${apiUrl}/v1/auth`,
  method: "POST",
});
