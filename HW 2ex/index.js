let button = document.querySelector(".button");

button.addEventListener ("click", () => {
    let heightScreen = document.documentElement.clientHeight;
    let widthScreen = document.documentElement.clientWidth;
    // let sizeScreen = heightScreen + widthScreen;
    alert(heightScreen + `px` + ` * `  + widthScreen+ `px`);
});