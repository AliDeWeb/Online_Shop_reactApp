import { useEffect, useState } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// React Spinners
import ClipLoader from "react-spinners/ClipLoader";

// Swal
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Icons
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuBan } from "react-icons/lu";

// Mui
import { DataGrid } from "@mui/x-data-grid";
const tableHead = [
  { field: "id", headerName: "شناسه", width: 110 },
  {
    field: "fullName",
    headerName: "نام",
    description: "این ستون قابل مرتب سازی نیست.",
    sortable: false,
    width: 140,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "ایمیل",
    width: 250,
    description: "این ستون قابل مرتب سازی نیست.",
    sortable: false,
  },
  {
    field: "phone",
    headerName: "شماره تلفن",
    width: 160,
    description: "این ستون قابل مرتب سازی نیست.",
    sortable: false,
  },
  {
    field: "totalPayments",
    headerName: "مبلغ خرید",
    width: 110,
  },
  {
    field: "totalProfit",
    headerName: "مبلغ سود",
    width: 110,
  },
  {
    field: "orderCount",
    headerName: "سفارشات",
    width: 80,
  },
];

// React Spinners
import BeatLoader from "react-spinners/BeatLoader";

// Axios
import {
  getAdminPanelUsers,
  sendGroupEmailsToUsers,
  BanUsers,
} from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Components
import { Modal } from "../../configs/Layout/Layout";

export default function AdminPanelUsers() {
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

  const { userToken } = useUserToken();

  const [users, setUsers] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isBanModalOpen, setIsBanModalOpen] = useState(false);
  const [isDataFetching, setIsDataFetching] = useState(false);

  const { isLoading, refetch } = useQuery(
    `adminPanelUsers`,
    async () => {
      const res = await getAdminPanelUsers({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUsers(() =>
        res.data.map((el, index) => ({
          ...el,
          id: index + 1,
          totalProfit: el.totalProfit ? el.totalProfit.toLocaleString() : `-`,
          orderCount: el.orderCount ? el.orderCount.toLocaleString() : `-`,
          totalPayments: el.totalPayments
            ? el.totalPayments.toLocaleString()
            : `-`,
        }))
      );
      return res.data;
    },
    {
      cacheTime: 800000,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    document.title = "تیمچه - کاربران";
    document.documentElement.scrollTop = 0;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitEmailForm = (data) => {
    setIsDataFetching(true);

    let emailData = {
      subject: data.emailTitle,
      text: data.emailText,
      emails: (() => {
        const emails = [];
        selectedCells.forEach((el) => {
          emails.push(el[0].email);
        });

        return emails;
      })(),
      link: data?.emailLink,
    };

    if (emailData.emails.length > 25) {
      errorSwal(`افراد انتخاب شده باید کمتر از 25 عدد باشند!`);
    } else {
      sendGroupEmailsToUsers({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        data: emailData,
      })
        .then(() => {
          setIsEmailModalOpen(false);
        })
        .finally(() => {
          setIsDataFetching(false);
        });
    }
  };
  const submitBanForm = (e) => {
    e.preventDefault();
    setIsDataFetching(true);

    let phoneData = {
      phoneNumbers: (() => {
        const phoneNumbers = [];
        selectedCells.forEach((el) => {
          phoneNumbers.push(el[0].phone);
        });

        return phoneNumbers;
      })(),
    };

    BanUsers({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: phoneData,
    })
      .then(() => {
        setIsBanModalOpen(false);
        refetch();
      })
      .finally(() => {
        setIsDataFetching(false);
      });
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-2.5 font-dana mb-4">
          <div>
            <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
              کاربران
            </h2>
          </div>
        </div>
        <div>
          <nav>
            <ul className="active-orders-page-wrapper flex items-center gap-2 font-dana overflow-auto">
              <li>
                <button
                  onClick={() => {
                    setIsEmailModalOpen(true);
                  }}
                  to="/user-panel/orders/processingOrders"
                  className="flex items-center gap-1 text-zinc-700 my-2 py-1 px-1 text-sm sm:text-base w-max font-dana rounded-md relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:hover:w-full before:w-0 before:rounded-lg before:transition-all"
                >
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                  ارسال ایمیل
                </button>
                <Modal isOpen={isEmailModalOpen} title={"ارسال ایمیل"} changeVisibility={setIsEmailModalOpen}>
                  <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
                    <button
                      onClick={() => {
                        setIsEmailModalOpen(false);
                      }}
                    >
                      <IoCloseCircleOutline size="1.5rem" />
                    </button>
                    <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                      ارسال ایمیل به کاربران انتخاب شده
                    </h2>
                  </div>
                  <form
                    onSubmit={handleSubmit(submitEmailForm)}
                    className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4"
                  >
                    <label htmlFor="emailTitle" className="mb-1.5">
                      موضوع
                    </label>
                    <input
                      {...register(`emailTitle`, {
                        required: "این فیلد نمیتواند خالی باشد",
                      })}
                      id="emailTitle"
                      type="text"
                      placeholder="جشنواره تخفیف ..."
                      className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                    />
                    {errors.emailTitle && (
                      <span className="text-red-400 mb-4 text-xs sm:text-sm">
                        * {errors.emailTitle.message}
                      </span>
                    )}
                    <label htmlFor="emailText" className="mb-1.5">
                      متن ایمیل
                    </label>
                    <textarea
                      {...register(`emailText`, {
                        required: "این فیلد نمیتواند خالی باشد",
                      })}
                      id="emailText"
                      type="text"
                      placeholder="متن را وارد نمایید ..."
                      className="h-[80px] font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                    />
                    {errors.emailText && (
                      <span className="text-red-400 mb-4 text-xs sm:text-sm">
                        * {errors.emailText.message}
                      </span>
                    )}
                    <label htmlFor="emailLink" className="mb-1.5">
                      افزودن لینک (اختیاری)
                    </label>
                    <input
                      dir="ltr"
                      {...register(`emailLink`)}
                      id="emailLink"
                      type="text"
                      placeholder="www.example.com"
                      className="direction-ltr font-poppins mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                    />
                    {errors.emailLink && (
                      <span className="text-red-400 mb-4 text-xs sm:text-sm">
                        * {errors.emailLink.message}
                      </span>
                    )}
                    <button
                      className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center"
                      type="submit"
                    >
                      {isDataFetching ? (
                        <ClipLoader color="#d97706" size="18" />
                      ) : (
                        "بزن بریم..."
                      )}
                    </button>
                  </form>
                </Modal>
              </li>
              <li>
                <button
                  to="/user-panel/orders/processingOrders"
                  className="flex items-center gap-1 text-zinc-700 my-2 py-1 px-1 text-sm sm:text-base w-max font-dana rounded-md relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:hover:w-full before:w-0 before:rounded-lg before:transition-all"
                  onClick={() => {
                    setIsBanModalOpen(true);
                  }}
                >
                  <span>
                    <LuBan />
                  </span>
                  بن کردن کاربر / کاربران
                </button>
                <Modal isOpen={isBanModalOpen} title={"ارسال ایمیل"} changeVisibility={setIsBanModalOpen}>
                  <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
                    <button
                      onClick={() => {
                        setIsBanModalOpen(false);
                      }}
                    >
                      <IoCloseCircleOutline size="1.5rem" />
                    </button>
                    <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                      بن کردن کاربران انتخاب شده
                    </h2>
                  </div>
                  <form
                    onSubmit={submitBanForm}
                    className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4"
                  >
                    <label className="mb-1.5">آیا مطمئن هستید؟</label>

                    <button
                      className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center"
                      type="submit"
                    >
                      {isDataFetching ? (
                        <ClipLoader color="#d97706" size="18" />
                      ) : (
                        "بن کردن ..."
                      )}
                    </button>
                  </form>
                </Modal>
              </li>
            </ul>
          </nav>
        </div>
        {!isLoading ? (
          <div
            className="table-container"
            style={{ width: "100%", overflowX: `auto` }}
          >
            <div
              className="users-table-wrapper"
              style={{ width: "max-content" }}
            >
              <DataGrid
                rows={users}
                columns={tableHead}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 12 },
                  },
                }}
                pageSizeOptions={[5, 12, 25, 50, 100]}
                checkboxSelection
                onRowSelectionModelChange={(cell) => {
                  setSelectedCells([]);
                  cell.forEach((el) => {
                    setSelectedCells((priv) => {
                      return [
                        ...priv,
                        users.filter((user) => {
                          return el === user.id;
                        }),
                      ];
                    });
                  });
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[200px] text-teal-600">
            <BeatLoader color="rgb(13, 148, 136)" />
          </div>
        )}
      </div>
    </div>
  );
}
