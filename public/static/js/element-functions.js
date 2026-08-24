// =============
// Constants
// =============

SMALL_WIDTH = 630;
LARGE_WIDTH = 1200;

function screenIsSmall()
{
    return window.innerWidth <= SMALL_WIDTH;
}

function screenIsMedium()
{
    return window.innerWidth > SMALL_WIDTH < LARGE_WIDTH
}

function screenIsLarge()
{
    return window.innerWidth >= LARGE_WIDTH;
}

// =============
// Project Filter
// =============
function filterItems() 
{
    // Get the selected radio button value
    var selectedValue = document.querySelector('input[name="project_filter"]:checked').value;
    selectedValue = "filter" + selectedValue;

    // Get all list items
    var items = document.querySelectorAll('.filterNone, .filterWeb, .filterGame, .filterSoftware, .filterModeling, .filterMod');

    // Loop through each item and show/hide based on the selected radio button
    items.forEach(function(item) {
        parent = item.closest("article") // Find closest ancestor with article tag

        parent.style.display = "none";
        if (selectedValue === 'filterAll' || item.classList.contains(selectedValue)) {
            parent.style.display = "flex";
        }
    }); 
} 

// =============
// Sidebar
// =============
function toggleSidebar(e)
{
    const element = document.body;

    element.classList.toggle('sb-collapsed');
    const isExpanded = element.classList.contains("sb-collapsed");
    localStorage.setItem("sidebarState", isExpanded ? "sb-collapsed" : "");

    if(isExpanded)
    {
        closeAllSubMenus();
    }
}

const expandSidebar = document.querySelector('[data-expand-sidebar]');

expandSidebar.addEventListener('click', function(e)
{
    e.preventDefault();
    document.body.classList.toggle('sb-expanded');
});

// =============
// Theme Toggle
// =============

// Save theme in local web storage to keep a persistent style choice on page reload.
function themeToggle() 
{
    let element = document.body;
    element.classList.toggle("light-mode");

    const theme = element.classList.contains("light-mode") ? "light-mode" : "";
    localStorage.setItem("theme", theme);
}

// =============
// Sub-menu Toggle
// =============
function toggleSubMenu(element)
{
    
    element.nextElementSibling.classList.toggle("show-submenu");
    element.querySelector('i:last-child').classList.toggle('rotate');

    if (screenIsSmall())
    {
        return;
    }
    
    if(document.body.classList.contains("sb-collapsed"))
    {
        toggleSidebar();
    }
}

function closeAllSubMenus()
{
    element = document.body;
    Array.from(document.getElementsByClassName("show-submenu")).forEach(element => {
        element.classList.remove("show-submenu");
        element.previousElementSibling.querySelector('i:last-child').classList.toggle('rotate');
    });
}