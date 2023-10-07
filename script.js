const focusTxt = document.querySelector("#focusTxt");
const divBlock = document.querySelector("#divBlock");

focusTxt.addEventListener(
    "focus",function(){
        divBlock.style.display = "block";
    })
focusTxt.addEventListener(
    "blur",function(){
        divBlock.style.display = "none";
    })