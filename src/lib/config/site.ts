import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app',
  title: 'FlyEmoji Blog',
  subtitle: '是的没错，老子又回来了',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara & Vercel & Cloudflare',
  author: {
    name: 'FLYEMOJI',
    photo: '/assets/me@192.png',
    status: '🖤',
    bio: '当世界舍弃了你，不还是有我么。'
  },
  themeColor: '#3D4451'
}
