import AbstractView from "./AbstractView.js";

export default class extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Tango Software | Projects");
    }

    async getHTML()
    {
        return `
            <main>
                <section>
                    <h1>Project Database</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.      
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.   
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                    </p>
                </section>
                <section class="no-border">
                    <div class="filters">
                        <div>
                            <button class="filter">All</button>
                            <button class="filter">Web Development</button>
                            <button class="filter">Mod</button>
                            <button class="filter">Hytale</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="grid column-container auto-fit">
                        <article class="project">
                            <div class="image-column">
                                <a class="image" href="#">
                                    <img src="../../../images/pic01.jpg">
                                </a>
                                <a class="button read-more" href="#">Read more</a>
                            </div>
                            <div class="detail-column">
                                <h2>Project Name</h2>
                                <p>
                                    Project details
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.                                                
                                </p>
                            </div>
                        </article>
                        <article class="project">
                            <div class="image-column">
                                <a class="image" href="#">
                                    <img src="../images/pic02.jpg">
                                </a>
                                <a class="button read-more" href="#">Read more</a>
                            </div>
                            <div class="detail-column">
                                <h2>Project Name</h2>
                                <p>
                                    Project details
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.                                                
                                </p>
                            </div>
                        </article>
                        <article class="project">
                            <div class="image-column">
                                <a class="image" href="#">
                                    <img src="../images/pic03.jpg">
                                </a>
                                <a class="button read-more" href="#">Read more</a>
                            </div>
                            <div class="detail-column">
                                <h2>Project Name</h2>
                                <p>
                                    Project details
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.                                                
                                </p>
                            </div>
                        </article>
                        <article class="project">
                            <div class="image-column">
                                <a class="image" href="#">
                                    <img src="frontend/images/pic01.jpg">
                                </a>
                                <a class="button read-more" href="#">Read more</a>
                            </div>
                            <div class="detail-column">
                                <h2>Project Name</h2>
                                <p>
                                    Project details
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.                                                
                                </p>
                            </div>
                        </article>
                        <article class="project">
                            <div class="image-column">
                                <a class="image" href="#">
                                    <img src="../images/pic02.jpg">
                                </a>
                                <a class="button read-more" href="#">Read more</a>
                            </div>
                            <div class="detail-column">
                                <h2>Project Name</h2>
                                <p>
                                    Project details
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.                                                
                                </p>
                            </div>
                        </article>
                        <article class="project">
                            <div class="image-column">
                                <a class="image" href="#">
                                    <img src="../images/pic03.jpg">
                                </a>
                                <a class="button read-more" href="#">Read more</a>
                            </div>
                            <div class="detail-column">
                                <h2>Project Name</h2>
                                <p>
                                    Project details
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.                                                
                                </p>
                            </div>
                        </article>                              
                    </div>
                </section>        
            </main>
        `;
    }
}