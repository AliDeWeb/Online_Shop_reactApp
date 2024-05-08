import { useState } from "react";

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
];

// Axios
import { getAdminPanelUsers } from "../../configs/axios/axiosConfigs";

// React Query
import { useQuery } from "react-query";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function AdminPanelUsers() {
  const { userToken } = useUserToken();

  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "علی",
      lastName: "مرادی",
      email: "alimoradi0@gmail.com",
      phone: "09125698569",
    },
    {
      id: 2,
      firstName: "سارا",
      lastName: "احمدی",
      email: "saraahmadi1@gmail.com",
      phone: "09378456234",
    },
    {
      id: 3,
      firstName: "محمد",
      lastName: "جعفری",
      email: "mohammadjafari2@gmail.com",
      phone: "09101234567",
    },
    {
      id: 4,
      firstName: "مینا",
      lastName: "رضایی",
      email: "minarazaei3@gmail.com",
      phone: "09198765432",
    },
    {
      id: 5,
      firstName: "حسین",
      lastName: "علیزاده",
      email: "hosein_alizadeh4@gmail.com",
      phone: "09123456789",
    },
    {
      id: 6,
      firstName: "زهرا",
      lastName: "محمدی",
      email: "zahramohammadi5@gmail.com",
      phone: "09387654321",
    },
    {
      id: 7,
      firstName: "امیر",
      lastName: "تقی زاده",
      email: "amirtaghzade6@gmail.com",
      phone: "09176543210",
    },
    {
      id: 8,
      firstName: "لیلا",
      lastName: "حسینی",
      email: "leilahosseini7@gmail.com",
      phone: "09165432109",
    },
    {
      id: 9,
      firstName: "اشکان",
      lastName: "موسوی",
      email: "ashkanmousavi8@gmail.com",
      phone: "09154321098",
    },
    {
      id: 10,
      firstName: "نرگس",
      lastName: "صالحی",
      email: "narges_salehi9@gmail.com",
      phone: "09143210987",
    },
    {
      id: 11,
      firstName: "آیدا",
      lastName: "نظری",
      email: "aida_nazari10@gmail.com",
      phone: "09132109876",
    },
    {
      id: 12,
      firstName: "سجاد",
      lastName: "بهرامی",
      email: "sajadbahrami11@gmail.com",
      phone: "09121098765",
    },
    {
      id: 13,
      firstName: "مینو",
      lastName: "ابراهیمی",
      email: "minooebrahimi12@gmail.com",
      phone: "09110987654",
    },
    {
      id: 14,
      firstName: "فرهاد",
      lastName: "رضوانی",
      email: "farhadrezaee13@gmail.com",
      phone: "09109876543",
    },
    {
      id: 15,
      firstName: "مریم",
      lastName: "خانی",
      email: "maryamkhani14@gmail.com",
      phone: "09098765432",
    },
    {
      id: 16,
      firstName: "علیرضا",
      lastName: "حسنی",
      email: "alireza_hosseini15@gmail.com",
      phone: "09087654321",
    },
    {
      id: 17,
      firstName: "نازنین",
      lastName: "احمدیان",
      email: "nazanin_ahmadiyan16@gmail.com",
      phone: "09076543210",
    },
  ]);

  const { data, isLoading, refetch } = useQuery(
    `adminPanelUsers`,
    async () => {
      const res = await getAdminPanelUsers({
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(res.data);
      return res.data;
    },
    {
      cacheTime: 30000,
      staleTime: 0,
      refetchOnMount: true,
    }
  );

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
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={users}
            columns={tableHead}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            
            pageSizeOptions={[5, 10, 20]}
          />
        </div>
      </div>
    </div>
  );
}
