// =============
// Project Filter
// =============
function filterItems() 
{
    // Get the selected radio button value
    var selectedValue = document.querySelector('input[name="project_filter"]:checked').value;

    // Get all list items
    var items = document.querySelectorAll('.no-filter, .Web, .Game, .Software, .Modeling, .Mod');

    // Loop through each item and show/hide based on the selected radio button
    items.forEach(function(item) {
        item.style.display = "none";
        if (selectedValue === 'All' || item.classList.contains(selectedValue)) {
            item.style.display = "flex";
        }
    });
} 