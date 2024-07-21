import { createPortal } from "react-dom";
import { Motion } from "../../configs/Layout/Layout";

export default function Modal({ isOpen, children, changeVisibility }) {
  return createPortal(
    <Motion>
      {isOpen && (
        <Motion.opacity>
          <div
            className="modal-wrapper fixed bottom-0 top-0 right-0 left-0 w-full h-[100dvh] bg-black/40 z-30 flex items-center justify-center transition-all"
          >
            <Motion.page
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: "0 0 20px rgb(48,45,45)" }}
              className="w-[350px] sm:w-[450px] md:w-[650px] py-2 px-4 rounded-lg border-2 border-solid border-orange-300 bg-[#ececec]"
            >
              {children}
            </Motion.page>
          </div>
        </Motion.opacity>
      )}
    </Motion>,
    document.body
  );
}
