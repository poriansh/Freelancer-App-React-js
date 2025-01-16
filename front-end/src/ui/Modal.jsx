import {XMarkIcon} from "@heroicons/react/20/solid";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ title, children, open, onClose }) {
const ref = useOutsideClick(onClose)
  return (
    open && (
      <div className="backdrop-blur-sm fixed inset-0 bg-secondary-800/30 z-50 flex items-center justify-center">
        <div
          ref={ref}
          className="fixed bg-secondary-0 rounded-lg shadow-lg transition-all p-3 w-[calc(100vw-2rem)]  sm:max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex justify-between items-center border-b border-gray-400 pb-2 mb-5">
            <p className="text-secondary-900">{title}</p>
            <button onClick={onClose}>
              <XMarkIcon className="w-5 h-5 text-secondary-900" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
