export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Spotify playlist questionnaire | Melody Melon',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme_color', content: '#080808' },
      {
        hid: 'description',
        name: 'description',
        content: 'Discover amazing Spotify playlists though Melody Melons quick and easy questionnaire. Find your perfect Spotify playlist to fuel your day.'
      },
      {
        hid: "og:url",
        property: 'og:url',
        content: 'https://finder.melodymelon.com'
      },
      {
        hid: "og:type",
        property: 'og:type',
        content: 'website'
      },
      {
        hid: "og:title",
        property: 'og:title',
        content: 'Spotify playlist questionnaire | Melody Melon'
      },
      {
        hid: "og:description",
        property: 'og:description',
        content: 'Discover amazing Spotify playlists though Melody Melons quick and easy questionnaire. Find your perfect Spotify playlist to fuel your day.'
      },
      {
        hid: "og:image",
        property: 'og:image',
        content: 'https://drive.google.com/uc?export=view&id=1xq8KXg3tlNhdb9Lev-Rh8SvoGMRqkCLM'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'simplebar/dist/simplebar.min.css',
  ],
  plugins: [
    { src: '~/plugins/vue-closable.js', ssr: false },
    { src: '~plugins/social.js', ssr: false },
    { src: '~/plugins/vue-clipboard2.js', ssr: false }
 
  ],
  components: false,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/pwa',

  ],
  pwa: { 
    workbox: true,
    icon: {
      fileName: 'icon.png'
    },
    meta: { 
      theme_color: '#080808', 
      author: 'William Yallop',
      lang: 'en', 
      nativeUI: true
    }, 
    manifest: { 
      short_name: 'Playlist Finder', 
      lang: 'en', 
      display: 'standalone',
      background_color: '#080808',
      theme_color: '#080808'
    } 
  },
  build: {
  }
}
