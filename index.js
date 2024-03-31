var menu = document.getElementById('menu');
var navbar = document.querySelector('.navbar');

menu.addEventListener("click",() =>
{
    navbar.style.display = "block";
});

window.addEventListener("click",(event) => 
{
    if(!navbar.contains(event.target) && event.target !== menu)
    {
        navbar.style.display = "none";
    }
})