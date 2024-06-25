import React, { useState } from 'react'

const EditOfferProductHook = () => {
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleEdit= async(e) => {
        setShowEdit(false) 
    }

  return [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ]
}

export default EditOfferProductHook