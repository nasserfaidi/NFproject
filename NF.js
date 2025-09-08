function toggleDir () {
    const html = document.documentElement;
    if (html.getAttribute("dir") === "ltr")
    {
        html.setAttribute("dir" , "rtl");
    }
    else {
        html.setAttribute("dir" , "ltr");
    }
}


document.addEventListener("DOMContentLoaded", () => {
const avatars =
document.querySelectorAll ('.avatar');

avatars.forEach(avatar => {const name = avatar.dataset.name?.trim() || "";
const parts = name.split(" ");

const initials = parts[0][0] + (parts.lenght > 1 ? parts[parts.length-1][0] : "");
avatar.textContent = initials;

const colors = ['#e74c3c' , '#3498db' , '#f1c40f' , '#2ecc71' , '#9b59b6' , '#e67e22'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
avatar.style.backgroundcolor = randomColor;
});
});