const Modal = ({ onClose }) => {
    return (
        <div className="modal-mask">
            <div class="modal-container">
                <div className="center">
                    <div class="modal-body">
                        <div className="center column">
                            <img src="/logo.svg" alt="" className="logo-image"/>
                            <div className="text">
                                <button onClick={onClose}>
                                    <img src="/icon-prompt.svg" alt=""/>
                                    Click begin to get started.
                                </button>
                            </div>
                        </div>
                        <img src="/globe.svg" alt="" className="globe-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;