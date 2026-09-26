#!/usr/bin/env python3
from pathlib import Path
import sys,re
if len(sys.argv)!=2:
    raise SystemExit('Usage: python finalize_deployment.py https://your-domain.com')
base=sys.argv[1].rstrip('/')
if not base.startswith('https://'):
    raise SystemExit('Use the full HTTPS domain, e.g. https://example.com')
root=Path(__file__).resolve().parent
cfg=root/'site-config.js'
text=cfg.read_text(encoding='utf-8') if cfg.exists() else "window.FK_SITE_CONFIG={productionBaseUrl:''};\n"
text=re.sub(r"productionBaseUrl\s*:\s*'[^']*'",f"productionBaseUrl:'{base}'",text,count=1)
cfg.write_text(text,encoding='utf-8')
(root/'robots.txt').write_text(f"User-agent: *\nAllow: /\nSitemap: {base}/sitemap.xml\n",encoding='utf-8')
urls=['','research.html','about.html','connect.html']
xml=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for u in urls: xml.append(f'  <url><loc>{base}/{u}</loc></url>')
xml.append('</urlset>')
(root/'sitemap.xml').write_text('\n'.join(xml)+'\n',encoding='utf-8')
for name in ['index.html','research.html','about.html','connect.html']:
    p=root/name;s=p.read_text(encoding='utf-8');canonical=base+'/' if name=='index.html' else f'{base}/{name}'
    s=re.sub(r'<link href="[^"]*" id="canonicalLink" rel="canonical"\s*/?>',f'<link href="{canonical}" id="canonicalLink" rel="canonical"/>',s)
    if 'property="og:url"' in s:s=re.sub(r'<meta content="[^"]*" property="og:url"\s*/?>',f'<meta content="{canonical}" property="og:url"/>',s)
    else:s=s.replace('</head>',f'<meta content="{canonical}" property="og:url"/></head>')
    # Social crawlers expect absolute image URLs.
    s=re.sub(r'<meta content="(assets/[^"]+)" property="og:image"\s*/?>',lambda m:f'<meta content="{base}/{m.group(1)}" property="og:image"/>',s)
    s=re.sub(r'<meta content="(assets/[^"]+)" name="twitter:image"\s*/?>',lambda m:f'<meta content="{base}/{m.group(1)}" name="twitter:image"/>',s)
    p.write_text(s,encoding='utf-8')
print('Deployment URLs finalized for',base)
