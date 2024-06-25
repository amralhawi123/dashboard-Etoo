import  { useState } from 'react'

const DeleteDeliveryHook = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const OnhandleClick= async(e) => {
        setShow(false) 
    }

  return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteDeliveryHook