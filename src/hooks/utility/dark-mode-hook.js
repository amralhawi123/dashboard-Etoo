import React, { useEffect, useState } from 'react'

const DarkModeHook = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            if(document.querySelector(".App")){
                document.querySelector(".App").classList.add('dark-mode');
                }
            if(document.querySelector(".head")){
                document.querySelector(".head").classList.add('dark-mode'); 
            }
            if(document.querySelector(".main-content")){
                document.querySelector(".main-content").classList.add('dark-mode');
            }
            if(document.querySelector(".lineCart-style")){
                document.querySelector(".lineCart-style").classList.add('dark-mode');
            }
            if(document.querySelector(".custom-chart-container")){
                document.querySelector(".custom-chart-container").classList.add('dark-mode');
            }
            if(document.querySelector(".map-container")){
                document.querySelector(".map-container").classList.add('dark-mode');
            }
            if(document.querySelectorAll(".contact_name")){
                document.querySelectorAll(".contact_name").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll(".chat_date")){
                document.querySelectorAll(".chat_date").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelector(".css-quj9j6-MuiTable-root")){
                document.querySelector(".css-quj9j6-MuiTable-root").classList.add('dark-mode');
            }
            if(document.querySelector(".css-15wwp11-MuiTableHead-root")){
                document.querySelector(".css-15wwp11-MuiTableHead-root").classList.add('dark-mode');
            }
            if(document.querySelector(".css-11xur9t-MuiPaper-root-MuiTableContainer-root")){
                document.querySelector(".css-11xur9t-MuiPaper-root-MuiTableContainer-root").classList.add('dark-mode');
            }
            if(document.querySelectorAll(".box")){
                document.querySelectorAll(".box").forEach((el) => el.classList.add('dark-mode')) 
            }
            if(document.querySelectorAll(".chart-container")){
                document.querySelectorAll(".chart-container").forEach((el) => el.classList.add('dark-mode'))   
            }  
            if(document.querySelectorAll(" p")){
                document.querySelectorAll(" p").forEach((el) => el.classList.add('dark-mode'))   
            }
            if(document.querySelectorAll("th")){
                document.querySelectorAll("th").forEach((el) => el.classList.add('dark-mode'))   
            }
            if(document.querySelectorAll(".box-noti")){
                document.querySelectorAll(".box-noti").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll("select")){
                document.querySelectorAll("select").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll(".back-span")){
                document.querySelectorAll(".back-span").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll("h5")){
                document.querySelectorAll("h5").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll("h6")){
                document.querySelectorAll("h6").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll(".search-dark")){
                document.querySelectorAll(".search-dark").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll(".icon-box")){
                document.querySelectorAll(".icon-box").forEach((el) => el.classList.add('dark-mode'))
            }
            if(document.querySelectorAll(".btn-add")){
                document.querySelectorAll(".btn-add").forEach((el) => el.classList.add('dark-mode'))
            }
        } else {
            if(document.querySelector(".App")){
                document.querySelector(".App").classList.remove('dark-mode');
                }
            if(document.querySelector(".head")){
                document.querySelector(".head").classList.remove('dark-mode'); 
            }
            if(document.querySelector(".main-content")){
                document.querySelector(".main-content").classList.remove('dark-mode');
            }
            if(document.querySelector(".lineCart-style")){
                document.querySelector(".lineCart-style").classList.remove('dark-mode');
            }
            if(document.querySelector(".custom-chart-container")){
                document.querySelector(".custom-chart-container").classList.remove('dark-mode');
            }
            if(document.querySelector(".map-container")){
                document.querySelector(".map-container").classList.remove('dark-mode');
            }
            if(document.querySelectorAll(".contact_name")){
                document.querySelectorAll(".contact_name").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll(".chat_date")){
                document.querySelectorAll(".chat_date").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelector(".css-quj9j6-MuiTable-root")){
                document.querySelector(".css-quj9j6-MuiTable-root").classList.remove('dark-mode');
            }
            if(document.querySelector(".css-15wwp11-MuiTableHead-root")){
                document.querySelector(".css-15wwp11-MuiTableHead-root").classList.remove('dark-mode');
            }
            if(document.querySelector(".css-11xur9t-MuiPaper-root-MuiTableContainer-root")){
                document.querySelector(".css-11xur9t-MuiPaper-root-MuiTableContainer-root").classList.remove('dark-mode');
            }
            if(document.querySelectorAll(".box")){
                document.querySelectorAll(".box").forEach((el) => el.classList.remove('dark-mode')) 
            }
            if(document.querySelectorAll(".chart-container")){
                document.querySelectorAll(".chart-container").forEach((el) => el.classList.remove('dark-mode'))   
            }  
            if(document.querySelectorAll(" p")){
                document.querySelectorAll(" p").forEach((el) => el.classList.remove('dark-mode'))   
            }
            if(document.querySelectorAll("th")){
                document.querySelectorAll("th").forEach((el) => el.classList.remove('dark-mode'))   
            }
            if(document.querySelectorAll(".box-noti")){
                document.querySelectorAll(".box-noti").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll("select")){
                document.querySelectorAll("select").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll(".back-span")){
                document.querySelectorAll(".back-span").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll("h6")){
                document.querySelectorAll("h6").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll("h5")){
                document.querySelectorAll("h5").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll(".search-dark")){
                document.querySelectorAll(".search-dark").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll(".icon-box")){
                document.querySelectorAll(".icon-box").forEach((el) => el.classList.remove('dark-mode'))
            }
            if(document.querySelectorAll(".btn-add")){
                document.querySelectorAll(".btn-add").forEach((el) => el.classList.remove('dark-mode'))
            }
        }
    }, [darkMode]);

    return [darkMode,setDarkMode]
}

export default DarkModeHook