import React from 'react' 


const AllTransportionHook = () => { 

    function headData(name) {
        return { name};
      }
      const head = [
          headData('id'), 
          headData('Transportion'), 
          headData('Action'), 
      ];
    // function createData(id,image,prodName,prodDes,catName,prodPrice, prodOldPrice,action) {
    //     return { id ,image,prodName,prodDes,catName,prodPrice, prodOldPrice,action};
    //   }

    //   const rows = [
    //     createData(1,<img style={{marginRight:"8px", width:"60px"}} src={product1} alt="brand1"/>,
    //         'Apple Watch Series 7',"Electronics", "$269", 22, "$45")
    //   ];

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


  return [head,handleOpen ]
}
export default AllTransportionHook