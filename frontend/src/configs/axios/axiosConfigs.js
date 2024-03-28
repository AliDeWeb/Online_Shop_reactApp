import axios from "axios";

//? Swal
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const successSwal = () => {
  withReactContent(Swal).fire({
    title: "خوش اومدی!",
    text: "بزن بریم محصولات شگفت انگیز این هفته رو ببینیم!",
    icon: "success",
  });
};
const errorSwal = (text) => {
  withReactContent(Swal).fire({
    title: "متاسفیم!",
    text: text,
    icon: "error",
  });
};

const apiUrl = "https://ma-api.liara.run";

export const usersValidation = axios.create({
  baseURL: `${apiUrl}/v1/auth`,
  method: "POST",
});

usersValidation.interceptors.response.use(
  function (response) {
    successSwal();
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      errorSwal(error.response.data.message);
    } else {
      errorSwal(`متاسفیم، خطایی رخ داد!!!`);
    }
    return Promise.reject(error);
  }
);
