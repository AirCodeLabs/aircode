import { defineConfig } from 'vitepress';
import nav from './nav';
import sidebar from './sidebar';

export default defineConfig({
  // App related configs
  lang: 'zh-CN',
  title: 'AirCode 文档',
  description: '在线开发和发布 Node.js 应用，这就是 AirCode。',
  srcDir: 'src',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'material-theme-palenight',
    },
  },
  head: [
    [
      'script',
      {
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-5Q7JHK36DC',
      },
    ],
    [
      'script',
      {},
      `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-5Q7JHK36DC');
      `,
    ],
  ],

  // theme related configs
  themeConfig: {
    nav,
    sidebar,
    outline: [2, 3],
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aircodelabs/aircode' },
      { icon: 'twitter', link: 'https://twitter.com/aircodelabs' },
      { icon: 'discord', link: 'https://discord.com/invite/XrMVdYdEuY' },
    ],
    editLink: {
      pattern: 'https://github.com/aircodelabs/aircode/blob/main/docs/zh-cn/src/:path',
      text: '在 GitHub 编辑此页',
    },
    algolia: {
      appId: 'DLBHPK5MQQ',
      apiKey: '15800f32b34bb23d9bd4bf0fdf26153c',
      indexName: 'cn-aircode'
    },
  },
});
