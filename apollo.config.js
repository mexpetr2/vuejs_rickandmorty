module.exports = {
  client: {
    service: {
      name: 'rick-morty',
      // URL to the GraphQL API
      url: 'https://rickandmortyapi.com/graphql'
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js']
  }
}
