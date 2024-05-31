import { useRef } from "react";

// Icons
import { FaCheck, FaReply } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdAccessTime, MdDelete, MdModeEditOutline } from "react-icons/md";

// React Router
import { Link } from "react-router-dom";

// Axios
import { deleteComment, editComment } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CommentBox(props) {
  const commentVal = useRef(``);
  const scoreVal = useRef(``);
  const showSwal = withReactContent(Swal);
  const { userToken } = useUserToken();
  return (
    <div className="py-10 px-2 grid grid-cols-12 gap-2 items-center">
      <div className="col-span-4 sm:col-span-3 md:col-span-2">
        <div className="2xl:size-[120px] xl:size-[110px] sm:size-[100px] w-[90px] mx-auto">
          <Link to={`/product/${props.href}`} className="size-full">
            <img
              loading="lazy"
              className="transition-all hover:scale-95 mix-blend-multiply"
              src={props.cover}
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
        <p className="font-dana xl:mt-4 mt-2 text-zinc-700 sm:text-base text-sm line-clamp-1">
          {props.body}
        </p>
        {!!props.isAnswer &&
          props.commentAnswers.map((el) => (
            <div
              key={Math.random()}
              className="w-full sm:w-[70%] sm:mr-4 py-3 px-5 rounded-lg bg-gray-100 mt-4 text-zinc-700"
            >
              <div className="flex items-center gap-1 font-dana text-gray-400 mb-2.5">
                <div className="line-clamp-1">
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
        <div className="absolute -top-7 sm:top-0 left-0 text-xs font-dana flex items-center gap-1">
          <button
            onClick={() => {
              showSwal
                .fire({
                  title: <i>ویرایش نظر</i>,
                  input: "text",
                  preConfirm: () => {
                    commentVal.current = Swal.getInput()?.value || "";
                  },
                  showCloseButton: true,
                  showCancelButton: true,
                  focusConfirm: false,
                  confirmButtonText: "تایید",
                  cancelButtonText: "انصراف",
                  inputValue: props.body,
                })
                .then((res) => {
                  if (res.isConfirmed) {
                    showSwal
                      .fire({
                        title: <i>به محصول امتیاز دهید</i>,
                        input: "range",
                        inputAttributes: {
                          min: "1",
                          max: "5",
                          step: "1",
                        },
                        inputValue: props.score,
                        preConfirm: () => {
                          scoreVal.current = Swal.getInput()?.value || "";
                        },
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: false,
                        confirmButtonText: "تایید",
                        cancelButtonText: "انصراف",
                      })
                      .then((res) => {
                        if (res.isConfirmed) {
                          console.log(typeof Number(scoreVal.current));
                          editComment({
                            headers: {
                              Authorization: `Bearer ${userToken}`,
                            },
                            data: {
                              id: props.id,
                              body: commentVal.current,
                              score: Number(scoreVal.current),
                            },
                          }).then(() => {
                            props.refetch();
                          });
                        }
                      });
                  }
                });
            }}
            className="flex items-center gap-1 text-orange-400 border border-solid border-orange-300 py-0.5 px-1 rounded-lg"
          >
            <MdModeEditOutline size="1rem" />
            <span className="sm:inline hidden">ویرایش</span>
          </button>
          <button
            onClick={() => {
              showSwal
                .fire({
                  title: "آیا از حذف نظر اطمینان دارید؟",
                  icon: "question",
                  iconHtml: "؟",
                  confirmButtonText: "بله",
                  cancelButtonText: "خیر",
                  showCancelButton: true,
                  showCloseButton: true,
                })
                .then((res) => {
                  if (res.isConfirmed) {
                    deleteComment({
                      headers: {
                        Authorization: `Bearer ${userToken}`,
                      },
                      url: `/${props.id}`,
                    }).then(() => {
                      props.refetch();
                    });
                  }
                });
            }}
            className="flex items-center gap-1 text-orange-400 border border-solid border-orange-300 py-0.5 px-1 rounded-lg"
          >
            <MdDelete size="1rem" />
            <span className="sm:inline hidden">حذف</span>
          </button>
        </div>
        <div className="absolute -bottom-6 sm:bottom-0 left-0 text-sm font-dana flex items-center gap-1">
          {props.isAccept ? (
            <span className="font-dana text-teal-600 flex items-center gap-1">
              <FaCheck />
              تایید شده
            </span>
          ) : (
            <span className="font-dana text-orange-400 flex items-center gap-1">
              <MdAccessTime />
              در انتظار تایید
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
