import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// ========== 在这里修改你的配置 ==========
const BASE_URL = 'https://WYZS108.github.io/route-dist';
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'weekly' },
  { path: '/articles', priority: '0.8', changefreq: 'weekly' },
  { path: '/moments', priority: '0.7', changefreq: 'weekly' },
  { path: '/guest-book', priority: '0.7', changefreq: 'weekly' },
];
// ======================================

const today = new Date().toISOString().split('T')[0];

const sitemapEntries = staticRoutes.map(route => ({
  loc: `${BASE_URL}${route.path}`,
  lastmod: today,
  changefreq: route.changefreq,
  priority: route.priority,
}));

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const publicDir = resolve(process.cwd(), 'public');
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemapXml);
console.log('✅ sitemap.xml 生成成功！');