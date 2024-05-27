import { useState } from "react"; // Icons
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdDelete, MdModeEdit } from "react-icons/md"; // Axios
import { removeAddress, updateAddress } from "../../configs/axios/axiosConfigs"; // Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken"; // SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; // React Hook Form
import { useForm } from "react-hook-form"; // Components
import { Modal } from "../../configs/Layout/Layout";

export default function AddressBox(props) {
  const showSwal = withReactContent(Swal);
  const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);
  const { userToken } = useUserToken();
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitAddressForm = (data) => {
    console.log(data.address);
    console.log(props.addressId);
    updateAddress({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: {
        address: data.address,
        addressID: props.addressId,
      },
    }).then(() => {
      setIsAddressModalOpen(false);
      refetch();
    });
  };

  return (
    <div className="py-5 items-center flex px-2 gap-4 relative">
      <dir className="absolute top-0 left-5">
        <button
          onClick={() => {
            setIsShowDeleteBox((prev) => !prev);
          }}
          className="text-zinc-700 p-1 rounded-full  transition-all hover:bg-black/5"
        >
          <HiOutlineDotsVertical />
        </button>
        {!!isShowDeleteBox && (
          <div className="absolute left-[10px] top-[25px] z-10 flex flex-col gap-2 py-2 px-3 rounded-lg backdrop-blur-md">
            <button
              onClick={() => setIsAddressModalOpen(true)}
              className="border border-solid border-gray-400 rounded-md py-1 px-2 text-sm flex items-center gap-1 font-dana text-zinc-700"
            >
              <MdModeEdit />
              ویرایش
            </button>
            <Modal isOpen={isAddressModalOpen} title={"ویرایش آدرس"}>
              <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
                <button
                  onClick={() => {
                    setIsAddressModalOpen(false);
                  }}
                >
                  <IoCloseCircleOutline size="1.5rem" />
                </button>
                <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                  ویرایش آدرس
                </h2>
              </div>
              <form
                onSubmit={handleSubmit(submitAddressForm)}
                className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4"
              >
                <label htmlFor="address" className="mb-1.5">
                  آدرس
                </label>
                <input
                  defaultValue={props.address}
                  {...register(`address`, {
                    required: "این فیلد نمیتواند خالی باشد",
                  })}
                  id="address"
                  type="text"
                  placeholder="ایران، تهران، انقلاب ..."
                  className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                />
                {errors.address && (
                  <span className="text-red-400 mb-4 text-xs sm:text-sm">
                    * {errors.address.message}
                  </span>
                )}

                <button
                  className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center"
                  type="submit"
                >
                  تایید
                </button>
              </form>
            </Modal>
            <button
              onClick={() => {
                showSwal
                  .fire({
                    title: "آیا از حذف آدرس اطمینان دارید؟",
                    icon: "question",
                    iconHtml: "؟",
                    confirmButtonText: "بله",
                    cancelButtonText: "خیر",
                    showCancelButton: true,
                    showCloseButton: true,
                  })
                  .then((res) => {
                    if (res.isConfirmed) {
                      removeAddress({
                        headers: {
                          Authorization: `Bearer ${userToken}`,
                        },
                        data: {
                          addressID: props.addressId,
                        },
                      }).then(() => {
                        props.refetch();
                      });
                    }
                  });
                setIsShowDeleteBox(false);
              }}
              className="border border-solid border-gray-400 rounded-md py-1 px-2 text-sm flex items-center gap-1 font-dana text-red-400"
            >
              <MdDelete />
              حذف
            </button>
          </div>
        )}
      </dir>
      <div>
        <div className="text-zinc-700 flex justify-center items-center">
          <CiLocationOn size="1.5rem" />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="font-dana">
          <div>
            <span>{props.username}</span> - <span>ایران</span>
          </div>
          <div className="mt-2 text-gray-400 text-sm">
            <p className="line-clamp-1">{props.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
