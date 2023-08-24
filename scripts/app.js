window.onload=function(){
    let menu = document.querySelector(".menu");
    let menu_button = document.querySelector(".header_icon");
    let menu_button_icon = document.querySelector(".header_icon i");

    menu_button.addEventListener("click",function(){
        if(menu_button_icon.classList.contains("fa-bars")){
            menu.style.left = "0";
            menu_button_icon.classList="fa fa-times";
        }else{
            menu.style.left = "-256px";
            menu_button_icon.classList="fa fa-bars";
        }
        
})
}
