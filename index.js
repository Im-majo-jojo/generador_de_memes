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

colorMode.addEventListener("click", () => {
    const segmentColor = document.querySelector(".second-segment").classList.toggle("second-segment-light")
    const headerColor = document.querySelector(".header").classList.toggle("header-light")
    const headerIconsColor = document.querySelector(".header-buttons-list").classList.toggle("header-buttons-list-light")
  //  const IconsColorlight = document.querySelector(".image-icon-light").classList.toggle(".image-icon-light")
})
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


