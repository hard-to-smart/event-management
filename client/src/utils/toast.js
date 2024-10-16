import { toast } from 'react-toastify';

 export const notify = (message, type) => {
  if (type === 'success') {
    toast.success(message);
  } else {
    toast.error(message);
  }
};

