import { toast } from "react-toastify";

const showSuccessNotification = (message: string) => {
  toast.success(message);
};

const showErrorNotification = (error: string) => {
  toast.error(error);
};

export { showSuccessNotification, showErrorNotification };
