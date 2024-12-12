import { useState } from "react";

function DeleteModal({
  showModal,
  handleToggleModal,
  handleConfirm,
  title,
  body,
  close,
  confirm,
}) {
  
  function handleClickConfirm(){
    handleConfirm();
    handleToggleModal();
  }

  return (
    // <>
    //   <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title">{title}</h5>
    //           <button
    //             type="button"
    //             className="btn-close"
    //             data-bs-dismiss="modal"
    //             aria-label="Close"
    //             onClick={handleToggleModal}
    //           ></button>
    //         </div>
    //         <div className="modal-body">
    //           <p>{body}</p>
    //         </div>
    //         <div className="modal-footer">
    //           <button
    //             type="button"
    //             className="btn btn-secondary"
    //             data-bs-dismiss="modal"
    //             onClick={handleToggleModal}
    //           >
    //             {close}
    //           </button>
    //           <button
    //             type="button"
    //             className="btn btn-primary"
    //             onClick={handleClickConfirm}
    //           >
    //             {confirm}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
      showModal ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    tabIndex="-1"
  >
    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
      <div className="border-b px-5 py-3 flex justify-between items-center">
        <h5 className="text-xl font-semibold">{title}</h5>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-800 transition text-2xl"
          aria-label="Close"
          onClick={handleToggleModal}
        >
          &times;
        </button>
      </div>
      <div className="px-5 py-4 mb-6">
        <p>{body}</p>
      </div>
      <div className="border-t px-5 py-3 flex justify-end space-x-3">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          onClick={handleToggleModal}
        >
          {close}
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleClickConfirm}
        >
          {confirm}
        </button>
      </div>
    </div>
  </div>
</>

  );
}

export default DeleteModal;
