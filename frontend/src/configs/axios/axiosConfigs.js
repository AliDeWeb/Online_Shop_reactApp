// Swal
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const successSwal = (text, title = null) => {
  withReactContent(Swal).fire({
    title: title,
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
    successSwal(
      "بزن بریم محصولات شگفت انگیز این هفته رو ببینیم!",
      "خوش اومدی!"
    );
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
    successSwal("الان دیگه عضوی از مایی ;(", "خوش اومدی!");
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

//? Get Categories
export const getCategories = axios.create({
  baseURL: `${apiUrl}/v1/category-brand/category`,
});

//? Post Products To Cart
export const postProductsToCart = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}/v1/cart`,
});
postProductsToCart.interceptors.response.use(
  function (response) {
    successSwal(`محصول با موفقیت به سبد خرید اضافه شد`, null);
    return response;
  },
  function (error) {
    errorSwal(`لطفا وارد حساب کاربری خود شوید`);
    return Promise.reject(error);
  }
);

//? Get Cart Products
export const getCartProducts = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}/v1/cart`,
});
postProductsToCart.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(`لطفا وارد حساب کاربری خود شوید`);
    return Promise.reject(error);
  }
);

//? Post Email To Get Change Password Code
export const postUserEmailToChangePassword = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}/v1/users/forgetPassword/sendCode`,
});
postUserEmailToChangePassword.interceptors.response.use(
  function (response) {
    successSwal(`کد با موفقیت ارسال شد`);
    return response;
  },
  function (error) {
    errorSwal(error.message);
    return Promise.reject(error);
  }
);
//? Post Code To Get Change Password
export const postUserCodeToChangePassword = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}/v1/users/forgetPassword/getCode`,
});
postUserCodeToChangePassword.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error.response.data.message);
    return Promise.reject(error);
  }
);
//? Post New Password Change Password
export const postNewPasswordChangePassword = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}/v1/users/changePassword`,
});
postNewPasswordChangePassword.interceptors.response.use(
  function (response) {
    successSwal(`رمز عبور با موفقیت تغییر یافت`);
    return response;
  },
  function (error) {
    errorSwal(error.response.data.message);
    return Promise.reject(error);
  }
);
