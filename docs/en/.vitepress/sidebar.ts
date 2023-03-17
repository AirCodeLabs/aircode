import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  '/errors/': [],
  '/help/': [],
  '/legal/': [],
  '/careers/': [],
  '/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'About AirCode', link: '/' },
        { text: 'Quick Start', link: '/getting-started/' },
        { text: 'Database Introduction', link: '/getting-started/database' },
        { text: 'File Storage Introduction', link: '/getting-started/files' },
      ],
    },
    {
      text: 'Cloud Function',
      collapsed: false,
      items: [
        { text: 'Cloud Function Overview', link: '/guide/functions/' },
        { text: 'Develop Online', link: '/guide/functions/development' },
        { text: 'Debug Online', link: '/guide/functions/debug' },
        { text: 'Load Other Functions', link: '/guide/functions/require' },
        { text: 'Deployment', link: '/guide/functions/deployment' },
        { text: 'Invoke Functions', link: '/guide/functions/invoke' },
        { text: 'Online Logs', link: '/guide/functions/logs' },
        { text: 'Using NPM', link: '/guide/functions/npm' },
        { text: 'Scheduled Tasks', link: '/guide/functions/scheduled-tasks' },
        { text: 'Function Runtime', link: '/reference/server/functions-runtime' },
        { text: 'Function API', link: '/reference/server/functions-api' },
        {
          text: 'Advanced',
          items: [
            { text: 'Environment Variable', link: '/guide/functions/env' },
            { text: 'Send HTTP Request', link: '/guide/functions/http-request' },
            { text: 'POST Parameters', link: '/guide/functions/post-params' },
            { text: 'GET Parameters', link: '/guide/functions/get-params' },
          ],
        },
      ],
    },
    {
      text: 'Database',
      collapsed: false,
      items: [
        { text: 'Database Overview', link: '/guide/database/' },
        { text: 'Insert Data', link: '/guide/database/insert' },
        { text: 'Find Data', link: '/guide/database/find' },
        { text: 'Update Data', link: '/guide/database/update' },
        { text: 'Delete Data', link: '/guide/database/delete' },
        { text: 'Database API', link: '/reference/server/database-api' },
        {
          text: 'Advanced',
          items: [
            { text: 'Geo-based Query', link: '/guide/database/geo' },
            { text: 'Use Indexes', link: '/guide/database/indexes' },
          ]
        }
      ],
    },
    {
      text: 'File Storage',
      collapsed: false,
      items: [
        { text: 'File Storage Overview', link: '/guide/files/' },
        { text: 'Upload Files', link: '/guide/files/upload' },
        { text: 'Download Files', link: '/guide/files/download' },
        { text: 'Delete Files', link: '/guide/files/delete' },
        { text: 'File Storage API', link: '/reference/server/files-api' },
      ],
    },
    {
      text: 'More',
      collapsed: false,
      items: [
        { text: 'Resource Limits', link: '/about/limits' },
        { text: 'FAQs', link: '/about/faq' },
      ],
    }
  ],
};

export default sidebar;
