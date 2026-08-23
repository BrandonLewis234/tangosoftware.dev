// =============
// On Page Load
// =============

// Load all elements from local storage
document.addEventListener('DOMContentLoaded', function()  
{
    let element = document.body;
    let theme = localStorage.getItem("theme") || "";

    if (theme) {
        element.classList.add(theme);
    }
});

window.addEventListener("load", function () 
{
    document.body.classList.remove("preload");
});

// =============
// Sidebar State
// =============

// Save sidebar state in local web storage to keep a persistent state choice on page reload.
document.addEventListener('DOMContentLoaded', function()
    {
    const collapseSidebar = document.querySelector('[data-collapse-sidebar]');
    const element = document.body;

    const storedSidebarState = localStorage.getItem("sidebarState");
    if (screenIsSmall()) {
        element.classList.add("sb-collapsed");
    }
    else if (storedSidebarState) {
        element.classList.add(storedSidebarState);
    }

    // Toggle sidebar when clicked anywhere other than an interactable element
    collapseSidebar.addEventListener('click', function(e)
    {
        const ignoredElement = e.target.closest('[href], #theme-toggle');

        if (!ignoredElement) {
            toggleSidebar(e);
        }
    });
    // Toggle sidebar when clicked off of it when screen is small
    document.addEventListener('click', function(e) 
    {
        const isLink = e.target.tagName === 'A' || e.target.closest('a');
        if (!(document.querySelector(".sidebar").contains(e.target)) && screenIsSmall())
        {
            closeAllSubMenus();
        }
        if (!(document.querySelector(".sidebar").contains(e.target)) && !(element.classList.contains("sb-collapsed")) && !(isLink) && !(screenIsLarge()))
        {
            toggleSidebar(e);
        }
    });
});

window.addEventListener("scroll", function(){
    if (screenIsSmall())
    {
        closeAllSubMenus();
    }
});

window.addEventListener("resize", function(){
    if ((document.body.classList.contains("sb-collapsed")) && screenIsMedium())
    {
        closeAllSubMenus();
    }
});

// =============
// Scroll to top
// =============

window.addEventListener("scroll", function()
{
    scrollToTop = document.getElementById("scroll-to-top");

    if (window.scrollY >= 40)
    {
        scrollToTop.style.visibility = "visible";
        scrollToTop.style.opacity = "1";
        scrollToTop.style.right = "1em";
    }
    else
    {
        scrollToTop.style.visibility = "hidden";
        scrollToTop.style.opacity = "0";
        scrollToTop.style.right = "-5em";
    }
});