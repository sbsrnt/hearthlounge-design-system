import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const supportedTypes = ['error', 'info', 'success', 'warn'];

const initToast = () => toast.configure();

const renderToast = ({ text, type, ...options }) =>
  supportedTypes.includes(type)
    ? toast[type](text, {
        className: `toast__${type}--background`,
        bodyClassName: `toast__${type}--color`,
        progressClassName: `toast__${type}--progress`,
        ...options,
      })
    : toast;

export { initToast, renderToast };
