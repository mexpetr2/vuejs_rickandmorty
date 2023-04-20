module.exports = {
  client: {
    service: {
      name: 'rick-morty',
      // URL de notre API GraphQL
      url: 'https://rickandmortyapi.com/graphql'
    },
    // Tout les fichiers avec l'extension .js et .vue dans le fichier src pourront utiliser
    // des requêtes graphQL
    includes: ['src/**/*.vue', 'src/**/*.js']
  }
}
