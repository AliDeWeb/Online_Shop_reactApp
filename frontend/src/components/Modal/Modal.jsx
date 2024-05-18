import { useEffect } from "react";

export default function Modal({ isOpen, children, changeVisibility }) {
  useEffect(() => {
    window.addEventListener(`click`, (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (e?.target?.className?.includes(`modal-wrapper`)) {
        console.log(`hi`);
        changeVisibility(false);
      }
    });
  }, []);

  return (
    <div
      className={`${!isOpen ? "opacity-0 invisible" : "opacity-100 visible"} modal-wrapper fixed bottom-0 top-0 right-0 left-0 w-full h-[100dvh] bg-black/40 backdrop-blur-sm z-30 flex items-center justify-center transition-all`}
    >
      <div
        style={{ boxShadow: `0 0 20px rgb(48,45,45)` }}
        className="w-[350px] sm:w-[450px] md:w-[650px] py-2 px-4 rounded-lg border-2 border-solid border-orange-300 bg-[#ececec]"
      >
        {children}
      </div>
    </div>
  );
}
