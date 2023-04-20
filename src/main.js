import { createApp, h, provide, render } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import './assets/style.css'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Connexion HTTP vers notre API
const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
})

const cache = new InMemoryCache()

// On créer le client Apollo
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    // On va fournir à notre projet le client Apollo
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.mount('#app')
