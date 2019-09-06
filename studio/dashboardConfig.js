export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d728fa5db6e3deae5e27cba',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-w9ee9yuz',
                  apiId: '7ace5861-822e-4e77-92a0-1b73ea5d7b50'
                },
                {
                  buildHookId: '5d728fa58001a50a3b389398',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k4f2qf94',
                  apiId: 'ce86a3d5-6d70-4b1b-a4c0-abbdc5203316'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxPugh/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k4f2qf94.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
