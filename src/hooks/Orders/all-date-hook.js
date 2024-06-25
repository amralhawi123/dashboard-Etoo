import React, { useState } from 'react'

const AllOrderHook = () => { 
    function headData(name,iconUp,iconDown) {
        return { name,iconUp, iconDown };
      }
      
      const head = [
          headData('id' 
          ), 
          headData('idClient Name' 
          ), 
          headData('location' 
          ), 
          headData('Trans Cost' 
          ), 
          headData('Landmark' 
          ), 
          headData('Order Satus' 
          ), 
          headData('Delivery Boys' 
          ), 
          headData('Date' 
          ), 
          headData('note' 
          ), 
          headData('Actions' 
          ), 
      ];
    function createData(id,name, address, cost, mark, status,boys,date,note,action) {
        return { id, name,address, cost, mark, status ,boys,date,note,action};
      }

    const rows = [
        createData(1,"Amr", "cairo, Naser City", 390, "test", "open","test","2023-03-12 10:47:56", "test"),
        createData(2,"Amr", "cairo, Naser City", 540, "test", "Delivery","test","2023-03-12 10:47:56", "test"),
        createData(3,"Amr", "cairo, Naser City", 340, "test", "open","test","2023-03-12 10:47:56", "test"),
        createData(4,"Amr", "cairo, Naser City", 230, "test", "Delivery","test","2023-03-12 10:47:56", "test"),
        createData(5,"Amr", "cairo, Naser City", 430, "test", "open","test","2023-03-12 10:47:56", "test" ),
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

export default AllOrderHook