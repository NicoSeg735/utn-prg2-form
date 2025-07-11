import { toast as toastReact } from "react-toastify";

export function toast(msj, tipoMsj) {
  switch (tipoMsj) {
    case "ok":
      toastReact.success(msj, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      break;
    case "error":
      toastReact.warn(msj, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      break;
    default:
      toastReact(msj, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }
}
