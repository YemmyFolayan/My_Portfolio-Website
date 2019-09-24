const iconType = document.getElementById('iconLib');
const linkArray = document.getElementsByClassName("linkArray");

const showLinks = () => {
    if (iconType.className == "fa fa-bars") {
        for (let showCounter = 1; showCounter < 3; showCounter++) {
            linkArray[showCounter].style.display = "block";
        }
        iconType.className = "fa fa-window-close";
    } else {
        for (let showCounter = 1; showCounter < 3; showCounter++) {
            linkArray[showCounter].style.display = "none";
        }
        iconType.className = "fa fa-bars";
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) { // this destroys the persistence property it maintains on resize from smaller screen to bigger screen
        document.getElementsByClassName('icon-bar')[0].style.display = "none"; // hides the icon bar;
        let linkArrayClassVariable = document.getElementsByClassName('linkArray');
        for (let counter = 0; counter < linkArrayClassVariable.length; counter++) { // to display all other links independently
            linkArrayClassVariable[counter].style.display = "block";
        }
    }
});
document.getElementById('icon-bar').addEventListener("click", showLinks); // for smaller screen to trigger the click on icon bar;
window.addEventListener("load", () => {
    setTimeout(() => {
        const preloaderContainer = document.getElementsByClassName("preloader")[0];
        preloaderContainer.style.display = "none";
    }, 7000);
})