<template>
  <div class="siteCon">
    <Nuxt/>
    <div class="backgroundImg"><div class="bgInner"></div></div>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style>
html {
  -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
  -webkit-tap-highlight-color: transparent !important;
  height: 100%;
}
body {
  margin: 0;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  height: 100%;
}
#__nuxt {height: 100%}
#__layout {height: 100%}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

button:focus {outline: none;}
input:focus {outline: none;}
textarea:focus {outline: none;}
select:focus {outline: none;}

.siteCon {
  min-height: 100%;
}

/* Page */
.globWrapper {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}

/* Background Image */
.backgroundImg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: -56px;
  z-index: 0;
  background-image: url('../assets/images/bgImg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bgInner {
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #EE7752, #E72B51);
  background-size: 300% 300%;
	animation: gradient 5s ease infinite;
  opacity: 0.9;
}
@keyframes gradient {
	0% {	background-position: 0% 50%;}
	50% {background-position: 100% 50%;}
	100% {	background-position: 0% 50%;}
}
</style>
