import { useState } from "react";

// Icons
import { MdOutlineDeleteOutline, MdEdit } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

// Axios
import {
  deleteTodos,
  updateTodosStatus,
  updateTodosContent,
} from "../../configs/axios/axiosConfigs";

// Components
import { Modal } from "../../configs/Layout/Layout";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// React Hook Form
import { useForm } from "react-hook-form";

export default function TodoBox({ title, desc, id, isTodoDone, refetch }) {
  const { userToken } = useUserToken();
  const [isDeleteSubmitModalOpen, setIsDeleteSubmitModalOpen] = useState(false);
  const [isDone, setIsDone] = useState(isTodoDone);

  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitTodoForm = (data) => {
    const todosData = {
      title: data.todo,
      description: data?.desc || null,
      id,
    };

    updateTodosContent({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: todosData,
    }).then(() => {
      refetch();
      setIsTodoModalOpen(false);
    });
  };

  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-solid border-gray-400/50">
      <div className="flex items-center gap-4">
        <div>
          <input
            onChange={(el) => {
              setIsDone(el.target.checked);
              updateTodosStatus({
                url: `/${id}`,
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              }).then(() => {
                refetch();
              });
            }}
            type="checkbox"
            className="size-4 cursor-pointer"
            defaultChecked={isDone}
          />
        </div>
        <div className="font-dana">
          <h3
            className={`font-danaDemi text-sm sm:text-base ${isDone ? "text-gray-400" : "text-zinc-700"}`}
          >
            {isDone ? <strike>{title}</strike> : title}
          </h3>
          {desc && <p className="sm:text-sm text-xs text-gray-400">{desc}</p>}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          className="text-orange-300"
          title="ویرایش"
          onClick={() => {
            setIsTodoModalOpen(true);
          }}
        >
          <MdEdit size="1.4rem" />
        </button>
        <Modal isOpen={isTodoModalOpen} title={"افزودن کار"}>
          <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
            <button
              onClick={() => {
                setIsTodoModalOpen(false);
              }}
            >
              <IoCloseCircleOutline size="1.5rem" />
            </button>
            <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
              ویرایش کار
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(submitTodoForm)}
            className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4 font-dana"
          >
            <label htmlFor="todo" className="mb-1.5">
              کار
            </label>
            <input
              {...register(`todo`, {
                required: "این فیلد نمیتواند خالی باشد",
              })}
              id="todo"
              defaultValue={title}
              type="text"
              placeholder="ارسال سفارشات ..."
              className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
            />
            {errors.todo && (
              <span className="text-red-400 mb-4 text-xs sm:text-sm">
                * {errors.todo.message}
              </span>
            )}
            <label htmlFor="desc" className="mb-1.5">
              توضیحات (اختیاری)
            </label>
            <input
              {...register(`desc`)}
              id="desc"
              type="text"
              defaultValue={desc}
              placeholder="هرچه سریع تر ارسال شود ..."
              className="font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
            />

            <button
              className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center"
              type="submit"
            >
              تایید
            </button>
          </form>
        </Modal>
        <button
          className="text-red-500"
          title="حذف"
          onClick={() => {
            setIsDeleteSubmitModalOpen(true);
          }}
        >
          <MdOutlineDeleteOutline size="1.5rem" />
        </button>
        <Modal isOpen={isDeleteSubmitModalOpen} title={"ارسال ایمیل"}>
          <div className="flex items-center gap-2 mr-2 sm:mr-6 mt-4">
            <button
              onClick={() => {
                setIsDeleteSubmitModalOpen(false);
              }}
            >
              <IoCloseCircleOutline size="1.5rem" />
            </button>
            <h2 className="font-danaDemi md:font-danaBold md:text-lg line-clamp-1">
              حذف کار
            </h2>
          </div>

          <div className="flex items-center gap-1">
            <button
              className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-red-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center text-sm text-red-500"
              onClick={() => {
                deleteTodos({
                  url: `/${id}`,
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                })
                  .then(() => {
                    refetch();
                  })
                  .finally(() => {
                    setIsDeleteSubmitModalOpen(false);
                  });
              }}
            >
              تایید
            </button>
            <button
              className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center text-sm"
              onClick={() => {
                setIsDeleteSubmitModalOpen(false);
              }}
            >
              لغو
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
