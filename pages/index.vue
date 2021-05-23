<template>
  <div class="compCon" data-simplebar-auto-hide="true">

    <Simplebar class="simplebarCon">
        <SiteHeader/>
        <Questions/>
        <SiteFooter/>
    </Simplebar>

    <div class="backgroundImg"><div class="bgInner"></div></div>
  </div>
</template>

<script>
// Libs
import Simplebar from 'simplebar-vue';

// Components
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'
import Questions from '@/components/Questions'

export default {
    head: {
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
  },
  data() {
    return {


    }
  },
  components: {
    Simplebar,
    SiteHeader,
    SiteFooter,
    Questions,
 
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
</style>

<style>
.simplebarCon .simplebar-content {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
