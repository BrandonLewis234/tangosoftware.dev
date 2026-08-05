import Home from "./views/Home.js";
import Projects from "./views/Projects.js";
import Preview from "./views/Preview.js";

const navigateTo = url =>
{
    history.pushState(null, null, url);
    router();
};

const router = async () => 
{
    const routes = 
    [
        {path: "/", view: Home},
        {path: "/projects", view: Projects},
        {path: "/preview", view: Preview}
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => 
    {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match)
    {
        match = 
        {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHTML();

    // Set active page
    let page_id = match.route.path.substring(1);
    if (page_id == "") { page_id = "home"}

    let element = document.getElementById(page_id);
                
    // Remove old active page and ensure there is only one
    let active_pages = document.getElementsByClassName("active-page");
    
    for (let page of active_pages) 
    {
        page.classList.remove("active-page");
    }
    
    element.classList.add("active-page");

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () =>
{
    
    document.body.addEventListener("click", e => 
    {

        let target;
        let target_found = false;
        if (e.target.matches("[data-link]")) 
        {
            target = e.target;
            target_found = true;
        } 
        if (e.target.parentElement.matches("[data-link]"))
        {
            target = e.target.parentElement;
            target_found = true;
        }
        
        if (target_found)
        {
            e.preventDefault();
            try
            {
                navigateTo(target.href);
            }
            catch (error) 
            {
                console.log(error);
            }
        }
        
    });

    router();
});