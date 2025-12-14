import { toast } from "react-toastify";

const successfullyDone = (message)=> toast.success( message , {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

 export default successfullyDone