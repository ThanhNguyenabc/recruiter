export type Toast = { id?: string; message?: string; type?: string };
export type ToastContextProps = { showToast: (toast: Toast) => void };
