import type { DefaultTheme } from 'vitepress';
import tutorialList from './tutorial-list';

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    activeMatch: '^/((getting-started|guide|about)/.*)?$',
    items: [
      {
        text: 'Getting Started',
        items: [
          { text: 'About AirCode', link: '/' },
          { text: 'Quick Start', link: '/getting-started/' },
          { text: 'FAQ', link: '/about/faq' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Cloud Function', link: '/guide/functions/' },
          { text: 'Database', link: '/guide/database/' },
          { text: 'File Storage', link: '/guide/files/' },
        ],
      },
      {
        text: 'More',
        items: [
          { text: 'Resource Limits', link: '/about/limits' },
          { text: 'Extensions', link: '/about/extensions' },
        ],
      },
    ],
  },
  {
    text: 'Tutorials',
    activeMatch: '^/tutorials/',
    items: tutorialList
  },
  {
    text: 'API Reference',
    activeMatch: '^/(reference|errors)/',
    items: [
      { text: 'Function Runtime', link: '/reference/server/functions-runtime' },
      { text: 'Function API', link: '/reference/server/functions-api' },
      { text: 'Database API', link: '/reference/server/database-api' },
      { text: 'File Storage API', link: '/reference/server/files-api' },
    ],
  },
  {
    text: 'Help',
    activeMatch: '^/help/',
    link: '/help/',
  },
  {
    text: 'Language',
    items: [
      { text: '简体中文', link: 'https://docs-cn.aircode.io' },
      { text: 'English', link: '/' },
    ],
  },
];

export default nav;
