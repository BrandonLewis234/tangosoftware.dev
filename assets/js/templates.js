// =======================================
// Header, Footer, and Sidebar Templates
// =======================================

class templateHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <div>
                <a href="https://tangosoftware.dev"><img src="../favicon.ico"></img></a>
                <h1><a href="https://tangosoftware.dev" class="site-header">Tango's Project Repository</a></h1>
            </div>
        `
    }
}

class templateSidebar extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <aside class="sidebar">
                <ul>
                    <li>
                        <a id="toggle-sidebar">
                            <i class="fa fa-angle-double-left"></i>
                            <span>Collapse</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" id="home" class="nav__link" data-link>
                            <i class="fa fa-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="../projects" id="projects" class="nav__link" data-link>
                            <i class="fa fa-lightbulb"></i>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="../preview" id="preview" class="nav__link" data-link>
                            <i class="fa fa-magnifying-glass"></i>
                            <span>Preview</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="documentation" class="nav__link" data-link>
                            <i class="fa fa-book"></i>
                            <span>Documentation</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onclick="toggleSubMenu(this)" id="settings">
                            <i class="fa fa-cog"></i>
                            <span>Settings</span>
                            <i class="fa fa-angle-right"></i>
                        </a>
                        <ul class="sub-menu">
                            <div>
                                <li><a href="#" class="nav__link" data-link>nothing</a></li>
                                <li><a href="#" class="nav__link" data-link>here</a></li>
                                <li><a href="#" class="nav__link" data-link>yet</a></li>                    
                            </div>
                        </ul>
                    </li>
                    <li>
                        <a onclick="themeToggle()" id="theme-toggle">
                            <i class="fa fa-moon"></i>
                            <span>Toggle Dark Mode</span>
                        </a>
                    </li>
                </ul>
            </aside>
        `
    }
}

class templateFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <a href="#" id="scroll-to-top" class="tooltip-left">
                <span class="tooltip-text">scroll to top</span>
                <i class="fa fa-arrow-up"></i>
            </a>
            <h1>Footer</h1>
        `
    }
}

customElements.define('template-header', templateHeader)
customElements.define('template-sidebar', templateSidebar)
customElements.define('template-footer', templateFooter)
