// Swal
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// Axios
import axios from "axios";

const successSwal = (text, title = null) => {
  withReactContent(Swal).fire({
    title: title,
    text: text,
    icon: "success",
    timer: 1000,
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

export const apiUrl = "https://ma-api.liara.run";
const version = `/v2`;

//? Main Page Data
export const getStoreInfo = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/infos/storeInfo`,
});
getStoreInfo.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Main Page Data
export const getMainPageData = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/infos/mainPage`,
});
getMainPageData.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? User Validation
export const usersValidation = axios.create({
  baseURL: `${apiUrl}${version}/auth`,
  method: "POST",
});
usersValidation.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    if (response.data.token) {
      document.cookie =
        "token=" +
        response.data.token +
        ";path=/;expires=" +
        new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toUTCString();
    }
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Admin Email Validation
export const adminEmailValidation = axios.create({
  baseURL: `${apiUrl}${version}/auth/loginAdmin`,
  method: "POST",
});
adminEmailValidation.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    if (response.data.token) {
      document.cookie =
        "token=" +
        response.data.token +
        ";path=/;expires=" +
        new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toUTCString();
    }
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? GetUserData
export const getUserData = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/users/getMe`,
});

//? NewLetter
export const newLetter = axios.create({
  baseURL: `${apiUrl}${version}/newsletters`,
});
newLetter.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Product Details
export const getProductsInfos = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/product`,
});
getProductsInfos.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Categories
export const getCategories = axios.create({
  baseURL: `${apiUrl}${version}/category-brand/category`,
});

//? Get Categories
export const getBrands = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/category-brand/brand`,
});

//? Post Products To Cart
export const postProductsToCart = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/cart`,
});
postProductsToCart.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Cart Products
export const getCartProducts = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/cart`,
});
getCartProducts.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Post Email To Get Change Password Code
export const postUserEmailToChangePassword = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/users/forgetPassword/sendCode`,
});
postUserEmailToChangePassword.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Post Code To Get Change Password
export const postUserCodeToChangePassword = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/users/forgetPassword/getCode`,
});
postUserCodeToChangePassword.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Post New Password Change Password
export const postNewPasswordChangePassword = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/users/changePassword`,
});
postNewPasswordChangePassword.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Search Result
export const getSearchResult = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/search/filtering?isAvailable=0`,
});
getSearchResult.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Add A New Address
export const addNewAddress = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/users/address`,
});
addNewAddress.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Remove A Address
export const removeAddress = axios.create({
  method: `DELETE`,
  baseURL: `${apiUrl}${version}/users/address`,
});
removeAddress.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Remove A Address
export const updateAddress = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/users/address`,
});
updateAddress.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Add New Order
export const addNewOrder = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/order/addToOrders`,
});
addNewOrder.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Discounted Code
export const DiscountedCode = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/offs`,
});
DiscountedCode.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Payment Status
export const getPaymentStatus = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/order/verify`,
});

//? Get Menus
export const getMenus = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/menu`,
});

//? Post Favorites Product
export const postFavoriteProduct = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/favorite`,
});
postFavoriteProduct.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get User Panel Data
export const getUserPanelData = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/infos/userPanel`,
});
getUserPanelData.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Add Comment
export const addComment = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/comments`,
});
addComment.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Delete Comment
export const deleteComment = axios.create({
  method: `DELETE`,
  baseURL: `${apiUrl}${version}/comments/user`,
});
deleteComment.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Edit Comment
export const editComment = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/comments/edit`,
});
editComment.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Update Wallet
export const updateWallet = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/wallet`,
});
updateWallet.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? User Update
export const updateUser = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/users/`,
});
updateUser.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Update Notification Seen Status
export const updateNotificationSeenStatus = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/notification/user`,
});
updateNotificationSeenStatus.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Delete Notification Seen Status
export const deleteNotificationSeenStatus = axios.create({
  method: `DELETE`,
  baseURL: `${apiUrl}${version}/notification/user`,
});
deleteNotificationSeenStatus.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Orders Status
export const getOrdersStatus = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/order/getOneOrder/user`,
});
getOrdersStatus.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Admin Panel Users
export const getAdminPanelUsers = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/infos/usersPage`,
});
getOrdersStatus.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Send Group Emails To Users
export const sendGroupEmailsToUsers = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/users/sendEmailToGroup`,
});
sendGroupEmailsToUsers.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Ban Users
export const BanUsers = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/users/banGroup`,
});
BanUsers.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Get Admin Notifications
export const getAdminNotifications = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/notification`,
});
getAdminNotifications.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);

//? Add New Todo
export const addNewTodo = axios.create({
  method: `POST`,
  baseURL: `${apiUrl}${version}/todoList`,
});
addNewTodo.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Get Todos
export const getTodos = axios.create({
  method: `GET`,
  baseURL: `${apiUrl}${version}/todoList`,
});
getTodos.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Delete Todos
export const deleteTodos = axios.create({
  method: `DELETE`,
  baseURL: `${apiUrl}${version}/todoList`,
});
deleteTodos.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Update Todos Status
export const updateTodosStatus = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/todoList`,
});
updateTodosStatus.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
//? Update Todos Content
export const updateTodosContent = axios.create({
  method: `PUT`,
  baseURL: `${apiUrl}${version}/todoList`,
});
updateTodosContent.interceptors.response.use(
  function (response) {
    successSwal(response?.data?.message);
    return response;
  },
  function (error) {
    errorSwal(error?.response?.data?.message);
    return Promise.reject(error);
  },
);
