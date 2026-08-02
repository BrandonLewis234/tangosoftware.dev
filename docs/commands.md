# Deploying with Cloudflare Pages

## Local Testing

### To test changes:  
(in public)
` node server.js `

## Deployment

### To deploy changes to preview branch:  
(in tangosoftware.dev)
` wrangler pages deploy public --branch preview `

### To deploy changes to live:
(in tangosoftware.dev)  
` wrangler pages deploy public `
