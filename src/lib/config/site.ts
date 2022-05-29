import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app',
  title: 'Urara',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Minseong Choi',
    photo: '/assets/maskable@192.png',
    status: '🌸',
    bio: '当世界舍弃了你，不还是有我么。'
  },
  themeColor: '#3D4451'
}
