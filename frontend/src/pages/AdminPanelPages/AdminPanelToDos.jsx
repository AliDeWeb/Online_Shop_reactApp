import { useEffect } from "react";

export default function AdminPanelToDos() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = "تیمچه - لیست کار ها";
  }, []);

  return <div>AdminPanelToDos</div>;
}
