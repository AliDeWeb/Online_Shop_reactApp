import * as React from "react";

// components
import { ProductBox } from "../../configs/Layout/Layout";

// Mui
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Icons
import { GoFilter } from "react-icons/go";

// React Router
import { useParams } from "react-router-dom";

// React Query
import { useQuery } from "react-query";

// Axios
import { getSearchResult, apiUrl } from "../../configs/axios/axiosConfigs";

export default function Search() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const param = useParams();

  const { data, isLoading } = useQuery(
    `search/${param.searchValue}`,
    async () => {
      const result = await getSearchResult({
        url: `/${param.searchValue}`,
      });

      console.log(result.data);

      return result.data;
    }
  );

  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-3">
          <div className="hidden lg:block lg:col-span-1">
            <div className="flex flex-col gap-6">
              <div className="font-dana bg-white rounded-lg py-2 px-4">
                <h3 className="text-zinc-700 mb-4 text-base lg:text-lg">
                  دسته بندی محصولات
                </h3>
                <ul className="text-sm text-gray-400 flex flex-col gap-1.5 child:cursor-pointer list-disc child:mr-6">
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                </ul>
              </div>
              <div className="font-dana bg-white rounded-lg py-2 px-4">
                <h3 className="text-zinc-700 mb-4 text-base lg:text-lg">
                  دسته بندی برند ها
                </h3>
                <ul className="text-sm text-gray-400 flex flex-col gap-1.5 child:cursor-pointer list-disc child:mr-6">
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                  <li className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto">
                    لوازم خانگی
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <nav className="flex items-center gap-5 pb-4">
              <div className="text-gray-400">
                <GoFilter size="1.6rem" />
              </div>
              <ul className="flex flex-wrap items-center gap-2 child:sm:py-2 child:sm:px-4 child:py-1 child:px-2 child:rounded-lg child:bg-white font-dana text-xs  sm:text-sm text-gray-400 child:transition-all hover:child:bg-gray-400/50 hover:child:text-white child:cursor-pointer">
                <li>پیشفرض</li>
                <li>محبوب ترین</li>
                <li>ارزان ترین</li>
                <li>گران ترین</li>
              </ul>
            </nav>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 child:lg:col-span-1 child:col-span-4 child:sm:col-span-2">
              {!isLoading && data.length
                ? data.map((el) => {
                    return (
                      <div key={Math.random()}>
                        <ProductBox
                          id={el?.product?._id}
                          warranty={el?.product?.warranty[0]?.warrantyItem}
                          colorId={
                            el?.product?.colors?.length
                              ? el?.product?.colors[0]?._id
                              : []
                          }
                          sizeId={
                            el?.product?.sizes?.length
                              ? el?.product?.sizes[0]?._id
                              : []
                          }
                          cover={`${apiUrl}/${el?.product?.covers[0]}`}
                          title={el?.product?.title}
                          href={`product/${el?.product?.href}`}
                          discounted={
                            el?.product?.off
                              ? el?.product?.off
                              : el?.product?.colors[0]
                                ? el?.product?.colors[0]?.off
                                : el?.product?.sizes[0].off
                                  ? el?.product?.sizes[0].off
                                  : 0
                          }
                          price={
                            el?.product?.mainPrice
                              ? el?.product?.mainPrice
                              : el?.product?.colors[0]
                                ? el?.product?.colors[0]?.price
                                : el?.product?.sizes[0].price
                                  ? el?.product?.sizes[0].price
                                  : 0
                          }
                          num={el?.product?.Availability}
                          averageScore={4}
                        />
                      </div>
                    );
                  })
                : <h2 className="font-dana text-xl text-center">چیزی برای نمایش وجود ندارد</h2>}
            </div>
            <div className="items-center justify-center py-4" dir="rtl">
              <Stack
                className="flex items-center justify-center font-dana"
                spacing={2}
              >
                <Pagination
                  onChange={(e) => {
                    setCurrentPage(e.currentTarget.textContent);
                  }}
                  className="font-dana"
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  hidePrevButton
                  hideNextButton
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
