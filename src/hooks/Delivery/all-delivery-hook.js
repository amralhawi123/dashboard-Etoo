import React, { useState } from 'react'
import product1 from "../../imgs/product-01.png" 
const AllDeliveryHook = () => { 

    function headData(name) {
        return { name};
      }
      
      const head = [
          headData('id'), 
          headData('Image'), 
          headData('Name') ,
          headData('Phone'),  
          headData('Transportation type'),  
          headData('Note'),  
          headData('Action'), 
      ];
    function createData(id,image,name,phone,transType,note) {
        return { id ,image,name,phone,transType,note};
      }

      const rows = [
        createData(1,<img style={{marginRight:"8px", width:"60px"}} src={product1} alt="brand1"/>,
            'Amr', 233522,"car","any thing"),
      ];

      const handleOpen =(e) => {  
        hideAllMenus()
        let box = document.getElementById(e) 
        if (box.style.display === "block") { 
            box.style.display = "none";
        } else { 
            box.style.display = "block";
        } 
}

    // Function to hide all menus
    function hideAllMenus() {
        const menus = document.querySelectorAll(".box-edit")
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
    // Attach event listener to document to hide menus when clicking anywhere
    document.addEventListener('click', function(event) {
      const isIcon = event.target.classList.contains('icon-box');
      if (!isIcon) {
          hideAllMenus();
      }
  });


  return [rows,head,handleOpen ]
}

export default AllDeliveryHook