import { useRef } from "react";

// Axios
import { getUserData, addNewAddress } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Icons
import { BiLocationPlus } from "react-icons/bi";

// Components
import { AddressBox } from "../../configs/Layout/Layout";

// SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function UserPanelAddresses() {
  const showSwal = withReactContent(Swal);
  const { userToken } = useUserToken();
  const addressVal = useRef("");  const queryClient = useQueryClient();

  const {
    data: userData,
    isLoading: isUserDataLoading,
    refetch,
  } = useQuery(
    `userPanelData`,
    async () => {
      if (userToken) {
        const res = await getUserData({
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
      staleTime: 0,initialData: () => {
        const data = queryClient.getQueryData();

        return data;
      },
    }
  );

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
              showSwal
                .fire({
                  title: <i>آدرس خود را وارد نمایید</i>,
                  input: "text",
                  preConfirm: () => {
                    addressVal.current = Swal.getInput()?.value || "";
                  },
                })
                .then(async (res) => {
                  if (res.isConfirmed) {
                    await addNewAddress({
                      headers: {
                        Authorization: `Bearer ${userToken}`,
                      },
                      data: {
                        address: addressVal.current,
                      },
                    });

                    addressVal.current = ``;
                    refetch();
                  }
                });
            }}
            className="border border-solid border-orange-400 px-3 py-1.5 rounded-lg text-orange-400 text-sm flex items-center gap-1"
          >
            <BiLocationPlus size="1.2rem" />
            <span className="hidden sm:inline">ثبت آدرس جدید</span>
          </button>
        </div>
      </div>
      <div className="divide-y divide-solid divide-gray-400/20">
        {!isUserDataLoading &&
          userData?.addresses?.map((el) => (
            <div key={Math.random()}>
              <AddressBox
                username={`${userData.firstName} ${userData.lastName}`}
                address={el.address}
                addressId={el._id}
                refetch={refetch}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
