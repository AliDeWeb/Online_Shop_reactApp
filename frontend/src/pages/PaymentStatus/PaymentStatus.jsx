import { useEffect, useState } from "react";

// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

// React Router
import { useNavigate } from "react-router-dom";

export default function PaymentStatus() {
  const [status, setStatus] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get(`Status`);

    setStatus(status);

    setTimeout(() => {
      navigator(`/`);
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center h-[100dvh]">
      {!!status &&
        (status === `OK` ? (
          <div className="flex items-center font-danaBold text-zinc-700 text-2xl gap-2.5">
            <div className="text-teal-400">
              <FaRegCheckCircle size="2rem" />
            </div>
            <h2>پرداخت موفق</h2>
          </div>
        ) : (
          <div className="flex items-center font-danaBold text-zinc-700 text-2xl gap-2.5">
            <div className="text-red-500">
              <IoMdCloseCircleOutline size="2rem" />
            </div>
            <h2>پرداخت ناموفق</h2>
          </div>
        ))}
    </div>
  );
}
