var menu = document.getElementById("menu")
var btnOpenMenu = document.getElementById("openMenu")
var btnCloseMenu = document.getElementById("closeMenu")


btnOpenMenu.addEventListener("click", ()=>{
    menu.style.display = "flex"

    menu.style.right = (menu.offsetWidth * -1) + "px"

    btnOpenMenu.style.display = "none"
    setTimeout(()=>{
        menu.style.opacity = "1"

        menu.style.right = "0"
    }, 10)
    
})

btnCloseMenu.addEventListener("click", ()=>{
    menu.style.opacity = "0"
    
    menu.style.right = (menu.offsetWidth * -1) + "px"

    setTimeout(()=>{
        menu.removeAttribute("style")
        btnOpenMenu.removeAttribute("style")
    }, 200)
    
})