import AbstractView from "./AbstractView.js";

export default class extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Tango Software | Projects");
    }

    getHTMLFilename(){
        return("projects.html"); 
    }
}