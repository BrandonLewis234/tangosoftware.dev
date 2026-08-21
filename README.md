# Website Details
This site is hosted using Cloudflare and deployed with Cloudflare Pages. It used to be deployed with GitHub pages, but GitHub pages can only serve static webpages. For this reason, it was upgraded. 
<br><br>

> [!NOTE]
> Deployments on this GitHub repository do not represent the newest changes. Newest changes can be viewed on the <a href="https://tangosoftware.dev/" target="_blank">website</a>. <br>

## Express.js and Cloudflare Pages
This site uses **Express.js** in order to deploy a **Single Page Application**. Express.js handles all of the page routing. Everything is routed to one singular page, and page routing is handled by serving content from different views. 
* `index.js` handles page routing by serving the correct page in correspondence to the path
* All views are built off of a `AbstractView` class, which defines the page title and a `getHTML` function. This function returns the HTML contents of the particular view. This can be upgraded in the future to utilize React. This is a implementation without a framework in order to understand how they operate.

The result is a webpage with seamless page transitions and a sidebar that always represents the position in which the user had it.

The current state of the website is unfinished, but you can view its progress as it develops.
