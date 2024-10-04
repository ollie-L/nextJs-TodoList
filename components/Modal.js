
function Modal({modalOpen, setModalOpen, children}) {

  return (
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <form method="dialog" onSubmit={(e) => e.preventDefault()} >
            <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* 由AddTask.js 和 TodoList.js 傳入 */}
          {children}
        </div>
     </div>

  );
}

export default Modal;
