import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './public' }));
app.use('/images/*', serveStatic({ root: './public' }));

app.get('*', serveStatic({ path: './public/index.html' }));