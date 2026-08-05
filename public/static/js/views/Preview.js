import AbstractView from "./AbstractView.js";

export default class extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Tango Software | Preview");
    }

    getHTMLFilename(){
        return("preview.html"); 
    }
}