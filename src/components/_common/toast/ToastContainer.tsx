"use client";

import React, { forwardRef, useImperativeHandle, useReducer } from "react";
import Flex from "../flex";
import { Toast } from "./Toast.type";
import { cn } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

const initialState: Array<Toast> = [];
const toastReducer = (
  state = initialState,
  action: { type: string; payload: Toast },
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
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "w-full p-4 rounded-xl font-medium shadow-2xl border-l-4 min-w-[300px] pointer-events-auto bg-primary text-black",
        toast.type === "success"
          ? "border-green-500 bg-green-500"
          : "border-primary",
      )}
    >
      {" "}
      <span className={cn(toast.type === "success" && "text-white")}>
        {toast.message}
      </span>
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
    <Flex className="fixed top-10 right-0 p-6 gap-3 flex-col items-end z-[9999] pointer-events-none">
      <AnimatePresence mode="popLayout" initial={false}>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </Flex>
  );
});

ToastContainer.displayName = "ToastContainer";
