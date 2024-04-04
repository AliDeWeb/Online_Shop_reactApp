import { CartProductBox } from "../../configs/Layout/Layout";

// Icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLessThan } from "react-icons/fa6";

// React Router
import { Link } from "react-router-dom";

// React Query
import { useQuery } from "react-query";

// Axios
import { getCartProducts } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function Cart() {
  const { userToken } = useUserToken();
  const { data, isLoading } = useQuery(
    `cartPage`,
    async () => {
      const res = await getCartProducts({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      console.log(res.data);
      return res.data;
    },
    {
      cacheTime: 30000,
      staleTime: 30000,
      refetchOnMount: true,
    }
  );

  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-6 lg:col-span-4">
            <div className="py-3 px-6 border-2 border-solid border-gray-400/50 rounded-lg flex flex-col gap-8">
              <div className="flex justify-between items-start font-dana text-gray-400 gap-1">
                <div className="flex flex-col">
                  <span className="md:text-xl text-zinc-700">سبد خرید</span>
                  <div className="flex items-center gap-1 text-sm md:text-base">
                    <span>1</span>
                    کالا
                  </div>
                </div>
                <div>
                  <HiOutlineDotsVertical size="1.4rem" color="rgb(63,63,70)" />
                </div>
              </div>
              <div className="divide-y divide-solid divide-gray-400/50">
                <CartProductBox />
                <CartProductBox />
                <CartProductBox />
                <CartProductBox />
              </div>

              <div className="flex justify-end font-dana text-sm text-orange-500">
                <Link to="/home" className="flex items-center gap-0.5">
                  ادامه خرید
                  <FaLessThan size="0.5rem" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div className="py-2 px-5 rounded-lg border-2 border-gray-400/50 border-solid font-dana text-sm text-zinc-700 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span>قیمت کالاها:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading && data?.totalPrice.toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>جمع سبد خرید:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading && data?.totalPriceAfterOff.toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-red-400">
                <span>سود شما از این خرید:</span>
                <span>
                  <span className="font-danaBold">
                    {!isLoading &&
                      (
                        data?.totalPrice - data?.totalPriceAfterOff
                      ).toLocaleString()}
                  </span>{" "}
                  <span>تومان</span>
                </span>
              </div>

              <div>
                <Link className="w-full font-danaBold sm:text-lg flex items-center justify-center bg-red-400 py-2 rounded-lg text-white transition-all hover:scale-95">
                  ادامه خرید
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
