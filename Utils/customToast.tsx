import toast from "react-hot-toast";

const showLoading = (message: string, id: string) => {
    return toast.loading(message, {id})
}

const success = (message: string, id: string) => {
    return toast.success(message, {id})
}

const dismiss = (id: string) => {
    return toast.dismiss(id)
}

const showError = (message: string, id: string) => {
    return toast.error(message, {id})
}

export const customToast = {
    showLoading,
    success,
    showError,
    dismiss
}