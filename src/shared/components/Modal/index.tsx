import React from 'react'
import ReactModal from 'react-modal'

interface IModal {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  withContent?: boolean
  title?: string | null
  additionalClassName?: string
  showOverlayButtonClose?: boolean
}
const Modal: React.FC<IModal> = ({
  children,
  isOpen = false,
  onClose = () => {},
  withContent = false,
  title = null,
  additionalClassName = '',
  showOverlayButtonClose = false,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      // afterOpen={'open'}
      overlayClassName="modal-over"
      bodyOpenClassName="modal-open"
      className={{ base: `modal ${additionalClassName}`, afterOpen: 'open', beforeClose: '' }}
      appElement={document.getElementById('app') as HTMLElement}
    >
      <>
        {showOverlayButtonClose && (
          <a href="" className="modal-close btn-modal-close" title={'Close'} onClick={onClose}>
            Close
          </a>
        )}
        <div className="modal-container">
          <div className="modal-overlay btn-modal-close" onClick={onClose} />
          <div className="modal-dialog">
            {withContent ? (
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title">{title}</div>
                  <a href="#" className="modal-close btn-modal-close" title={'Close'} onClick={onClose}>
                    CLose
                  </a>
                </div>
                <div className="modal-body">{children}</div>
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </>
    </ReactModal>
  )
}

export default Modal
