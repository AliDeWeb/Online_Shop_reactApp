import { useEffect, useState, useRef } from "react";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Axios
import { addNewTodo, getTodos } from "../../configs/axios/axiosConfigs";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

// Components
import { Modal, TodoBox } from "../../configs/Layout/Layout";

// React Query
import { useQuery } from "react-query";

export default function AdminPanelToDos() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = "تیمچه - لیست کار ها";
  }, []);

  const { userToken } = useUserToken();
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
    };

    addNewTodo({
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: todosData,
    }).then(() => {
      refetch();
      setIsTodoModalOpen(false);

      document.querySelectorAll(`.todoInput`).forEach((el) => {
        el.value = null;
      });
    });
  };

  const { data, isLoading, refetch } = useQuery(
    `adminPanelTodos`,
    async () => {
      const res = await getTodos({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return res.data;
    },
    {
      cacheTime: 800000,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  return (
    <div>
      <div className="flex items-center justify-between px-2.5 font-dana mb-8">
        <div>
          <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
            لیست کارها
          </h2>
        </div>
        <div>
          <button
            onClick={() => {
              setIsTodoModalOpen(true);
            }}
            className="border border-solid border-orange-400 px-3 py-1.5 rounded-lg text-orange-400 text-sm flex items-center gap-1"
          >
            <IoMdAddCircleOutline size="1.2rem" />
            <span className="hidden sm:inline">ثبت کار جدید</span>
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
                افزودن کار جدید
              </h2>
            </div>
            <form
              onSubmit={handleSubmit(submitTodoForm)}
              className="flex flex-col py-2 px-4 rounded-lg text-zinc-700 mt-4"
            >
              <label htmlFor="todo" className="mb-1.5">
                کار
              </label>
              <input
                {...register(`todo`, {
                  required: "این فیلد نمیتواند خالی باشد",
                })}
                id="todo"
                type="text"
                placeholder="ارسال سفارشات ..."
                className="todoInput font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
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
                placeholder="هرچه سریع تر ارسال شود ..."
                className="todoInput font-dana mb-4  mt-1 outline-none bg-transparent border-b border-solid border-gray-300 focus:border-orange-300 pb-2 text-sm"
              />

              <button
                className="font-danaBold mt-4 cursor-pointer w-full h-[40px] bg-orange-200 hover:bg-orange-300/80 transition-all rounded-lg flex justify-center items-center"
                type="submit"
              >
                تایید
              </button>
            </form>
          </Modal>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {!isLoading &&
          !!data.length &&
          data
            .filter((el) => el.isDone === 0)
            .map((el) => (
              <div key={Math.random()}>
                <TodoBox
                  title={el?.title}
                  desc={el?.description}
                  id={el?._id}
                  isTodoDone={el?.isDone}
                  refetch={refetch}
                />
              </div>
            ))}
        {!isLoading &&
          (!!data.length ? (
            data
              .filter((el) => el.isDone === 1)
              .map((el) => (
                <div key={Math.random()}>
                  <TodoBox
                    title={el?.title}
                    desc={el?.description}
                    id={el?._id}
                    isTodoDone={el?.isDone}
                    refetch={refetch}
                  />
                </div>
              ))
          ) : (
            <div className="h-[200px] flex justify-center items-center font-dana">
              <span className="text-gray-400 text-sm">هیچ کاری وجود ندارد</span>
            </div>
          ))}
      </div>
    </div>
  );
}
