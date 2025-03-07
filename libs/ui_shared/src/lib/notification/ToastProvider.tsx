// shared-toast/src/index.ts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="light"
  />
);

export { toast };
