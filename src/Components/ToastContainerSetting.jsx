import React from 'react'
import { ToastContainer } from 'react-toastify';
export const ToastContainerSetting = () => {
    return (
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
  )
}
