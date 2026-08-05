import AbstractView from "./AbstractView.js";

export default class extends AbstractView
{
    constructor()
    {
        super();
        this.setTitle("Tango Software | Home");
    }
    
    getHTMLFilename(){
        return("home.html"); 
    }
}