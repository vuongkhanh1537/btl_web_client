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
    <>
      <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleToggleModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleToggleModal}
              >
                {close}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickConfirm}
              >
                {confirm}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
