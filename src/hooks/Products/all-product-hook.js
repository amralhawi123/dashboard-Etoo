import React, { useState } from 'react'
import product1 from "../../imgs/product-01.png"
import product2 from "../../imgs/product-02.png"
import product3 from "../../imgs/product-03.png"
import product4 from "../../imgs/product-04.png" 
const AllProductsHook = () => { 

    function headData(name) {
        return { name};
      }
      
      const head = [
          headData('id'), 
          headData('Image'), 
          headData('Product Name'), 
          headData('Product Description'), 
          headData('Category Name'), 
          headData('Product Price'), 
          headData('product Price Old'), 
          headData('Action'), 
      ];
    function createData(id,image,prodName,prodDes,catName,prodPrice, prodOldPrice,action) {
        return { id ,image,prodName,prodDes,catName,prodPrice, prodOldPrice,action};
      }

      const rows = [
        createData(1,<img style={{marginRight:"8px", width:"60px"}} src={product1} alt="brand1"/>,
            'Apple Watch Series 7',"Electronics", "$269", 22, "$45"),
        createData(2,<img style={{marginRight:"8px", width:"60px"}} src={product2} alt="brand2"/>,
            'Macbook Pro M1',"Electronics", "$368", 54, "$36"),
        createData(3,<img style={{marginRight:"8px", width:"60px"}} src={product3} alt="brand3"/>,
            'Dell Inspiron 15',"Electronics", "$768", 34, "$64"),
        createData(4,<img style={{marginRight:"8px", width:"60px"}} src={product4} alt="brand4"/>,
            "HP Probook 450", "Electronics", "$456",20, "$64"),
      ];

      const handleOpen =(e) => {  
        console.log(e)
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

export default AllProductsHook