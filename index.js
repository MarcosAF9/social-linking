const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();
})