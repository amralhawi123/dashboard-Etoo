import  { useState } from 'react'

const DeleteProductHook = () => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState()
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
      setShow(true);  
      setId(e)
    }

    const OnhandleClick= async(e) => {
      setShow(false)
      console.log(id)
    }

  return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteProductHook