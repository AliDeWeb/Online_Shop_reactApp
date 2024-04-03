// Swal
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const successSwal = (text) => {
  withReactContent(Swal).fire({
    title: "خوش اومدی!",
    text: text,
    icon: "success",
    timer: 2500,
    toast: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    animation: true,
    position: "top-right",
    showConfirmButton: false,
    timerProgressBar: true,
  });
};
const errorSwal = (text) => {
  withReactContent(Swal).fire({
    title: "متاسفیم!",
    text: text,
    icon: "error",
    timer: 2500,
    toast: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    animation: true,
    position: "top-right",
    showConfirmButton: false,
    timerProgressBar: true,
  });
};

// Axios
import axios from "axios";
export const apiUrl = "https://ma-api.liara.run";

//? Main Page Data
export const getMainPageData = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}/v1/product/mainPage`,
});
getMainPageData.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(`متاسفیم، خطایی رخ داد!!!`);
    return Promise.reject(error);
  }
);

//? User Validation
export const usersValidation = axios.create({
  baseURL: `${apiUrl}/v1/auth`,
  method: "POST",
});
usersValidation.interceptors.response.use(
  function (response) {
    successSwal("بزن بریم محصولات شگفت انگیز این هفته رو ببینیم!");
    document.cookie =
      "token=" +
      response.data.token +
      ";path=/;expires=" +
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toUTCString();

    return response;
  },
  function (error) {
    errorSwal(error.response.data.message);
    return Promise.reject(error);
  }
);

//? GetUserData
export const getUserData = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}/v1/users/getMe`,
});

//? NewLetter
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

//? Product Details
export const getProductsInfos = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}/v1/product`,
});
getProductsInfos.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(`متاسفیم، خطایی رخ داد!!!`);
    return Promise.reject(error);
  }
);
