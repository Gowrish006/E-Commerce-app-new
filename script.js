function scrollToProducts(){
  document.getElementById("products").scrollIntoView({
    behavior:"smooth"
  });
}

function buy(){
  alert("Thank you for shopping with Gowrish E-Commerce 🛒");
}

/* Dark Mode */
const toggle=document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
