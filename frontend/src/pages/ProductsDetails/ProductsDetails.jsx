import { useCallback, useEffect, useRef, useState } from "react"; // Start Rating
import { Rating } from "react-simple-star-rating";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // React Router
import { Link, useNavigate, useParams } from "react-router-dom"; // Components
import {
  Accordion,
  Modal,
  ProductBox,
  SectionsWrapper,
} from "../../configs/Layout/Layout";

// React Hook Form
// Icon
import { BiSolidCategoryAlt } from "react-icons/bi";
import {
  FaCalendarCheck,
  FaHeart,
  FaRegStar,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi"; // Axios
import {
  addComment,
  apiUrl,
  getProductsInfos,
  postFavoriteProduct,
  postProductsToCart,
} from "../../configs/axios/axiosConfigs"; // React Query
import { useQuery } from "react-query"; // Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken"; // React Spinners
import BeatLoader from "react-spinners/BeatLoader"; // SweetAlert
import { IoCloseCircleOutline } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader.js";
import { useForm } from "react-hook-form";

export default function ProductsDetails() {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const [isDataFetching, setIsDataFetching] = useState(false);

  const submitCommentForm = (data) => {
    setIsDataFetching(true);

    const comment = {
      productHref: param.href,
      body: data.commentDisc,
      score: rating.current,
    };

    addComment({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: comment,
    }).then(() => {
      setIsDataFetching(false);
      setIsCommentModalOpen(false);
    });
  };

  const { userToken } = useUserToken();
  const param = useParams();
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, isLoading, refetch } = useQuery(
    `product${param.href}`,
    async () => {
      const res = await getProductsInfos({
        url: `/${param.href}`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }).catch(() => {
        navigator("/404");
      });

      console.log(res.data);
      return res.data;
    },
    {
      staleTime: 0,
      refetchOnMount: true,
    }
  );

  const rating = useRef(0);

  // Catch Rating value
  const handleRating = (rate) => {
    rating.current = rate;
  };

  const [productPrice, setProductPrice] = useState("-");
  const [productOffPrice, setProductOffPrice] = useState("-");
  const [productId, setProductId] = useState(null);
  const [productWarranty, setProductWarranty] = useState(null);
  const [colorId, setColorId] = useState([]);
  const [sizeId, setSizeId] = useState([]);
  const [count, setCount] = useState(0);

  const [isFavFetching, setIsFavFetching] = useState(false);

  const [activeBtn, setActiveBtn] = useState(null);

  const isFirstMount = useRef(true);

  const [isProductFetching, setIsProductFetching] = useState(false);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  });

  const decreaseCount = useCallback(() => {
    setCount((prev) => prev - 1);
  });

  useEffect(() => {
    if (!isLoading) {
      setProductId(data?.product?._id);
      setProductWarranty(data?.product?.warranty[0]?.warrantyItem);

      if (isFirstMount.current) {
        if (data?.cartItem[0]?.count) {
          setCount(data?.cartItem[0]?.count);
        }

        isFirstMount.current = false;
      }

      if (data.product.mainPrice) {
        setProductPrice(data.product.mainPrice);
        setColorId([]);
        setSizeId([]);
      }

      if (data.product.discountedPrice) {
        setProductOffPrice(data.product.discountedPrice);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = "پریمو - محصولات";
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="bg-white sm:py-5 sm:px-8 py-2.5 px-3 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:justify-items-center 2xl:justify-items-stretch">
            <div className="lg:col-span-1 size-[300px] sm:size-[450px] mx-auto 2xl:mx-0">
              <Swiper
                slidesPerView={1}
                modules={[Navigation, A11y]}
                navigation
                loop={true}
              >
                {!isLoading &&
                  data?.product?.covers?.map((el) => (
                    <SwiperSlide key={Math.random()}>
                      <div className="sm:h-[450px]">
                        <img
                          className="cursor-grab active:cursor-grabbing object-center"
                          src={`${apiUrl}/${el}`}
                          alt="img"
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="col-span-1">
              <h1 className="font-danaBold text-xl line-clamp-2">
                {!isLoading && data?.product?.title}
              </h1>
              <span className="mt-2 font-dana text-sm text-gray-400 inline-block">
                <Link className="line-clamp-1 font-poppins">{param.href}</Link>
              </span>
              <div className="grid gap-y-2 sm:grid-cols-2 font-dana mt-4 text-gray-400 text-sm sm:text-base">
                <span className="flex items-center gap-1">
                  <BiSolidCategoryAlt />
                  دسته بندی:
                  <span className="text-zinc-700 mr-1 line-clamp-1">
                    {!isLoading && data?.product?.categoryID?.title}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <BiSolidCategoryAlt />
                  برند:
                  <span className="text-zinc-700 mr-1 line-clamp-1">
                    {!isLoading && data?.product?.brand?.title}
                  </span>
                </span>
              </div>
              <div className="mt-4 text-sm flex items-center gap-2 font-dana text-white child:w-[90px] child:h-[30px] child:flex child:justify-center child:items-center child:rounded-lg">
                <span className="bg-orange-400">
                  {!isLoading && data?.product?.isorg ? "اصل" : "غیر اصل"}
                </span>
                <span className="bg-blue-700">تحویل فوری</span>
              </div>
              <ul className="mt-4 text-gray-400 font-dana text-sm sm:text-base sm:list-disc pr-5 grid grid-cols-2 gap-y-2">
                {
                  <>
                    <li>
                      {!isLoading &&
                        data.product.details[0] &&
                        data?.product?.details[0].title}
                      :
                      <span className="text-zinc-700 mr-1 line-clamp-1">
                        {!isLoading &&
                          data.product.details[0] &&
                          data?.product?.details[0].value}
                      </span>
                    </li>
                    <li>
                      {!isLoading &&
                        data.product.details[1] &&
                        data?.product?.details[1].title}
                      :
                      <span className="text-zinc-700 mr-1 line-clamp-1">
                        {!isLoading &&
                          data.product.details[1] &&
                          data?.product?.details[1].value}
                      </span>
                    </li>
                    <li>
                      {!isLoading &&
                        data.product.details[2] &&
                        data?.product?.details[2].title}
                      :
                      <span className="text-zinc-700 mr-1 line-clamp-1">
                        {!isLoading &&
                          data.product.details[2] &&
                          data?.product?.details[2].value}
                      </span>
                    </li>
                    <li>
                      {!isLoading &&
                        data.product.details[3] &&
                        data?.product?.details[3].title}
                      :
                      <span className="text-zinc-700 mr-1 line-clamp-1">
                        {!isLoading &&
                          data.product.details[3] &&
                          data?.product?.details[3].value}
                      </span>
                    </li>
                  </>
                }
              </ul>
              <div className="flex items-center gap-1 font-dana mt-4 py-1.5 sm:py-3 px-5 rounded-xl bg-teal-600 text-white w-full lg:w-3/4 text-sm sm:text-base">
                <FaCalendarCheck size="0.95rem" />
                {!isLoading && data?.product?.transport?.title}
              </div>
              <div className="mt-4 text-sm font-dana flex items-center gap-2 text-zinc-700">
                <PiWarningCircle size="4rem" />
                <p>
                  برگشت و مرجوع کردن کالا تنها در صورتی که ممکن است که جعبه و
                  باکس کالا باز نشده باشد و ضربه فیزیکی به آن وارد نشده باشد.
                  لازم به ذکر است که در صورتی که کالا توسط افراد غیر متخصص تعمیر
                  شود، صدمات ناشی از از آن به شرکت گارانتی کننده مربوط نمیشود.
                </p>
              </div>
            </div>
            <div className="2xl:col-span-1 lg:col-span-2 col-span-1 flex flex-col justify-center">
              <div className="bg-gray-100 p-4 rounded-xl lg:w-[600px] 2xl:w-auto">
                <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                  <div className="w-full font-danaBold text-zinc-700">
                    {!isLoading &&
                      (data.product.colors.length
                        ? "رنگ ها"
                        : data.product.sizes.length
                          ? "سایز"
                          : "")}
                  </div>
                  {!isLoading &&
                    (data.product.colors.length
                      ? data.product.colors.map((el) => (
                          <button
                            key={Math.random()}
                            data-id={el._id}
                            onClick={() => {
                              setColorId(el._id);

                              let items = data?.cartItem[0].product.length
                                ? data?.cartItem
                                : null;

                              items &&
                                (function () {
                                  let item = items.filter((elem) => {
                                    return elem?.color[0]?.colorID === el?._id;
                                  });

                                  let countOfProduct = item?.length
                                    ? item[0]?.color[0]?.count
                                    : 0;

                                  setCount(countOfProduct);
                                })();

                              setActiveBtn(el._id);

                              if (el.discountedPrice) {
                                setProductPrice(el.price);
                                setProductOffPrice(el.discountedPrice);
                              } else {
                                setProductPrice(el.price);
                                setProductOffPrice(0);
                              }
                            }}
                            className={`${el._id === activeBtn ? "active-size-color" : ""} flex items-center gap-1 font-dana py-1.5 px-2 rounded-xl bg bg-gray-200 transition-all hover:bg-gray-300`}
                          >
                            <span
                              className={`size-[20px] rounded-full outline-none`}
                              style={{ backgroundColor: el.hex }}
                            ></span>
                            {el.title}
                          </button>
                        ))
                      : data.product.sizes.length
                        ? data.product.sizes.map((el) => (
                            <button
                              key={Math.random()}
                              data-id={el._id}
                              onClick={() => {
                                setSizeId(el._id);

                                let items = data?.cartItem[0].product.length
                                  ? data?.cartItem
                                  : null;

                                items &&
                                  (function () {
                                    let item = items.filter((elem) => {
                                      return elem?.size[0]?.sizeID === el?._id;
                                    });

                                    let countOfProduct = item?.length
                                      ? item[0]?.size[0]?.count
                                      : 0;

                                    setCount(countOfProduct);
                                  })();

                                if (el.discountedPrice) {
                                  setProductPrice(el.price);
                                  setProductOffPrice(el.discountedPrice);
                                } else {
                                  setProductPrice(el.price);
                                  setProductOffPrice(0);
                                }

                                setActiveBtn(el._id);
                              }}
                              className={`${el._id === activeBtn ? "active-size-color" : ""} flex items-center gap-1 font-dana py-1.5 px-2 rounded-xl bg bg-gray-200 transition-all hover:bg-gray-300`}
                            >
                              {el.title}
                            </button>
                          ))
                        : "")}
                </div>
                <div className="mt-4">
                  <div className="w-full font-danaBold text-zinc-700">
                    گارانتی
                  </div>
                  <select
                    onChange={(e) => {
                      setProductWarranty(e.target.value);
                    }}
                    className="font-dana text-zinc-700 mt-1.5 w-full outline-none border-gray-400 border-solid border py-1 px-2 rounded-lg"
                  >
                    {!isLoading && (
                      <option
                        key={Math.random()}
                        value={`${data?.product?.warranty?._id}`}
                      >
                        {data?.product?.warranty?.title}
                      </option>
                    )}
                  </select>
                </div>
                <div
                  className={`mt-4 ${
                    !isLoading &&
                    (data?.product?.Availability === 0 ? "block" : "hidden")
                  }`}
                >
                  <div className="sm:text-base text-sm flex items-center gap-1 font-dana mt-4 py-1.5 sm:py-3 px-5 rounded-xl bg-red-500 text-white">
                    <FaStore size="0.95rem" />
                    موجودی انبار:
                    <span>ناموجود</span>
                  </div>
                </div>
                {!isLoading &&
                  (data?.isFavorite ? (
                    <button
                      onClick={() => {
                        postFavoriteProduct({
                          headers: {
                            Authorization: `Bearer ${userToken}`,
                          },
                          url: `/${data?.product?._id}`,
                        }).then(() => {
                          refetch();
                        });
                      }}
                      className={`${
                        !isLoading &&
                        (data?.product?.Availability === 0 ? "block" : "hidden")
                      } mt-4 col-span-4 sm:col-span-2 border border-solid border-red-500 font-dana text-red-500 bg-gray-100 flex items-center gap-1 justify-center w-full py-2 rounded-xl transition-all hover:text-white hover:bg-red-500`}
                    >
                      حذف مورد علاقه
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        postFavoriteProduct({
                          headers: {
                            Authorization: `Bearer ${userToken}`,
                          },
                          url: `/${data?.product?._id}`,
                        }).then(() => {
                          refetch();
                        });
                      }}
                      className={`${
                        !isLoading &&
                        (data?.product?.Availability === 0 ? "block" : "hidden")
                      } mt-4 col-span-4 sm:col-span-2 border border-solid border-red-500 font-dana text-red-500 bg-gray-100 flex items-center gap-1 justify-center w-full py-2 rounded-xl transition-all hover:text-white hover:bg-red-500`}
                    >
                      <FaHeart />
                      مورد علاقه
                    </button>
                  ))}
                <div
                  className={`mt-4 ${
                    !isLoading &&
                    (data?.product?.Availability === 0 ? "hidden" : "block")
                  }`}
                >
                  <div className="font-dana flex items-center justify-between mt-8 w-full">
                    <span className="font-danaBold text-teal-600 text-center text-xl sm:text-2xl flex items-center justify-center gap-4 w-full">
                      {!(productOffPrice === productPrice) ? (
                        <>
                          <del className="font-danaBold text-gray-400 text-center text-sm sm:text-base">
                            {(productPrice && productPrice).toLocaleString()}
                          </del>

                          <span className="flex items-center justify-center">
                            {(
                              productOffPrice && productOffPrice
                            ).toLocaleString()}

                            <svg
                              className="ms-3"
                              width="30"
                              height="30"
                              viewBox="0 0 14 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="text-gray-880 dark:text-white"
                                d="M1.14878 6.91843C1.44428 6.91843 1.70285 6.87142 1.92447 6.77739C2.15282 6.68337 2.34422 6.55577 2.49869 6.39458C2.65316 6.2334 2.77069 6.04535 2.85128 5.83044C2.93187 5.62224 2.97888 5.40062 2.99231 5.16556H1.98492C1.6424 5.16556 1.36033 5.12862 1.1387 5.05474C0.917077 4.98087 0.742461 4.87341 0.614858 4.73238C0.487254 4.59134 0.396588 4.42344 0.34286 4.22868C0.295849 4.0272 0.272343 3.80221 0.272343 3.55372C0.272343 3.29852 0.309281 3.05674 0.383156 2.8284C0.457032 2.60005 0.564488 2.39857 0.705523 2.22396C0.846559 2.04934 1.02117 1.91167 1.22937 1.81093C1.44428 1.70347 1.68941 1.64974 1.96477 1.64974C2.1864 1.64974 2.39795 1.68668 2.59943 1.76056C2.80091 1.83443 2.97888 1.95196 3.13335 2.11315C3.28782 2.26761 3.40871 2.47245 3.49601 2.72766C3.59004 2.97615 3.63705 3.27837 3.63705 3.63431V4.47045H4.60415C4.68474 4.47045 4.73847 4.50068 4.76533 4.56112C4.79891 4.61485 4.8157 4.6988 4.8157 4.81297C4.8157 4.93386 4.79891 5.02452 4.76533 5.08497C4.73847 5.13869 4.68474 5.16556 4.60415 5.16556H3.6169C3.60347 5.49464 3.53631 5.80693 3.41542 6.10244C3.30125 6.39794 3.14007 6.65651 2.93187 6.87813C2.72368 7.09976 2.47518 7.27438 2.1864 7.40198C1.89761 7.5363 1.57188 7.60346 1.20922 7.60346H0.141381L0.0809373 6.91843H1.14878ZM0.896929 3.51343C0.896929 3.68133 0.913719 3.82572 0.947299 3.94661C0.987594 4.0675 1.0514 4.16823 1.1387 4.24883C1.23273 4.3227 1.35697 4.37979 1.51144 4.42008C1.66591 4.45366 1.86067 4.47045 2.09573 4.47045H3.00239V3.71491C3.00239 3.21792 2.90501 2.86198 2.71024 2.64707C2.51548 2.43215 2.24684 2.3247 1.90433 2.3247C1.58196 2.3247 1.33347 2.43215 1.15885 2.64707C0.984237 2.86198 0.896929 3.15076 0.896929 3.51343ZM6.26895 4.47045C6.35626 4.47045 6.41335 4.50068 6.44021 4.56112C6.47379 4.61485 6.49058 4.6988 6.49058 4.81297C6.49058 4.93386 6.47379 5.02452 6.44021 5.08497C6.41335 5.13869 6.35626 5.16556 6.26895 5.16556H4.60675C4.51944 5.16556 4.46235 5.13869 4.43549 5.08497C4.40191 5.03124 4.38512 4.94729 4.38512 4.83312C4.38512 4.71223 4.40191 4.62156 4.43549 4.56112C4.46235 4.50068 4.51944 4.47045 4.60675 4.47045H6.26895ZM7.93155 4.47045C8.01886 4.47045 8.07594 4.50068 8.10281 4.56112C8.13639 4.61485 8.15318 4.6988 8.15318 4.81297C8.15318 4.93386 8.13639 5.02452 8.10281 5.08497C8.07594 5.13869 8.01886 5.16556 7.93155 5.16556H6.26935C6.18204 5.16556 6.12495 5.13869 6.09809 5.08497C6.06451 5.03124 6.04772 4.94729 6.04772 4.83312C6.04772 4.71223 6.06451 4.62156 6.09809 4.56112C6.12495 4.50068 6.18204 4.47045 6.26935 4.47045H7.93155ZM9.59415 4.47045C9.68146 4.47045 9.73854 4.50068 9.76541 4.56112C9.79899 4.61485 9.81578 4.6988 9.81578 4.81297C9.81578 4.93386 9.79899 5.02452 9.76541 5.08497C9.73854 5.13869 9.68146 5.16556 9.59415 5.16556H7.93194C7.84464 5.16556 7.78755 5.13869 7.76069 5.08497C7.72711 5.03124 7.71032 4.94729 7.71032 4.83312C7.71032 4.71223 7.72711 4.62156 7.76069 4.56112C7.78755 4.50068 7.84464 4.47045 7.93194 4.47045H9.59415ZM11.2567 4.47045C11.3441 4.47045 11.4011 4.50068 11.428 4.56112C11.4616 4.61485 11.4784 4.6988 11.4784 4.81297C11.4784 4.93386 11.4616 5.02452 11.428 5.08497C11.4011 5.13869 11.3441 5.16556 11.2567 5.16556H9.59454C9.50723 5.16556 9.45015 5.13869 9.42328 5.08497C9.3897 5.03124 9.37291 4.94729 9.37291 4.83312C9.37291 4.71223 9.3897 4.62156 9.42328 4.56112C9.45015 4.50068 9.50723 4.47045 9.59454 4.47045H11.2567ZM12.1638 4.47045C12.4257 4.47045 12.6339 4.39994 12.7884 4.2589C12.9496 4.11787 13.0302 3.9231 13.0302 3.67461V2.2844H13.685V3.67461C13.685 4.15144 13.5506 4.52082 13.282 4.78275C13.0201 5.03795 12.6608 5.16556 12.2041 5.16556H11.2571C11.1698 5.16556 11.1127 5.13869 11.0859 5.08497C11.0523 5.03124 11.0355 4.94729 11.0355 4.83312C11.0355 4.71223 11.0523 4.62156 11.0859 4.56112C11.1127 4.50068 11.1698 4.47045 11.2571 4.47045H12.1638ZM13.7857 0.994934H12.9798V0.279683H13.7857V0.994934ZM12.5063 0.994934H11.7004V0.279683H12.5063V0.994934ZM5.64177 12.9641C5.64177 13.3267 5.58468 13.6659 5.47051 13.9815C5.35634 14.3039 5.1918 14.5826 4.97689 14.8177C4.76198 15.0595 4.50005 15.2509 4.19112 15.3919C3.8889 15.5329 3.54638 15.6035 3.16357 15.6035H2.56921C1.81702 15.6035 1.23273 15.3718 0.816337 14.9084C0.399946 14.445 0.191751 13.8103 0.191751 13.0044V11.2414H0.836485V12.9842C0.836485 13.273 0.870065 13.5349 0.937225 13.77C1.0111 14.0051 1.12191 14.2065 1.26967 14.3744C1.42413 14.549 1.61554 14.6834 1.84388 14.7774C2.07223 14.8714 2.34758 14.9184 2.66995 14.9184H3.1132C3.42885 14.9184 3.70421 14.8647 3.93927 14.7572C4.17433 14.6565 4.36909 14.5188 4.52356 14.3442C4.68474 14.1696 4.80227 13.9648 4.87615 13.7297C4.95674 13.4946 4.99703 13.2495 4.99703 12.9943V10.2844H5.64177V12.9641ZM3.21394 10.0628H2.36773V9.32738H3.21394V10.0628ZM8.24526 13.1656C8.07064 13.1656 7.90274 13.1421 7.74156 13.095C7.58038 13.0413 7.43598 12.954 7.30838 12.8331C7.18749 12.7122 7.09011 12.5544 7.01624 12.3596C6.94236 12.1582 6.90542 11.9097 6.90542 11.6142V6.9197H7.56023V11.4933C7.56023 11.7754 7.62067 12.0104 7.74156 12.1985C7.86916 12.3798 8.074 12.4705 8.35607 12.4705H8.52733C8.67508 12.4705 8.74896 12.5846 8.74896 12.813C8.74896 13.048 8.67508 13.1656 8.52733 13.1656H8.24526ZM8.69324 12.4705C8.95516 12.4705 9.15328 12.4067 9.2876 12.279C9.42192 12.1514 9.48908 11.9802 9.48908 11.7653V11.3825C9.48908 10.7982 9.63683 10.3415 9.93233 10.0124C10.2346 9.68332 10.6509 9.51878 11.1815 9.51878C11.4569 9.51878 11.6986 9.56243 11.9068 9.64974C12.115 9.73705 12.2863 9.8613 12.4206 10.0225C12.5616 10.1837 12.6657 10.3751 12.7329 10.5967C12.8001 10.8183 12.8336 11.0635 12.8336 11.3321C12.8336 11.9097 12.6825 12.3596 12.3803 12.682C12.0781 13.0044 11.6651 13.1656 11.1412 13.1656C10.8726 13.1656 10.614 13.1152 10.3655 13.0144C10.117 12.907 9.92226 12.7189 9.78123 12.4503C9.72078 12.6048 9.64691 12.729 9.5596 12.823C9.47229 12.9171 9.38162 12.9909 9.2876 13.0447C9.19358 13.0917 9.09284 13.1253 8.98538 13.1454C8.88464 13.1588 8.78726 13.1656 8.69324 13.1656H8.53205C8.44475 13.1656 8.38766 13.1387 8.3608 13.085C8.32722 13.0312 8.31043 12.9473 8.31043 12.8331C8.31043 12.7122 8.32722 12.6216 8.3608 12.5611C8.38766 12.5007 8.44475 12.4705 8.53205 12.4705H8.69324ZM12.1889 11.3925C12.1889 11.0433 12.1117 10.7612 11.9572 10.5463C11.8027 10.3247 11.5375 10.2139 11.1614 10.2139C10.4629 10.2139 10.1137 10.6202 10.1137 11.4328C10.1137 11.7754 10.2077 12.0339 10.3957 12.2085C10.5905 12.3831 10.839 12.4705 11.1412 12.4705C11.4837 12.4705 11.7423 12.3764 11.9169 12.1884C12.0982 12.0003 12.1889 11.7351 12.1889 11.3925Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </>
                      ) : (
                        <span className="flex items-center justify-center">
                          {(productPrice && productPrice).toLocaleString()}

                          <svg
                            className="ms-3"
                            width="30"
                            height="30"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="text-gray-880 dark:text-white"
                              d="M1.14878 6.91843C1.44428 6.91843 1.70285 6.87142 1.92447 6.77739C2.15282 6.68337 2.34422 6.55577 2.49869 6.39458C2.65316 6.2334 2.77069 6.04535 2.85128 5.83044C2.93187 5.62224 2.97888 5.40062 2.99231 5.16556H1.98492C1.6424 5.16556 1.36033 5.12862 1.1387 5.05474C0.917077 4.98087 0.742461 4.87341 0.614858 4.73238C0.487254 4.59134 0.396588 4.42344 0.34286 4.22868C0.295849 4.0272 0.272343 3.80221 0.272343 3.55372C0.272343 3.29852 0.309281 3.05674 0.383156 2.8284C0.457032 2.60005 0.564488 2.39857 0.705523 2.22396C0.846559 2.04934 1.02117 1.91167 1.22937 1.81093C1.44428 1.70347 1.68941 1.64974 1.96477 1.64974C2.1864 1.64974 2.39795 1.68668 2.59943 1.76056C2.80091 1.83443 2.97888 1.95196 3.13335 2.11315C3.28782 2.26761 3.40871 2.47245 3.49601 2.72766C3.59004 2.97615 3.63705 3.27837 3.63705 3.63431V4.47045H4.60415C4.68474 4.47045 4.73847 4.50068 4.76533 4.56112C4.79891 4.61485 4.8157 4.6988 4.8157 4.81297C4.8157 4.93386 4.79891 5.02452 4.76533 5.08497C4.73847 5.13869 4.68474 5.16556 4.60415 5.16556H3.6169C3.60347 5.49464 3.53631 5.80693 3.41542 6.10244C3.30125 6.39794 3.14007 6.65651 2.93187 6.87813C2.72368 7.09976 2.47518 7.27438 2.1864 7.40198C1.89761 7.5363 1.57188 7.60346 1.20922 7.60346H0.141381L0.0809373 6.91843H1.14878ZM0.896929 3.51343C0.896929 3.68133 0.913719 3.82572 0.947299 3.94661C0.987594 4.0675 1.0514 4.16823 1.1387 4.24883C1.23273 4.3227 1.35697 4.37979 1.51144 4.42008C1.66591 4.45366 1.86067 4.47045 2.09573 4.47045H3.00239V3.71491C3.00239 3.21792 2.90501 2.86198 2.71024 2.64707C2.51548 2.43215 2.24684 2.3247 1.90433 2.3247C1.58196 2.3247 1.33347 2.43215 1.15885 2.64707C0.984237 2.86198 0.896929 3.15076 0.896929 3.51343ZM6.26895 4.47045C6.35626 4.47045 6.41335 4.50068 6.44021 4.56112C6.47379 4.61485 6.49058 4.6988 6.49058 4.81297C6.49058 4.93386 6.47379 5.02452 6.44021 5.08497C6.41335 5.13869 6.35626 5.16556 6.26895 5.16556H4.60675C4.51944 5.16556 4.46235 5.13869 4.43549 5.08497C4.40191 5.03124 4.38512 4.94729 4.38512 4.83312C4.38512 4.71223 4.40191 4.62156 4.43549 4.56112C4.46235 4.50068 4.51944 4.47045 4.60675 4.47045H6.26895ZM7.93155 4.47045C8.01886 4.47045 8.07594 4.50068 8.10281 4.56112C8.13639 4.61485 8.15318 4.6988 8.15318 4.81297C8.15318 4.93386 8.13639 5.02452 8.10281 5.08497C8.07594 5.13869 8.01886 5.16556 7.93155 5.16556H6.26935C6.18204 5.16556 6.12495 5.13869 6.09809 5.08497C6.06451 5.03124 6.04772 4.94729 6.04772 4.83312C6.04772 4.71223 6.06451 4.62156 6.09809 4.56112C6.12495 4.50068 6.18204 4.47045 6.26935 4.47045H7.93155ZM9.59415 4.47045C9.68146 4.47045 9.73854 4.50068 9.76541 4.56112C9.79899 4.61485 9.81578 4.6988 9.81578 4.81297C9.81578 4.93386 9.79899 5.02452 9.76541 5.08497C9.73854 5.13869 9.68146 5.16556 9.59415 5.16556H7.93194C7.84464 5.16556 7.78755 5.13869 7.76069 5.08497C7.72711 5.03124 7.71032 4.94729 7.71032 4.83312C7.71032 4.71223 7.72711 4.62156 7.76069 4.56112C7.78755 4.50068 7.84464 4.47045 7.93194 4.47045H9.59415ZM11.2567 4.47045C11.3441 4.47045 11.4011 4.50068 11.428 4.56112C11.4616 4.61485 11.4784 4.6988 11.4784 4.81297C11.4784 4.93386 11.4616 5.02452 11.428 5.08497C11.4011 5.13869 11.3441 5.16556 11.2567 5.16556H9.59454C9.50723 5.16556 9.45015 5.13869 9.42328 5.08497C9.3897 5.03124 9.37291 4.94729 9.37291 4.83312C9.37291 4.71223 9.3897 4.62156 9.42328 4.56112C9.45015 4.50068 9.50723 4.47045 9.59454 4.47045H11.2567ZM12.1638 4.47045C12.4257 4.47045 12.6339 4.39994 12.7884 4.2589C12.9496 4.11787 13.0302 3.9231 13.0302 3.67461V2.2844H13.685V3.67461C13.685 4.15144 13.5506 4.52082 13.282 4.78275C13.0201 5.03795 12.6608 5.16556 12.2041 5.16556H11.2571C11.1698 5.16556 11.1127 5.13869 11.0859 5.08497C11.0523 5.03124 11.0355 4.94729 11.0355 4.83312C11.0355 4.71223 11.0523 4.62156 11.0859 4.56112C11.1127 4.50068 11.1698 4.47045 11.2571 4.47045H12.1638ZM13.7857 0.994934H12.9798V0.279683H13.7857V0.994934ZM12.5063 0.994934H11.7004V0.279683H12.5063V0.994934ZM5.64177 12.9641C5.64177 13.3267 5.58468 13.6659 5.47051 13.9815C5.35634 14.3039 5.1918 14.5826 4.97689 14.8177C4.76198 15.0595 4.50005 15.2509 4.19112 15.3919C3.8889 15.5329 3.54638 15.6035 3.16357 15.6035H2.56921C1.81702 15.6035 1.23273 15.3718 0.816337 14.9084C0.399946 14.445 0.191751 13.8103 0.191751 13.0044V11.2414H0.836485V12.9842C0.836485 13.273 0.870065 13.5349 0.937225 13.77C1.0111 14.0051 1.12191 14.2065 1.26967 14.3744C1.42413 14.549 1.61554 14.6834 1.84388 14.7774C2.07223 14.8714 2.34758 14.9184 2.66995 14.9184H3.1132C3.42885 14.9184 3.70421 14.8647 3.93927 14.7572C4.17433 14.6565 4.36909 14.5188 4.52356 14.3442C4.68474 14.1696 4.80227 13.9648 4.87615 13.7297C4.95674 13.4946 4.99703 13.2495 4.99703 12.9943V10.2844H5.64177V12.9641ZM3.21394 10.0628H2.36773V9.32738H3.21394V10.0628ZM8.24526 13.1656C8.07064 13.1656 7.90274 13.1421 7.74156 13.095C7.58038 13.0413 7.43598 12.954 7.30838 12.8331C7.18749 12.7122 7.09011 12.5544 7.01624 12.3596C6.94236 12.1582 6.90542 11.9097 6.90542 11.6142V6.9197H7.56023V11.4933C7.56023 11.7754 7.62067 12.0104 7.74156 12.1985C7.86916 12.3798 8.074 12.4705 8.35607 12.4705H8.52733C8.67508 12.4705 8.74896 12.5846 8.74896 12.813C8.74896 13.048 8.67508 13.1656 8.52733 13.1656H8.24526ZM8.69324 12.4705C8.95516 12.4705 9.15328 12.4067 9.2876 12.279C9.42192 12.1514 9.48908 11.9802 9.48908 11.7653V11.3825C9.48908 10.7982 9.63683 10.3415 9.93233 10.0124C10.2346 9.68332 10.6509 9.51878 11.1815 9.51878C11.4569 9.51878 11.6986 9.56243 11.9068 9.64974C12.115 9.73705 12.2863 9.8613 12.4206 10.0225C12.5616 10.1837 12.6657 10.3751 12.7329 10.5967C12.8001 10.8183 12.8336 11.0635 12.8336 11.3321C12.8336 11.9097 12.6825 12.3596 12.3803 12.682C12.0781 13.0044 11.6651 13.1656 11.1412 13.1656C10.8726 13.1656 10.614 13.1152 10.3655 13.0144C10.117 12.907 9.92226 12.7189 9.78123 12.4503C9.72078 12.6048 9.64691 12.729 9.5596 12.823C9.47229 12.9171 9.38162 12.9909 9.2876 13.0447C9.19358 13.0917 9.09284 13.1253 8.98538 13.1454C8.88464 13.1588 8.78726 13.1656 8.69324 13.1656H8.53205C8.44475 13.1656 8.38766 13.1387 8.3608 13.085C8.32722 13.0312 8.31043 12.9473 8.31043 12.8331C8.31043 12.7122 8.32722 12.6216 8.3608 12.5611C8.38766 12.5007 8.44475 12.4705 8.53205 12.4705H8.69324ZM12.1889 11.3925C12.1889 11.0433 12.1117 10.7612 11.9572 10.5463C11.8027 10.3247 11.5375 10.2139 11.1614 10.2139C10.4629 10.2139 10.1137 10.6202 10.1137 11.4328C10.1137 11.7754 10.2077 12.0339 10.3957 12.2085C10.5905 12.3831 10.839 12.4705 11.1412 12.4705C11.4837 12.4705 11.7423 12.3764 11.9169 12.1884C12.0982 12.0003 12.1889 11.7351 12.1889 11.3925Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-4 w-full grid items-center gap-2 grid-cols-4">
                    {isProductFetching ? (
                      <div className="col-span-4 sm:col-span-2 flex justify-center items-center">
                        <BeatLoader size="0.5rem" color="#0d9488" />
                      </div>
                    ) : count ? (
                      <div className="col-span-4 sm:col-span-2 font-danaBold grid grid-cols-3 border border-solid border-gray-400  py-2 px-4 rounded-xl xl:text-lg text-red-400 mt-2.5 sm:mt-0 h-[42px]">
                        <button
                          className="grid-cols-1"
                          onClick={() => {
                            increaseCount();

                            setIsProductFetching(true);

                            let productData = {
                              productID: productId,
                              colorID: colorId,
                              sizeID: sizeId,
                              count: 1000,
                              warranty: productWarranty,
                            };
                            postProductsToCart({
                              data: productData,
                              headers: {
                                Authorization: `Bearer ${userToken}`,
                              },
                            })
                              .then(() => {
                                refetch();
                              })
                              .catch(() => {
                                setCount(0);
                              })
                              .finally(() => {
                                setIsProductFetching(false);
                              });
                          }}
                        >
                          +
                        </button>
                        <span className="grid-cols-1 flex items-center justify-center w-full">
                          {count}
                        </span>
                        <button
                          className="grid-cols-1"
                          onClick={() => {
                            decreaseCount();

                            setIsProductFetching(true);

                            let productData = {
                              productID: productId,
                              colorID: colorId,
                              sizeID: sizeId,
                              count: 999,
                              warranty: productWarranty,
                            };
                            postProductsToCart({
                              data: productData,
                              headers: {
                                Authorization: `Bearer ${userToken}`,
                              },
                            })
                              .then(() => {
                                refetch();
                              })
                              .catch(() => {
                                setCount(0);
                              })
                              .finally(() => {
                                setIsProductFetching(false);
                              });
                          }}
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setCount((prev) => prev + 1);

                          setIsProductFetching(true);

                          let productData = {
                            productID: productId,
                            colorID: colorId,
                            sizeID: sizeId,
                            count: 1000,
                            warranty: productWarranty,
                          };
                          postProductsToCart({
                            data: productData,
                            headers: {
                              Authorization: `Bearer ${userToken}`,
                            },
                          })
                            .then(() => {
                              refetch();
                            })
                            .catch(() => {
                              setCount(0);
                            })
                            .finally(() => {
                              setIsProductFetching(false);
                            });
                        }}
                        className="col-span-4 sm:col-span-2 border border-solid border-teal-600 font-dana text-teal-600 bg-gray-100 flex items-center gap-1 justify-center w-full py-2 rounded-xl transition-all hover:text-white hover:bg-teal-600"
                      >
                        <FaShoppingCart />
                        افزودن به سبد خرید
                      </button>
                    )}
                    {!isLoading &&
                      (data?.isFavorite ? (
                        isFavFetching ? (
                          <div className="col-span-4 sm:col-span-2 flex justify-center items-center">
                            <BeatLoader size="0.5rem" color="rgb(239,68,68)" />
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setIsFavFetching(true);
                              postFavoriteProduct({
                                headers: {
                                  Authorization: `Bearer ${userToken}`,
                                },
                                url: `/${data?.product?._id}`,
                              })
                                .then(() => {
                                  refetch();
                                })
                                .finally(() => {
                                  setIsFavFetching(false);
                                });
                            }}
                            className="col-span-4 sm:col-span-2 border border-solid border-red-500 font-dana text-red-500 bg-gray-100 flex items-center gap-1 justify-center w-full py-2 rounded-xl transition-all hover:text-white hover:bg-red-500"
                          >
                            حذف مورد علاقه
                          </button>
                        )
                      ) : isFavFetching ? (
                        <div className="col-span-4 sm:col-span-2 flex justify-center items-center">
                          <BeatLoader size="0.5rem" color="rgb(239,68,68)" />
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setIsFavFetching(true);
                            postFavoriteProduct({
                              headers: {
                                Authorization: `Bearer ${userToken}`,
                              },
                              url: `/${data?.product?._id}`,
                            })
                              .then(() => {
                                refetch();
                              })
                              .finally(() => {
                                setIsFavFetching(false);
                              });
                          }}
                          className="col-span-4 sm:col-span-2 border border-solid border-red-500 font-dana text-red-500 bg-gray-100 flex items-center gap-1 justify-center w-full py-2 rounded-xl transition-all hover:text-white hover:bg-red-500"
                        >
                          <FaHeart />
                          مورد علاقه
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-center lg:justify-normal lg:grid-cols-4 gap-3 items-start mt-4">
            <div className="lg:col-span-3">
              <Accordion
                details={!isLoading && data?.product?.details}
                desc={!isLoading && data?.product?.description}
                comments={!isLoading && data?.comments}
              />
            </div>
            <div className="bg-[#00000008] rounded-lg py-4 px-3 w-full">
              <span className="font-danaBold">امتیاز محصول</span>
              <div className="mt-4 font-dana text-gray-400 text-sm">
                <span className="font-danaBold text-xl ml-2">
                  {!isLoading && data?.score}
                </span>
                از 5 امتیاز
              </div>
              <div className="mt-2 flex items-center gap-0.5 flex-wrap">
                {Array(Math.floor(!isLoading && data?.score))
                  .fill(0)
                  .map(() => (
                    <FaStar key={Math.random()} size="1rem" color="#FACC15" />
                  ))}
                {Array(Math.floor(!isLoading && 5 - data?.score))
                  .fill(0)
                  .map(() => (
                    <FaRegStar
                      key={Math.random()}
                      size="1rem"
                      color="#FACC15"
                    />
                  ))}

                <span className="inline-block w-full font-dana text-xs text-gray-400 mt-1">
                  از مجموع {!isLoading && data?.comments.length} امتیاز
                </span>
              </div>

              <div className="mt-4 ">
                <button
                  onClick={() => {
                    setIsCommentModalOpen(true);
                  }}
                  className="font-danaBold w-full border-2 border-solid border-orange-300 py-1.5 px-3 rounded-lg transition-all text-zinc-700 hover:bg-orange-100"
                >
                  ثبت دیدگاه
                </button>
                <Modal
                  isOpen={isCommentModalOpen}
                  title={"ثبت دیدگاه"}
                  changeVisibility={setIsCommentModalOpen}
                >
                  <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
                    <button
                      onClick={() => {
                        setIsCommentModalOpen(false);
                      }}
                    >
                      <IoCloseCircleOutline size="1.5rem" />
                    </button>
                    <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
                      ثبت دیدگاه
                    </h2>
                  </div>
                  <form
                    onSubmit={handleSubmit(submitCommentForm)}
                    className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4 font-dana"
                  >
                    <label htmlFor="commentDisc" className="mb-1.5">
                      نظر خود را بنویسید
                    </label>
                    <input
                      {...register(`commentDisc`, {
                        required: "این فیلد نمیتواند خالی باشد",
                      })}
                      id="commentDisc"
                      type="text"
                      placeholder="محصول خوبی است و خیلی سریع بدستم رسید ..."
                      className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
                    />
                    {errors.commentDisc && (
                      <span className="text-red-400 mb-4 text-xs sm:text-sm">
                        * {errors.commentDisc.message}
                      </span>
                    )}
                    <label htmlFor="commentScore" className="mb-1.5">
                      به محصول امتیاز دهید
                    </label>
                    <div>
                      <Rating
                        onClick={handleRating}
                        rtl={true}
                        SVGclassName={`inline-block`}
                      />
                    </div>
                    <button
                      className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center"
                      type="submit"
                    >
                      {isDataFetching ? (
                        <ClipLoader color="#d97706" size="18" />
                      ) : (
                        "ثبت کامنت"
                      )}
                    </button>
                  </form>
                </Modal>
              </div>
            </div>
          </div>

          {!isLoading && !!data?.relatedProducts?.length && (
            <SectionsWrapper noContainer title={"محصولات مرتبط"} href="/home">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation, Autoplay, A11y]}
                navigation
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                breakpoints={{
                  300: {
                    slidesPerView: 1.2,
                  },
                  370: {
                    slidesPerView: 1.4,
                  },
                  435: {
                    slidesPerView: 1.7,
                  },
                  515: {
                    slidesPerView: 2,
                  },
                  590: {
                    slidesPerView: 2.3,
                  },
                  640: {
                    slidesPerView: 2.3,
                  },
                  768: {
                    slidesPerView: 2.4,
                  },
                  1024: {
                    slidesPerView: 3.2,
                  },
                  1280: {
                    slidesPerView: 4.3,
                  },
                  1536: {
                    slidesPerView: 5.2,
                  },
                }}
              >
                {!isLoading &&
                  data?.relatedProducts?.map((el) => (
                    <SwiperSlide key={el.href} className="px-1">
                      <ProductBox
                        id={el?._id}
                        warranty={el?.warranty[0]?.warrantyItem}
                        colorId={el?.colors?.length ? el?.colors[0]?._id : []}
                        sizeId={el?.sizes?.length ? el?.sizes[0]?._id : []}
                        cover={`${apiUrl}/${el.covers[0]}`}
                        title={el.title}
                        href={`product/${el.href}`}
                        discounted={
                          el.off
                            ? el.off
                            : el.colors[0]
                              ? el.colors[0]?.off
                              : el.sizes[0].off
                                ? el.sizes[0].off
                                : 0
                        }
                        price={
                          el.mainPrice
                            ? el.mainPrice
                            : el.colors[0]
                              ? el.colors[0]?.price
                              : el.sizes[0].price
                                ? el.sizes[0].price
                                : 0
                        }
                        num={el.Availability}
                        averageScore={el?.averageScore || 3}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </SectionsWrapper>
          )}
        </div>
      </div>
    </div>
  );
}
