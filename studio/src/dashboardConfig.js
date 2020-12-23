export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe324e68a92a92d4bef5c0c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-ikt52qni',
                  apiId: '6f0f4552-d56a-4d4d-9037-2c28a98f2574'
                },
                {
                  buildHookId: '5fe324e64e40eb333beb3759',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-gu48hku8',
                  apiId: '476c96a6-9452-4d26-9cf8-44ab5ee3a1e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albertolopez/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-gu48hku8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
