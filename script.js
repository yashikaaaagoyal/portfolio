var links = document.getElementsByClassName("links");
var tabInfo = document.getElementsByClassName("tab-info")

function openTab(tabName)
{
    for(link of links)
    {
        link.classList.remove("active-link");
    }
    for(info of tabInfo)
    {
        info.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
var menu = document.getElementById("sidemenu");

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}