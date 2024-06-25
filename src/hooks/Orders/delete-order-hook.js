import React, { useState } from 'react'

const DeleteOrderHook = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const OnhandleClick= async(e) => {
        setShow(false) 
    }

  return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteOrderHook