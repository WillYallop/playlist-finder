<template>
  <div class="compCon" data-simplebar-auto-hide="true">

    <Simplebar class="simplebarCon">
      <SiteHeader/>
      <PlaylistResult
      :playlistData="playlistData"/>
      <SiteFooter/>
    </Simplebar>

    <div class="resultBg" v-resize-text="{ratio: 1, maxFontSize: 2000, delay: 0}">
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
      <p class="resultBgTextP">{{playlistData.playlistName}}</p>
    </div>

  </div>
</template>

<script>
//json
import playlistsJson from '@/components/Playlists.json'

// Libs
import Simplebar from 'simplebar-vue'
import ResizeText from 'vue-resize-text'

// Components
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'
import PlaylistResult from '@/components/PlaylistResult'

export default {
  validate ({ params }) {
    //Check against json array
    const checkUrl = playlistsJson.find( ({ playlistUrl }) => playlistUrl === params.id )
    if (checkUrl) {
      return true
    } else {
      return false
    }
  },
  data() {
    return {
      //json
      playlistObject: playlistsJson,

    }
  },
  head() {
    return {
      title: 'Spotify playlist questionnaire | Melody Melon',
      meta: [
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
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://finder.melodymelon.com'
        }
      ]
    }
  },
  directives: {
    ResizeText
  },
  components: {
    Simplebar,
    SiteHeader,
    SiteFooter,
    PlaylistResult

  },
  computed: {
    playlistData() {
      //Check against json array
      const checkUrl = playlistsJson.find( ({ playlistUrl }) => playlistUrl === this.$route.params.id )
      return checkUrl
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.compCon {
  width: 100%;
  margin: 0 auto;
}
.simplebarCon {
  height: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

/* Background */
.resultBg {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: -56px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} 
.resultBgTextP {
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: clip; 
  width: 100%;
  text-align: center;
  color: #131313;
  line-height: auto;
  text-transform: uppercase;
}
</style>

<style>
.simplebarCon .simplebar-content {
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
