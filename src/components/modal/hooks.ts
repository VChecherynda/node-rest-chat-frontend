import { useDispatch } from "react-redux";

import { closeModal } from "store/modules/modals/actions";

interface ModalProps {
  reject: () => void
}

export default ({ reject }: ModalProps ) => {
  const dispatch = useDispatch();

  const useCloseModal = () => {
    reject();
    dispatch(closeModal());
  };

  return { useCloseModal };
};
