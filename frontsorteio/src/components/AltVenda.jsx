
export default function AltVenda({ isOpen, openModal, children }) {
  const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0, 0, 0, 0.7)',
    zIndex: '1000'
  }

  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '10px'
  }



  if (isOpen) {
    return (
      <>
        <div style={BACKGROUND_STYLE}>
          <div style={MODAL_STYLE}>{children}
            <button className="btn btn-outline-danger mt-2" onClick={openModal} >Cancelar</button>
          </div>

        </div>

      </>);
  } else {
    return null
  }



}
