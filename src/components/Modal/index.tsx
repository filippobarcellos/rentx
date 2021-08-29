/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";

import confirm from "assets/images/confirm.png";

import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  const onClickOutside = useCallback(
    (e) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  }, [onKeyPress]);

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [onClickOutside]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.Wrapper>
      <S.Container ref={modalRef}>
        <S.Image src={confirm} />
        <S.Title>Success</S.Title>
        <S.Description>
          Now you are part of Rentx. Login and start enjoy great cars.
        </S.Description>

        <S.ConfirmationButton>Ok</S.ConfirmationButton>
      </S.Container>
    </S.Wrapper>,
    document.getElementById("modal-root")!
  );
};
