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
                  buildHookId: '5fd51478314ec1065f304055',
                  title: 'Sanity Studio',
                  name: 'out-there-blog-studio',
                  apiId: '6ac637bc-4c64-4f0f-afcd-0877ce524160'
                },
                {
                  buildHookId: '5fd514788fce21448188991e',
                  title: 'Blog Website',
                  name: 'out-there-blog',
                  apiId: 'b42bde6b-3931-4aad-86b9-ca2357fbc373'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JSinkler713/out-there-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://out-there-blog.netlify.app', category: 'apps' }
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
