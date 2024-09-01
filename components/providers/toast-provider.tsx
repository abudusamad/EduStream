"use client";

import { Toaster } from "react-hot-toast";
import { ToastProvider } from "../ui/toast";

export const ToastPovider = () => {
  return (
    <>
      <Toaster />
      <ToastProvider />
    </>
  );
};
