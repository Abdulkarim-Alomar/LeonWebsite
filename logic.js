let icon = document.querySelector(".container .links .icon");
let list = document.querySelector(".container .links ul")

icon.addEventListener("click", () => {
    list.classList.toggle("open");
})