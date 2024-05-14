import { useEffect, useState } from "react";

// Axios
import {
  getUserPanelData,
  addNewAddress,
} from "../../configs/axios/axiosConfigs";

// React Hook Form
import { useForm } from "react-hook-form";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Icons
import { BiLocationPlus } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

// Components
import { AddressBox, Modal } from "../../configs/Layout/Layout";

export default function UserPanelAddresses() {
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const {
    data: userData,
    isLoading: isUserDataLoading,
    refetch,
  } = useQuery(
    `userPanelInfos`,
    async () => {
      if (userToken) {
        const res = await getUserPanelData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return res.data;
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
      initialData: () => {
        const data = queryClient.getQueryData(`userPanelInfos`);

        return data;
      },
    }
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = "تیمچه - آدرسها";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitAddressForm = (data) => {
    addNewAddress({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: {
        address: data.address,
      },
    }).then(() => {
      setIsAddressModalOpen(false);
      refetch();
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between px-2.5 font-dana mb-8">
        <div>
          <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
            آدرس ها
          </h2>
        </div>
        <div>
          <button
            onClick={() => {
              setIsAddressModalOpen(true);
            }}
            className="border border-solid border-orange-400 px-3 py-1.5 rounded-lg text-orange-400 text-sm flex items-center gap-1"
          >
            <BiLocationPlus size="1.2rem" />
            <span className="hidden sm:inline">ثبت آدرس جدید</span>
          </button>
          <Modal isOpen={isAddressModalOpen} title={"افزودن آدرس"}>
            <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
              <button
                onClick={() => {
                  setIsAddressModalOpen(false);
                }}
              >
                <IoCloseCircleOutline size="1.5rem" />
              </button>
              <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                افزودن آدرس
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
        </div>
      </div>
      <div className="divide-y divide-solid divide-gray-400/20">
        {!isUserDataLoading &&
          (userData?.user?.addresses.length ? (
            userData?.user?.addresses?.map((el) => (
              <div key={Math.random()}>
                <AddressBox
                  username={`${userData.user.firstName} ${userData.user.lastName}`}
                  address={el.address}
                  addressId={el._id}
                  refetch={refetch}
                />
              </div>
            ))
          ) : (
            <span className="text-lg block text-center font-danaBold text-red-400 col-span-4">
              آدرسی وجود ندارد
            </span>
          ))}
      </div>
    </div>
  );
}
