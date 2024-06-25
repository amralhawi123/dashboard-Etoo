import React, { useState } from 'react'

const AllMapsHook = () => { 

    function headData(name,iconUp,iconDown) {
        return { name,iconUp, iconDown };
      }

		
      const head = [
          headData('id'
          ), 
          headData('Stats Name'
          ), 
          headData('location Name'
          ), 
          headData('Admin Unit Name'
          ), 
          headData('Price'
          ), 
          headData('Action'
          ), 
      ];
    function createData(id,statsName, locationName,admainName,price) {
        return { id, statsName, locationName,admainName,price};
      }

    const rows = [
        createData(1,"Amr", "cairo, Naser City", "test",300),
        createData(2,"Amr", "cairo, Naser City", "test",300),
        createData(3,"Amr", "cairo, Naser City", "test",300),
        createData(4,"Amr", "cairo, Naser City", "test",300),
        createData(5,"Amr", "cairo, Naser City", "test",300 ),
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

export default AllMapsHook