import React, { useCallback, useContext, useEffect } from "react";
import { ToastContext } from "../../context/ToastContext";
import styled from "styled-components";
import {
  alertIcon,
  errorIcon,
  successIcon,
  closeIcon,
} from "../../theme/icons";

const StyledToast = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.3rem;
  margin: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ type, theme }) => theme.colors[type]};
  display: flex;
  justify-items: center;
  gap: 1rem;

  & p {
    font-weight: bold;
    color: black;
  }
`;

const Toast = () => {
  const { toastState, setToastState } = useContext(ToastContext);

  //console.log(toastState);
  let toastIcon;

  switch (toastState.type) {
    case "error":
      toastIcon = errorIcon;
      break;
    case "alert":
      toastIcon = alertIcon;
    default:
      toastIcon = successIcon;
      break;
  }

  return (
    <>
      {toastState.visible && (
        <StyledToast type={toastState.type}>
          <img
            src={toastIcon}
            alt=""
          />
          <p>{toastState.message}</p>
          <button
            onClick={() =>
              setToastState({ visible: false, message: "", type: "" })
            }>
            <img
              src={closeIcon}
              alt=""
            />
          </button>
        </StyledToast>
      )}
    </>
  );
};

export default Toast;
