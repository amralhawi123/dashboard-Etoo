import React, { useState } from 'react'

const AddMessageHook = () => {
    const [showAdd, setShowAdd] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const handleAdd= async(e) => {
        setShowAdd(false) 
    }

  return [ handleAdd, showAdd,handleCloseAdd,handleShowAdd ]
}

export default AddMessageHook