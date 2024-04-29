// Icons
import { MdArrowForwardIos } from "react-icons/md";

// React Router
import { Link } from "react-router-dom";

// components
import { CartProductBox } from "../../configs/Layout/Layout";

export default function OrdersStatus() {
  return (
    <div>
      <div>
        <div>
          <div className="border-b border-solid border-gray-400/50 py-4">
            <div className="flex items-center gap-2 font-danaBold text-zinc-700">
              <Link to={-1} className="flex items-center">
                <MdArrowForwardIos size="0.8rem" />
              </Link>
              <h2>جزئیات سفارش</h2>
            </div>
          </div>
          <div className="border-b border-solid border-gray-400/20 py-4">
            <div className="px-4 lg:px-8 flex items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="w-max flex flex-nowrap gap-1">
                <span className="text-sm text-gray-400 w-max">کد سفارش:</span>
                <span className="font-danaBold text-sm text-zinc-700 w-max">
                  {/* {orderCode} */}
                  754489789489489
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4"></span>
              <div className="w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  تاریخ سفارش:
                </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max">
                  {/* {`${date?.slice(0, date?.indexOf(`T`))}`} */}
                  4/8/2021
                </span>
              </div>
            </div>
          </div>
          <div className="border-b border-solid border-gray-400/20 py-4">
            <div className="px-4 lg:px-8 flex items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="w-max flex flex-nowrap gap-1">
                <span className="text-sm text-gray-400 w-max">
                  تحویل گیرنده:{" "}
                </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max">
                  علی مرادی
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4"></span>
              <div className="w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  شماره موبایل:{" "}
                </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max">
                  09658969856
                </span>
              </div>
            </div>
            <div className="px-4 lg:px-8 mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-400 w-max font-dana">
                آدرس:{" "}
              </span>
              <span className="font-danaBold text-sm text-zinc-700 line-clamp-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              </span>
            </div>
          </div>
          <div className="border-b border-solid border-gray-400/20 py-4">
            <div className="px-4 lg:px-8 flex items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="w-max flex flex-nowrap gap-1">
                <span className="text-sm text-gray-400 w-max">مبلغ: </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max flex items-center">
                  {(897885898).toLocaleString()}
                  <span className="px-2">تومان</span>
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4"></span>
              <div className="w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  سود شما از خرید:{" "}
                </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max flex items-center">
                  {(48885980990).toLocaleString()}
                  <span className="px-2">تومان</span>
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4"></span>
              <div className="w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">
                  پرداخت اینترنتی
                </span>
              </div>
            </div>
            <div className="px-4 lg:px-8 mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-400 w-max font-dana">
                هزینه ارسال:{" "}
              </span>
              <span className="font-danaBold text-sm text-zinc-700 w-max flex items-center">
                {(984959595).toLocaleString()}
                <span className="px-2">تومان</span>
              </span>
            </div>
          </div>
          <div className="py-4">
            <div className="px-4 lg:px-8 flex items-center font-dana overflow-auto active-orders-page-wrapper child:flex-shrink-0 child:flex-grow-0">
              <div className="w-max flex flex-nowrap gap-1">
                <span className="text-sm text-gray-400 w-max">
                  زمان ارسال:{" "}
                </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max flex items-center">
                  5/8/2020
                </span>
              </div>
              <span className="size-2 rounded-full bg-gray-400/50 mx-2 lg:mx-4"></span>
              <div className="w-max flex flex-nowrap gap-1 font-dana">
                <span className="text-sm text-gray-400 w-max">کد مرسوله: </span>
                <span className="font-danaBold text-sm text-zinc-700 w-max flex items-center">
                  9985955959989896598989
                </span>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 flex flex-col gap-2 font-dana mx-4 lg:mx-8 bg-teal-600/10 rounded-lg p-2">
            <span className="sm:font-danaBold font-dana text-sm sm:text-base">
              تحویل مرسوله به مشتری
            </span>
            <div className="w-full h-1 bg-gray-400/30 rounded-lg">
              <div
                className="size-full bg-teal-600 rounded-lg"
                style={{ width: `50%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-gray-400/50 py-2 px-4 rounded-lg mt-4 child:py-4 divide-y divide-solid divide-gray-400/50">
          <CartProductBox
            refetch={"refetch"}
            productId={"el.product._id"}
            color={null}
            size={null}
            title={"el.product.title"}
            cover={"`${apiUrl}/${el.product.covers[0]}`"}
            warranty={"el.warranty"}
            productCount={8000000}
            price={8000000}
            discounted={8000000}
            href={`/product/`}
            notShowCounter={true}
          />
          <CartProductBox
            refetch={"refetch"}
            productId={"el.product._id"}
            color={null}
            size={null}
            title={"el.product.title"}
            cover={"`${apiUrl}/${el.product.covers[0]}`"}
            warranty={"el.warranty"}
            productCount={8000000}
            price={8000000}
            discounted={8000000}
            href={`/product/`}
            notShowCounter={true}
          />
        </div>
      </div>
    </div>
  );
}
