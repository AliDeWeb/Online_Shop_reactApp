// Swal
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const successSwal = (text) => {
  withReactContent(Swal).fire({
    title: "خوش اومدی!",
    text: text,
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

// Axios
import axios from "axios";
const apiUrl = "https://ma-api.liara.run";

//? User Validation
export const usersValidation = axios.create({
  baseURL: `${apiUrl}/v1/auth`,
  method: "POST",
});
usersValidation.interceptors.response.use(
  function (response) {
    successSwal("بزن بریم محصولات شگفت انگیز این هفته رو ببینیم!");
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

// NewLetter
export const newLetter = axios.create({
  baseURL: `${apiUrl}/v1/newsletters`,
});
newLetter.interceptors.response.use(
  function (response) {
    successSwal("الان دیگه عضوی از مایی ;(");
    return response;
  },
  function (error) {
    errorSwal(`متاسفیم، خطایی رخ داد!!!`);
    return Promise.reject(error);
  }
);
