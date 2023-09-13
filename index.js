const modal=document.querySelector(".modals");
const overlay=document.querySelector(".overlay");

const openmodal=()=>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    
};

const closemodal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
};
