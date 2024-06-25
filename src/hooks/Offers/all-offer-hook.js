import React, { useState } from 'react'
import product1 from "../../imgs/product-01.png"
import product2 from "../../imgs/product-02.png"
import product3 from "../../imgs/product-03.png"
import product4 from "../../imgs/product-04.png" 
const AllOffersHook = () => { 

    function headData(name) {
        return { name};
      }
      
      const head = [
          headData('id'), 
          headData('Image'), 
          headData('Offer Title') ,
          headData('Offer Price'),  
          headData('Action'), 
      ];
    function createData(id,image,offerTitle,offerPrice) {
        return { id ,image,offerTitle,offerPrice};
      }

      const rows = [
        createData(1,<img style={{marginRight:"8px", width:"60px"}} src={product1} alt="brand1"/>,
            'Apple Watch Series 7', 22),
        createData(2,<img style={{marginRight:"8px", width:"60px"}} src={product2} alt="brand2"/>,
            'Macbook Pro M1', 54),
        createData(3,<img style={{marginRight:"8px", width:"60px"}} src={product3} alt="brand3"/>,
            'Dell Inspiron 15', 34),
        createData(4,<img style={{marginRight:"8px", width:"60px"}} src={product4} alt="brand4"/>,
            "HP Probook 450",20),
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

export default AllOffersHook