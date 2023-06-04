import BLOG from '../blog.config'

const labels = BLOG.labels || {}
const layouts = BLOG.layouts || {}
const labels2 = BLOG.labels2 || {}

export const Configs = {
  author: BLOG.author || 'Anonymous',
  summary: BLOG.summary || 'This is my favorite blog.',
  title: BLOG.title || 'unix-bio',

  email: BLOG.email ? `mailto:${BLOG.email}` : null,
  github: BLOG.github ? `https://github.com/${BLOG.github}` : null,
  twitter: BLOG.twitter ? `https://twitter.com/${BLOG.twitter}` : null,

  enableViews: BLOG.enableViews || false,
  latestLimit: BLOG.latestLimit || 5,
  isCN: () => BLOG.language.includes('cn'),

  labels: {
    default: labels.default || 'posts',
    latest: labels.latest || 'latest',
    list: labels.list || 'all posts',
  },

  labels2: {
    default: labels2.default || 'posts',
    latest: labels2.latest || 'latest',
    list: labels2.list || 'all posts',

  },

  layouts: {
    pageWidth: layouts.pageWidth || '750px',
    pageWidthMobile: layouts.pageWidthMobile || '88vw',
  },
}
