import React, { forwardRef, useImperativeHandle, useReducer } from "react";
import Flex from "../flex";
import { Toast } from "./Toast.type";
import { cn } from "@nextui-org/react";
import { motion } from "framer-motion";

const initialState: Array<Toast> = [];
const toastReducer = (
  state = initialState,
  action: { type: string; payload: Toast }
) => {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.payload];
    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.payload.id);
    default:
      return state;
  }
};

const ToastItem = ({ toast }: { toast: Toast }) => {
  return (
    <motion.div
      layout
      className={cn(
        "w-full p-4 bg-white rounded-md text-lg font-semibold",
        toast.type === "success" && "bg-green-500 text-white"
      )}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {toast.message}
    </motion.div>
  );
};

export const ToastContainer = forwardRef((props, ref) => {
  const [toasts, dispatch] = useReducer(toastReducer, initialState);

  useImperativeHandle(ref, () => ({ showToast }));

  const showToast = ({ message, type }: Toast) => {
    const id = Math.random().toString(36).substr(2, 9);

    dispatch({ type: "ADD_TOAST", payload: { id, message, type } });
    setTimeout(() => {
      dispatch({ type: "REMOVE_TOAST", payload: { id } });
    }, 3500);
  };

  return (
    <Flex className="fixed top-0 right-0 p-6 gap-4 flex-col min-w-[200px] items-end z-[1000]">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </Flex>
  );
});
ToastContainer.displayName = "ToastContainer";
