// Icons
import { FaReply } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

// React Router
import { Link } from "react-router-dom";

export default function CommentBox(props) {
  return (
    <div className="p-4 grid grid-cols-12 gap-2 items-center">
      <div className="col-span-4 sm:col-span-3 md:col-span-2">
        <div className="2xl:size-[120px] xl:size-[110px] sm:size-[100px] w-[90px] mx-auto">
          <Link className="size-full">
            <img
              className="transition-all hover:scale-95 mix-blend-multiply"
              src="https://dkstatics-public.digikala.com/digikala-products/f3816c0bbc00734989b5325ebbff13b5c7c3f581_1705838100.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
              alt="img"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-8 sm:col-span-9 md:col-span-10 relative">
        <div className="flex items-center gap-1 font-dana text-gray-400 sm:text-base text-sm">
          <div>{props.name}</div>
          <span className="mx-3">|</span>
          <span>
            {props.createdAt
              .split(``)
              .slice(0, props.createdAt.split(``).indexOf(`T`))}
          </span>
        </div>
        <div className="mt-2.5 gap-0.5 items-center text-[#facc15] hidden sm:flex ">
          {Array(Math.floor(props.score))
            .fill(0)
            .map(() => (
              <FaStar key={Math.random()} size="1rem" />
            ))}
        </div>
        <p className="font-dana xl:mt-4 mt-2 text-zinc-700 sm:text-base text-sm">
          {props.body}
        </p>
        {!!props.isAnswer &&
          props.commentAnswers.map((el) => (
            <div
              key={Math.random()}
              className="w-full sm:w-[90%] mx-auto py-3 px-5 rounded-lg bg-gray-100 mt-4 text-zinc-700"
            >
              <div className="flex items-center gap-1 font-dana text-gray-400 mb-2.5">
                <div>
                  {`${el.creatorAdmin.firstName} ${el.creatorAdmin.lastName}`}
                </div>
                <span className="bg-teal-400/50 py-1 px-2 rounded-lg font-dana text-xs text-gray-700 mr-1">
                  ادمین
                </span>
              </div>
              <span className="flex gap-1.5 font-dana items-center sm:text-base text-sm">
                <FaReply size="0.8rem" />
                {el.body}
              </span>
            </div>
          ))}
        <div className="absolute -top-6 sm:top-0 left-0 text-xs font-dana flex items-center gap-1">
          <button className="flex items-center gap-1 text-orange-400 border border-solid border-orange-300 py-0.5 px-1 rounded-lg">
            <MdModeEditOutline size="1rem" />
            <span className="sm:inline hidden">ویرایش</span>
          </button>
          <button className="flex items-center gap-1 text-orange-400 border border-solid border-orange-300 py-0.5 px-1 rounded-lg">
            <MdDelete size="1rem" />
            <span className="sm:inline hidden">حذف</span>
          </button>
        </div>
      </div>
    </div>
  );
}
