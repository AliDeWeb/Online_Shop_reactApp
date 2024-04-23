import { useState } from "react";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

// Axios
import { removeAddress } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function AddressBox(props) {
  const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);
  const { userToken } = useUserToken();

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
          <div className="absolute left-[10px] top-[25px] bg-gray-100 z-10">
            <button
              onClick={() => {
                removeAddress({
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                  data: {
                    addressID: props.addressId,
                  },
                }).then(()=> {
                  props.refetch()
                })
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
      <div>
        <div className="font-dana">
          <div>
            <span>{props.username}</span> - <span>ایران</span>
          </div>
          <div className="mt-2 text-gray-400 text-sm">
            <p>{props.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
