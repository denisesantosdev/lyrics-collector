import React, { useCallback, useContext } from 'react'
import { ToastContext } from '../../context/ToastContext'

const Toast = () => {
  const {toastState} = useContext(ToastContext)

  //console.log(toastState);

  return (
    <div>{toastState.message}</div>
  )
}

export default Toast