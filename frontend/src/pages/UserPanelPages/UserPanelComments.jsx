// Axios
import { getUserPanelData } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery, useQueryClient } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

// Components
import { CommentBox } from "../../configs/Layout/Layout";

export default function UserPanelComments() {
  const { userToken } = useUserToken();
  const queryClient = useQueryClient();
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery(
    `userPanelInfos`,
    async () => {
      if (userToken) {
        const res = await getUserPanelData({
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return res.data;
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
      initialData: () => {
        const data = queryClient.getQueryData(`userPanelInfos`);

        return data;
      },
    }
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="inline-block font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
          نظرات شما
        </h2>
      </div>

      <div className="divide-y divide-solid divide-gray-400/20">
        {!isLoading &&
          userData?.comments?.map((el) => (
            <div key={Math.random()}>
              <CommentBox
                name={`${el.creator.firstName} ${el.creator.lastName}`}
                createdAt={el.createdAt}
                score={el.score}
                isAnswer={el.isAnswer}
                commentAnswers={el?.commentAnswers}
                body={el.body}
                id={el._id}
                refetch={refetch}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
