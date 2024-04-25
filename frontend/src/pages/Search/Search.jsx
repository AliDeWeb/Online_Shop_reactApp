import { useState, useEffect } from "react";

// components
import { ProductBox } from "../../configs/Layout/Layout";

// Icons
import { GoFilter } from "react-icons/go";

// React Router
import { Link,useParams } from "react-router-dom";

// React Query
import { useQuery  } from "react-query";

// Axios
import {
  getSearchResult,
  apiUrl,
  getCategories,
  getBrands,
} from "../../configs/axios/axiosConfigs";

export default function Search() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const param = useParams()

  const [searchUrlSort, setSearchUrlSort] = useState(`popular`);

  const { data, isLoading, refetch } = useQuery(
    `search/${param.searchValue}${searchUrlSort}`,
    async () => {
      const result = await getSearchResult({
        url: `&keyword=${param.searchValue}&sort=${searchUrlSort}`,
      });

      console.log(result.data);

      return result.data;
    },
    {
      staleTime: 30000,
    }
  );

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
    getBrands().then((res) => {
      setBrands(res.data);
    });

    setSearchUrlSort(`popular`);
    console.log(param);
  }, []);

  useEffect(() => {
    refetch();
  }, [searchUrlSort]);

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
                  {!!categories.length &&
                    categories.map((el) => (
                      <li
                        key={Math.random()}
                        className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto"
                      >
                        <Link
                          className="flex items-center justify-between font-dana"
                          to={`/search/${el.title}`}
                        >
                          {el.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="font-dana bg-white rounded-lg py-2 px-4">
                <h3 className="text-zinc-700 mb-4 text-base lg:text-lg">
                  دسته بندی برند ها
                </h3>
                <ul className="text-sm text-gray-400 flex flex-col gap-1.5 child:cursor-pointer list-disc child:mr-6">
                  {!!brands.length &&
                    brands.map((el) => (
                      <li
                        key={Math.random()}
                        className="transition-all hover:text-orange-400 relative before:content-[''] before:absolute before:w-0 hover:before:w-3 before:transition-all hover:pr-5 before:h-[0.18rem] before:rounded-lg before:bg-orange-400 before:top-0 before:right-0 before:bottom-0 before:my-auto"
                      >
                        <Link
                          className="flex items-center justify-between font-dana"
                          to={`/search/${el.title}`}
                        >
                          {el.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <nav className="flex items-center gap-5 pb-4">
              <div className="text-gray-400">
                <GoFilter size="1.6rem" />
              </div>
              <ul className="flex flex-wrap items-center gap-2 child:sm:py-2 child:sm:px-4 child:py-1 child:px-2 child:rounded-lg child:bg-white font-dana text-xs  sm:text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`popular`);
                    }}
                  >
                    پیشفرض
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`off`);
                    }}
                  >
                    بیشترین تخفیف
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`expensive`);
                    }}
                  >
                    گران ترین
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSearchUrlSort(`mostBuy`);
                    }}
                  >
                    بیشترین خریدار
                  </button>
                </li>
              </ul>
            </nav>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 child:lg:col-span-1 child:col-span-4 child:sm:col-span-2">
              {!isLoading && data.length ? (
                data.map((el) => {
                  return (
                    <div key={Math.random()}>
                      <ProductBox
                        id={el?._id}
                        warranty={el?.warranty[0]?.warrantyItem}
                        colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                        sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
                        cover={`${apiUrl}/${el?.covers[0]}`}
                        title={el?.title}
                        href={`product/${el?.href}`}
                        discounted={
                          el?.off
                            ? el?.off
                            : el?.colors[0]
                              ? el?.colors[0]?.off
                              : el?.sizes[0].off
                                ? el?.sizes[0].off
                                : 0
                        }
                        price={
                          el?.mainPrice
                            ? el?.mainPrice
                            : el?.colors[0]
                              ? el?.colors[0]?.price
                              : el?.sizes[0].price
                                ? el?.sizes[0].price
                                : 0
                        }
                        num={el?.Availability}
                        averageScore={el?.productAverageScore}
                      />
                    </div>
                  );
                })
              ) : (
                <h2 className="font-dana text-xl text-center">
                  چیزی برای نمایش وجود ندارد
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
