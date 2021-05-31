import { resolve } from 'path'

    export default {
      alias: {
        'style': resolve(__dirname, './assets/style')
      }
    }    
{
    
    buildModules: [
      // Simple usage
      '@nuxtjs/vuetify',
  
      // With options
      ['@nuxtjs/vuetify', { /* module options */ }]
    ]

    
}
  