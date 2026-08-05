export default class 
{
    constructor() 
    {

    }

    setTitle(title)
    {
        document.title = title;
    }

    async getHTML() {
        try {
            const filename = this.getHTMLFilename();
            const response = await fetch(`static/html/${filename}`);
            return await response.text();
        } catch (err) {
            console.error('Fetch error:', err);
        }
    }

    getHTMLFilename() {
        throw new Error("Subclasses must implement getHtmlFilename()");
    }
}