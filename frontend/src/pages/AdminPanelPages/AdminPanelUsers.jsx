import { useEffect, useState } from "react";

// Mui
import { DataGrid } from "@mui/x-data-grid";
const tableHead = [
  { field: "id", headerName: "شناسه", width: 120 },
  {
    field: "fullName",
    headerName: "نام",
    description: "این ستون قابل مرتب سازی نیست.",
    sortable: false,
    width: 130,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "ایمیل",
    width: 180,
    description: "این ستون قابل مرتب سازی نیست.",
    sortable: false,
  },
  {
    field: "phone",
    headerName: "شماره تلفن",
    width: 150,
    description: "این ستون قابل مرتب سازی نیست.",
    sortable: false,
  },
  {
    field: "totalProfit",
    headerName: "مبالغ خرید",
    width: 150,
  },
];

// React Spinners
import BeatLoader from "react-spinners/BeatLoader";

// Axios
import { getAdminPanelUsers } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function AdminPanelUsers() {
  const { userToken } = useUserToken();

  const [users, setUsers] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);

  const { isLoading } = useQuery(
    `adminPanelUsers`,
    async () => {
      const res = await getAdminPanelUsers({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUsers(() =>
        res.data.map((el, index) => ({
          ...el,
          id: index + 1,
          totalProfit: el.totalProfit ? el.totalProfit.toLocaleString() : `-`,
        }))
      );
      return res.data;
    },
    {
      cacheTime: 800000,
      staleTime: 15000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    document.title = "تیمچه - کاربران";
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-2.5 font-dana mb-8">
          <div>
            <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
              کاربران
            </h2>
          </div>
        </div>
        {!isLoading ? (
          <div
            className="table-container"
            style={{ width: "100%", overflowX: `auto` }}
          >
            <div
              className="users-table-wrapper"
              style={{ width: "max-content" }}
            >
              <DataGrid
                rows={users}
                columns={tableHead}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 12 },
                  },
                }}
                pageSizeOptions={[5, 12, 25, 50, 100]}
                checkboxSelection
                onRowSelectionModelChange={(cell) => {
                  setSelectedCells([]);
                  cell.forEach((el) => {
                    setSelectedCells((priv) => {
                      return [
                        ...priv,
                        users.filter((user) => {
                          return el === user.id;
                        }),
                      ];
                    });
                  });
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[200px] text-teal-600">
            <BeatLoader color="rgb(13, 148, 136)" />
          </div>
        )}
      </div>
    </div>
  );
}
