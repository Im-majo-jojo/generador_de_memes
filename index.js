//const inputTopText = document.querySelector(".top-text")

//inputTopText.oninput = () => {
//    inputTopText.innerHTML = '${inputTopText.value}'
//}

//-------------------------------
//buttons
const mainImage = document.querySelector(".main-image")
const imageMenu = document.querySelector(".image-icon")
const textMenu = document.querySelector(".text-icon")
const imageMenuButton= document.querySelector(".mode-edition")
const textMenuButton= document.querySelector(".text-edition")

imageMenu.addEventListener("click", ()=>{
    imageMenuButton.classList.toggle("display-visibility-image")
    imageMenuButton.style.zIndex = 15
    textMenuButton.style.zIndex = 8
    console.log("aquitoyyo")
})
textMenu.addEventListener("click", ()=>{
    textMenuButton.classList.toggle("display-visibility-text")
    textMenuButton.style.zIndex = 15
    imageMenuButton.style.zIndex = 8
    console.log("aquitoy")
})
//----------------------------
//modo claro
const colorMode = document.querySelector(".light-icon")

function toggleTittle() {
    if (colorMode.innerHTML === "Modo claro") {
        colorMode.innerHTML = "Modo oscuro";
    } else {
        colorMode.innerHTML = "Modo claro";
    }
  }

colorMode.addEventListener("click", () => {

    const segmentColor = document.querySelector(".second-segment").classList.toggle("second-segment-light")
    const headerColor = document.querySelector(".header").classList.toggle("background-light")
    const headerIconsColor = document.querySelector(".header-buttons-list").classList.toggle("header-buttons-list-light")
    const bodyColor = document.querySelector(".body").classList.toggle("body-light")
    const asideTextColor = document.querySelector(".text-edition").classList.toggle("aside-light")
    const asideImageColor = document.querySelector(".mode-edition").classList.toggle("aside-light")
    const inputColorLight = document.getElementById("url-field").classList.toggle("background-light")
    const inputTopTextLight = document.querySelector(".text-field-top").classList.toggle("background-light")
    const inputBottomTextLight = document.querySelector(".text-field-bottom").classList.toggle("background-light")
    const selectMode = document.getElementById("select-mode").classList.toggle("background-light")
    const selectFontFamily = document.getElementById("select-font-family").classList.toggle("background-light")
    const paddingTextValue = document.getElementById("padding-text-value").classList.toggle("background-light")
    const leftAlignText = document.getElementById("left-align-text").classList.toggle("background-light")
    const centerAlignText = document.getElementById("center-align-text").classList.toggle("background-light")
    const rightAlignText = document.getElementById("right-align-text").classList.toggle("background-light")
    const textSizeInput = document.getElementById("text-size-input").classList.toggle("background-light")
    const noneContourText = document.getElementById("none-contour-text").classList.toggle("background-light")
    const ligthContourText = document.getElementById("ligth-contour-text").classList.toggle("background-light")
    const darkContourText = document.getElementById("dark-contour-text").classList.toggle("background-light")
    const selectLineHeight = document.getElementById("select-line-height").classList.toggle("background-light")


    

    
})
//#select-mode,
// #select-font-family,
// #padding-text-value,
// #left-align-text,
// #center-align-text,
// #right-align-text,
// #text-size-input,
// #none-contour-text,
// #ligth-contour-text,
// #dark-contour-text,
// #select-line-height
//image menu:
//url image
const inputUrlMode = document.querySelector("#url-field")

inputUrlMode.addEventListener ( "input", () => {
    console.log ("funciona")
    console.log (mainImage)
    mainImage.style.backgroundImage =  `url('${inputUrlMode.value}')`
})

//color selection text
const colorBackgroundSelection = document.getElementById("background-text-color")
const colorFontSelection = document.getElementById("color-text-color")
const topFrameMeme = document.querySelector(".top-text")
const bottomFrameMeme = document.querySelector(".bottom-text")

const colorFontFrames = (e) => {
    console.log("aquitoy", e)
    const colorFondoFont = e.target.value;
    topFrameMeme.style.color = colorFondoFont;
    bottomFrameMeme.style.color = colorFondoFont;
    console.log("1")
}

colorFontSelection.addEventListener(`input`, (e) => colorFontFrames(e))

const colorBackgroundFrames = (e) => {
    console.log("aquitoy", e)
    const colorFondoBackground = e.target.value;
    topFrameMeme.style.backgroundColor = colorFondoBackground;
    bottomFrameMeme.style.backgroundColor = colorFondoBackground;
    console.log("2")
}

colorBackgroundSelection.addEventListener(`input`, (e) => colorBackgroundFrames(e))


