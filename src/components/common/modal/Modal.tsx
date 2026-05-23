import type { ModalProps } from "./ModalTypes";

const Modal = ({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-[400px] shadow-2xl">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          {/* Cancel */}
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all"
          >
            {cancelText}
          </button>

          {/* Confirm */}
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;