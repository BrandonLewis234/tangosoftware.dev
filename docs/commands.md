# Deploying with Cloudflare Pages and Express.js

## Local Testing

### To test changes locally:

(in public)

uncomment the last line of `server.js`  
`node server.js`

## Deployment

### To deploy changes to preview branch:

(in tangosoftware.dev)  
`wrangler pages deploy public --branch preview`

### To deploy changes to live:

(in tangosoftware.dev)  
`wrangler pages deploy public --branch single-page-application`
