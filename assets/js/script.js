let navMenu = document.getElementsByClassName("menu")[0];
let navBar = document.getElementsByClassName("navlinks")[0];
navMenu.addEventListener("click",
                         function() { navBar.classList.toggle("show"); });
