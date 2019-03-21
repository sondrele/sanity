export default {
  widgets: [
    {name: 'sanity-tutorials', layout: {width: 'full'}},
    {name: 'test-dummy'},
    {name: 'test-dummy'},
    {
      type: '__experimental_group',
      widgets: [
        {name: 'test-dummy', layout: {width: 'medium'}},
        {name: 'test-dummy', layout: {width: 'medium'}}
      ],
      layout: {width: 'medium'}
    },
    {name: 'project-users'},
    {name: 'widget-which-does-not-exist', layout: {width: 'medium'}},
    {
      name: 'project-info',
      options: {
        before: [{name: 'test-dummy'}],
        data: [
          {title: 'Frontend', value: 'https://asdf.heroku.com/greedy-goblin', category: 'apps'},
          {title: 'GitHub', value: 'https://github.com/sanity-io/sanity', category: 'Repo'}
          // {title: 'Strange endpoint', value: 'https://example.com/v1/strange', category: 'apis'},
          // {title: 'With strawberry jam?', value: 'Yes', category: 'Waffles'},
          // {title: 'Gummy bears?', value: 'nope', category: 'Cheweies'},
          // {title: 'With rømme?', value: 'maybe', category: 'Waffles'}
        ]
      },
      layout: {
        width: 'medium'
      }
    },
    {name: 'test-dummy'},
    {name: 'test-dummy'},
    {name: 'test-dummy'},
    {name: 'cats'}
  ]
}
