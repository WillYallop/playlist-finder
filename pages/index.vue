<template>
  <div class="compCon" data-simplebar-auto-hide="true">

    <Simplebar class="simplebarCon">
        <SiteHeader/>
        <Questions/>
        <SiteFooter/>
    </Simplebar>

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
  flex-wrap: wrap;
}
</style>
