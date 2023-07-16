//const inputTopText = document.querySelector(".top-text")

//inputTopText.oninput = () => {
//    inputTopText.innerHTML = '${inputTopText.value}'
//}

//variables


const colorMode = document.querySelector(".light-icon")
const inputUrlMode = document.querySelector("#url-field")
const mainImage = document.querySelector(".main-image")





//-------------------------------
//buttons
const imageMenu = document.querySelector(".image-icon")
const textMenu = document.querySelector(".text-icon")
const imageMenuButton= document.querySelector(".mode-edition")




imageMenu.addEventListener("click", ()=>{
    
    if (imageMenuButton.style.visibility === "hidden") {
        imageMenuButton.style.visibility = "visible";
    }else {
        console.log(imageMenu);
        }
        
})
textMenu.addEventListener("click", ()=>{
    const textMenuButton= document.querySelector(".text-edition").classList.toggle("display-visibility")
    console.log(textMenuButton)
})


// function changeMenuImage() {
//     if (imageMenu.style.visibility === "hidden") {
//         imageMenu.style.visibility = "visible";
//     }else {
//         console.log(imageMenu);
//     }
//   }
// function changeMenuText() {
//     if (textMenu.style.visibility === "hidden") {
//         textMenu.style.visibility = "visible";
//     } else {
//         textMenu.style.visibility = "hidden";
        
//         console.log(textMenu);
//     }
    
// }


//----------------------------
//modo claro
colorMode.addEventListener("click", () => {
    const segmentColor = document.querySelector(".second-segment").classList.toggle("second-segment-light")
    const headerColor = document.querySelector(".header").classList.toggle("header-light")
    const headerIconsColor = document.querySelector(".header-buttons-list").classList.toggle("header-buttons-list-light")
  //  const IconsColorlight = document.querySelector(".image-icon-light").classList.toggle(".image-icon-light")
})
















//url image
inputUrlMode.addEventListener ( "input", () => {
    console.log ("funciona")
    console.log (mainImage)
    mainImage.style.backgroundImage =  `url('${inputUrlMode.value}')`
})