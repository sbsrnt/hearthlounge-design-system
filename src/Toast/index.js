import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import styles from './styles.module.scss';

const supportedTypes = ['error', 'info', 'success', 'warn'];

const initToast = () => toast.configure();

const renderToast = ({ text, type, ...options }) =>
  supportedTypes.includes(type)
    ? toast[type](text, {
        className: styles[`${type}-background`],
        bodyClassName: styles[`${type}-color`],
        progressClassName: styles[`${type}-progress`],
        ...options,
      })
    : toast;

export { initToast, renderToast };
