export default {
  sections: [
    {
      name: 'custom'
    },
    {
      name: 'dev/welcome'
    },
    {
      name: 'dev/tutorials'
    },
    [
      {
        name: 'dev/info'
      },
      {
        name: 'members'
      }
    ],
    [
      {
        name: 'dataUsage'
      },
      {
        name: 'recentDocs',
        options: {
          limit: 5
        }
      }
    ]
  ]
}
