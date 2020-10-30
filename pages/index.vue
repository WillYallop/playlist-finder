<template>
  <div>
    <!-- Question 1 -->
    <div class="questionsCon" v-if="question === 1">
      <h1>#{{question}} - When do you listen to your music most?</h1>
      <button v-on:click="question1('gym')">At the gym</button>
      <button v-on:click="question1('studying')">While studying</button>
      <button v-on:click="question1('working')">While working</button>
      <button v-on:click="question1('relaxing')">In freetime</button>
    </div>

    <!-- Question 2 -->
    <div class="questionsCon" v-if="question === 2">
      <h1>#{{question}} - What is your favourite time of year?</h1>
      <button v-on:click="question2('summer')">Summer</button>
      <button v-on:click="question2('winter')">Winter</button>
    </div>

    <!-- Question 3 -->
    <div class="questionsCon" v-if="question === 3">
      <h1>#{{question}} - What option best describes you at a party?</h1>
      <button v-on:click="question3('dance')">The Dancer</button>
      <button v-on:click="question3('hype')">The Hype Man</button>
      <button v-on:click="question3('chill')">The Chill Dude</button>
      <button v-on:click="question3('outsider')">The Outsider</button>
    </div>

    <!-- Question 4 -->
    <div class="questionsCon" v-if="question === 4">
      <h1>#{{question}} - Slide to represent your mood!</h1>
      <VueSlider ref="slider" v-model="moodScale" v-bind="options" :hide-label="true" />
    </div>

    <!-- Question Nav -->
    <div class="questNav">
      <button v-on:click="incrementQuestion">Next</button>
    </div>

    <br>
    <h2>Results</h2>
    <p :key="playlist.id" v-for="playlist in playlists">{{playlist.playlistName}}</p>
  </div>
</template>

<script>
// Libs
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default {
  data() {
    return {
      // question index
      question: 1,
      // playlist Data
      playlists: [
        { 
          "id": 0, 
          "playlistName": "house party hits", 
          "categories": ["dance", "party", "house", "charts"], 
          "icon": "houseparty.jpg", 
          "playlistUrl": "house-party-hits", 
          "playlistDescription": "Turn your average house party into project X with this ultimate House Party Playlist.", 
          "playlistSpotifyUrl": "2DCj1kDzWlA69FsVE13XtE"
        },
        {
          "id": 1, 
          "playlistName": "in my feels", 
          "categories": ["rap", "chill rap"], 
          "icon": "inmyfeels.jpg", 
          "playlistUrl": "in-my-feels", 
          "playlistDescription": "No matter the vibe, this playlist will hit you in your feels.", 
          "playlistSpotifyUrl": "0M4j2Rnny3wwxjuYCrSZqM"
        },
        {
          "id": 2, 
          "playlistName": "chill rap", 
          "categories": ["rap", "pop", "chill rap"], 
          "icon": "chillrap.jpg", 
          "playlistUrl": "chill-rap", 
          "playlistDescription": "The chillest rap hits of our modern times.", 
          "playlistSpotifyUrl": "2oDbLTGsHGOuWxF13NOzWd"
        },
        {
          "id": 3, 
          "playlistName": "lo-fi waves", 
          "categories": ["lofi", "chill beats"], 
          "icon": "lofiwaves.jpg", 
          "playlistUrl": "lo-fi-waves", 
          "playlistDescription": "Whether you're studying or just relaxing, Lo-Fi Waves brings a smooth vibe to any scenario.", 
          "playlistSpotifyUrl": "7kMaAnpX2KBaVBYOOL4yJX"
        },
        {
          "id": 4, 
          "playlistName": "FULL SEND", 
          "categories": ["party", "house", "rap"], 
          "icon": "fullsend.jpg", 
          "playlistUrl": "full-send", 
          "playlistDescription": "Shotgun some beers with your beauties and send it.", 
          "playlistSpotifyUrl": "6k6dPox7a8Ntvc5Kg6dSY9"
        },
        {
          "id": 5, 
          "playlistName": "bodybuilding beats", 
          "categories": ["hype", "dance", "rap"], 
          "icon": "bodybuildingbeats.jpg", 
          "playlistUrl": "bodybuilding-beats", 
          "playlistDescription": "The perfect pre workout to get you pumped in the house of gains.", 
          "playlistSpotifyUrl": "47gIFX3EBZNNbKSyoRzP41"
        },
        {
          "id": 6, 
          "playlistName": "your a game", 
          "categories": ["pop", "rap", "hype", "hiphop"], 
          "icon": "agame.jpg", 
          "playlistUrl": "your-a-game", 
          "playlistDescription": "Get your A Game on and get in the zone with the ultimate hyped gaming playlist.", 
          "playlistSpotifyUrl": "6Fq3fzV8aF0dsQmozfc6Nr"
        },
        {
          "id": 7, 
          "playlistName": "the BIG pre's playlist", 
          "categories": ["house", "hype", "pop", "dance", "charts"], 
          "icon": "preplaylist.jpg", 
          "playlistUrl": "the-big-pre-playlist", 
          "playlistDescription": "The ultimate BIG pre drink playlist to get you are your homies turnt.", 
          "playlistSpotifyUrl": "7HFbALR8wY6wosL9oQZt2K"
        },
        {
          "id": 8, 
          "playlistName": "techno town", 
          "categories": ["techno"], 
          "icon": "technotown.jpg", 
          "playlistUrl": "techno-town", 
          "playlistDescription": "Techno Classics to give you that hyped Nightclub feeling.", 
          "playlistSpotifyUrl": "65xSJDjREcMMO4y4BAeKFp"
        },
        {
          "id": 9,
          "playlistName": "get a groove on", 
          "categories": ["disco"], 
          "icon": "groove.jpg", 
          "playlistUrl": "get-a-groove-on", 
          "playlistDescription": "Groovy Tunes to get ya Funk on in the disco... Boogie all night!", 
          "playlistSpotifyUrl": "6DS0pOSgwBRQae1sHKHQkD"
        },    
        {
          "id": 10, 
          "playlistName": "black lives matter", 
          "categories": ["hiphop", "rap"], 
          "icon": "blm.jpg", 
          "playlistUrl": "black-lives-matter", 
          "playlistDescription": "Let us take a stand for what is right. And let us raise our voice against injustice | #BlackLivesMatter", 
          "playlistSpotifyUrl": "1airbmK6Cxn9juSSLLJ2Fi"
        },
        {
          "id": 11, 
          "playlistName": "rock city", 
          "categories": ["rock"], 
          "icon": "rockcity.jpg", 
          "playlistUrl": "rock-city", 
          "playlistDescription": "Get your jam on with Rock City... the finest Rock and Roll playlist to Rock out to.", 
          "playlistSpotifyUrl": "4Ou7x9q3KzXohmwfi4OzZg"
        },
        {
          "id": 12, 
          "playlistName": "90's hip-hop", 
          "categories": ["hiphop"], 
          "icon": "90hiphop.jpg", 
          "playlistUrl": "90s-hip-hop", 
          "playlistDescription": "Classic Hip-Hop hits that defined the 90's and influenced the Rap scene as we know it.", 
          "playlistSpotifyUrl": "1Q7OxoOnUDj6dQO8lhtiYx"
        },
        {
          "id": 13, 
          "playlistName": "royalty free for you and me", 
          "categories": ["lofi", "chill beats"], 
          "icon": "royaltyfree.jpg", 
          "playlistUrl": "royalty-free-for-you-and-me", 
          "playlistDescription": "Royalty free vibes, perfect for Twitch streamers, YouTube creators and everything in between.", 
          "playlistSpotifyUrl": "4tfZefNsH6bqY6x1GYj7oj"
        },
        {
          "id": 14, 
          "playlistName": "reggae beach", 
          "categories": ["reggae"], 
          "icon": "reggaebeach.jpg", 
          "playlistUrl": "reggae-beach", 
          "playlistDescription": "Experience the One Love with the ultimate chilled Reggae playlist... perfect for a day at the beach.", 
          "playlistSpotifyUrl": "3aqk7kE1D1c6C9L1PQ5vcf"
        },
        {
          "id": 15, 
          "playlistName": "summer 2020", 
          "categories": ["pop", "charts", "summer"], 
          "icon": "summer2020.jpg", 
          "playlistUrl": "summer-2020", 
          "playlistDescription": "Dive into Summer 2020 with the hottest hits to keep your summer lit!", 
          "playlistSpotifyUrl": "4e0sTORWUGLLBbC4jwBRpQ"
        },
        {
          "id": 16, 
          "playlistName": "summer chillouts", 
          "categories": ["summer", "lofi", "chill beats"], 
          "icon": "summerchillouts.jpg", 
          "playlistUrl": "summer-chillouts", 
          "playlistDescription": "Set the vibe this summer with our Summer Chillouts playlist,,, perfect for any sunset.", 
          "playlistSpotifyUrl": "2kRwScBH7EZNVTdpfqNHfO"
        },
        {
          "id": 17, 
          "playlistName": "campfire tunes", 
          "categories": ["indie", "rock", "chill beats"], 
          "icon": "campfiretunes.jpg", 
          "playlistUrl": "campfire-tunes", 
          "playlistDescription": "Laid back Tunes to toast your marshmellows by the campfire. Sit back... and relax.", 
          "playlistSpotifyUrl": "4BOyHi4x2oTZyxbqiu2LZa"
        },
        {
          "id": 18, 
          "playlistName": "feel good friday", 
          "categories": ["feel good", "pop"], 
          "icon": "feelgoodfriday.jpg", 
          "playlistUrl": "feel-good-friday", 
          "playlistDescription": "Mood boosting songs to Jam to whilst you're riding the wave of that friday feeling!", 
          "playlistSpotifyUrl": "2KPl0kIhDjHlyfVElPq7Pk"
        },
        {
          "id": 19, 
          "playlistName": "summer road trip", 
          "categories": ["rock", "summer"], 
          "icon": "summerroadtrip.jpg", 
          "playlistUrl": "summer-road-trip", 
          "playlistDescription": "Classic songs to give you that summer feeling whilst cruising down the highway.", 
          "playlistSpotifyUrl": "32NHolISBMsAGVkPEWAi1g"
        }
      ],

      //Slider Options
      moodScale: 0,
      options: {
        min: 0,
        max: 10,
        dotSize: 20,
        height: 15,
      },


    }
  },
  components: {
    VueSlider
  },
  methods: {
    // Question Navigation Logic
    incrementQuestion() {
      if(this.question != 4) {
        this.question++
      }
    },
    // Questions
    question1(option) {

      var removePlaylistsById = []

      // For Gym
      if(option === 'gym') {
        // Playlists to remove
        removePlaylistsById = [9, 13, 14, 16, 17, 18, 19]
      }
      // For Studying
      if(option === 'studying') {
        // Remove Playlists
        removePlaylistsById = [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19]
      }
      // For Working
      if(option === 'working') {
        // Remove Playlists
        removePlaylistsById = [0, 4, 5, 7, 8, 9, 10, 14, 17, 18, 19]
      }
      // For Relaxing
      if(option === 'relaxing') {
        // Remove Playlists
        removePlaylistsById = []
      }

      // Remove Playlists
      this.removePlaylists(removePlaylistsById)

    },
    question2(option) {
      var removePlaylistsById = []
      var addPlaylists = []

      // For Summer
      if(option === 'summer') {
        addPlaylists = [
          {
            "id": 14, 
            "playlistName": "reggae beach", 
            "categories": ["reggae"], 
            "icon": "reggaebeach.jpg", 
            "playlistUrl": "reggae-beach", 
            "playlistDescription": "Experience the One Love with the ultimate chilled Reggae playlist... perfect for a day at the beach.", 
            "playlistSpotifyUrl": "3aqk7kE1D1c6C9L1PQ5vcf"
          },
          {
            "id": 15, 
            "playlistName": "summer 2020", 
            "categories": ["pop", "charts", "summer"], 
            "icon": "summer2020.jpg", 
            "playlistUrl": "summer-2020", 
            "playlistDescription": "Dive into Summer 2020 with the hottest hits to keep your summer lit!", 
            "playlistSpotifyUrl": "4e0sTORWUGLLBbC4jwBRpQ"
          },
          {
            "id": 16, 
            "playlistName": "summer chillouts", 
            "categories": ["summer", "lofi", "chill beats"], 
            "icon": "summerchillouts.jpg", 
            "playlistUrl": "summer-chillouts", 
            "playlistDescription": "Set the vibe this summer with our Summer Chillouts playlist,,, perfect for any sunset.", 
            "playlistSpotifyUrl": "2kRwScBH7EZNVTdpfqNHfO"
          },
          {
            "id": 17, 
            "playlistName": "campfire tunes", 
            "categories": ["indie", "rock", "chill beats"], 
            "icon": "campfiretunes.jpg", 
            "playlistUrl": "campfire-tunes", 
            "playlistDescription": "Laid back Tunes to toast your marshmellows by the campfire. Sit back... and relax.", 
            "playlistSpotifyUrl": "4BOyHi4x2oTZyxbqiu2LZa"
          },
          {
            "id": 19, 
            "playlistName": "summer road trip", 
            "categories": ["rock", "summer"], 
            "icon": "summerroadtrip.jpg", 
            "playlistUrl": "summer-road-trip", 
            "playlistDescription": "Classic songs to give you that summer feeling whilst cruising down the highway.", 
            "playlistSpotifyUrl": "32NHolISBMsAGVkPEWAi1g"
          }
        ]
      }
      // For Winter
      if(option === 'winter') {
        removePlaylistsById = [14, 15, 16, 17, 19]
        addPlaylists = [
          {
            "id": 1, 
            "playlistName": "in my feels", 
            "categories": ["rap", "chill rap"], 
            "icon": "inmyfeels.jpg", 
            "playlistUrl": "in-my-feels", 
            "playlistDescription": "No matter the vibe, this playlist will hit you in your feels.", 
            "playlistSpotifyUrl": "0M4j2Rnny3wwxjuYCrSZqM"
          },
          {
            "id": 2, 
            "playlistName": "chill rap", 
            "categories": ["rap", "pop", "chill rap"], 
            "icon": "chillrap.jpg", 
            "playlistUrl": "chill-rap", 
            "playlistDescription": "The chillest rap hits of our modern times.", 
            "playlistSpotifyUrl": "2oDbLTGsHGOuWxF13NOzWd"
          },
          {
            "id": 3, 
            "playlistName": "lo-fi waves", 
            "categories": ["lofi", "chill beats"], 
            "icon": "lofiwaves.jpg", 
            "playlistUrl": "lo-fi-waves", 
            "playlistDescription": "Whether you're studying or just relaxing, Lo-Fi Waves brings a smooth vibe to any scenario.", 
            "playlistSpotifyUrl": "7kMaAnpX2KBaVBYOOL4yJX"
          }
        ]
      }

      // Remove Playlists
      this.removePlaylists(removePlaylistsById)
      // Add Playlists
      this.addPlaylists(addPlaylists)

    },
    question3(option) {

      var removePlaylistsById = []
      var addPlaylists = []

      // The Dancer
      if(option === 'dance') {
        removePlaylistsById = [1, 2, 3, 11, 12, 13, 14, 16, 17]
        addPlaylists = [
          { 
            "id": 0, 
            "playlistName": "house party hits", 
            "categories": ["dance", "party", "house", "charts"], 
            "icon": "houseparty.jpg", 
            "playlistUrl": "house-party-hits", 
            "playlistDescription": "Turn your average house party into project X with this ultimate House Party Playlist.", 
            "playlistSpotifyUrl": "2DCj1kDzWlA69FsVE13XtE"
          },
          {
            "id": 4, 
            "playlistName": "FULL SEND", 
            "categories": ["party", "house", "rap"], 
            "icon": "fullsend.jpg", 
            "playlistUrl": "full-send", 
            "playlistDescription": "Shotgun some beers with your beauties and send it.", 
            "playlistSpotifyUrl": "6k6dPox7a8Ntvc5Kg6dSY9"
          },
          {
            "id": 7, 
            "playlistName": "the BIG pre's playlist", 
            "categories": ["house", "hype", "pop", "dance", "charts"], 
            "icon": "preplaylist.jpg", 
            "playlistUrl": "the-big-pre-playlist", 
            "playlistDescription": "The ultimate BIG pre drink playlist to get you are your homies turnt.", 
            "playlistSpotifyUrl": "7HFbALR8wY6wosL9oQZt2K"
          },
          {
            "id": 9,
            "playlistName": "get a groove on", 
            "categories": ["disco"], 
            "icon": "groove.jpg", 
            "playlistUrl": "get-a-groove-on", 
            "playlistDescription": "Groovy Tunes to get ya Funk on in the disco... Boogie all night!", 
            "playlistSpotifyUrl": "6DS0pOSgwBRQae1sHKHQkD"
          }
        ]
      }
      // The Hype Man
      if(option === 'hype') {
        removePlaylistsById = [1, 2, 3, 13, 14, 16, 17, 19]
        addPlaylists = [
          { 
            "id": 0, 
            "playlistName": "house party hits", 
            "categories": ["dance", "party", "house", "charts"], 
            "icon": "houseparty.jpg", 
            "playlistUrl": "house-party-hits", 
            "playlistDescription": "Turn your average house party into project X with this ultimate House Party Playlist.", 
            "playlistSpotifyUrl": "2DCj1kDzWlA69FsVE13XtE"
          },
          {
            "id": 4, 
            "playlistName": "FULL SEND", 
            "categories": ["party", "house", "rap"], 
            "icon": "fullsend.jpg", 
            "playlistUrl": "full-send", 
            "playlistDescription": "Shotgun some beers with your beauties and send it.", 
            "playlistSpotifyUrl": "6k6dPox7a8Ntvc5Kg6dSY9"
          },
          {
            "id": 5, 
            "playlistName": "bodybuilding beats", 
            "categories": ["hype", "dance", "rap"], 
            "icon": "bodybuildingbeats.jpg", 
            "playlistUrl": "bodybuilding-beats", 
            "playlistDescription": "The perfect pre workout to get you pumped in the house of gains.", 
            "playlistSpotifyUrl": "47gIFX3EBZNNbKSyoRzP41"
          },
          {
            "id": 6, 
            "playlistName": "your a game", 
            "categories": ["pop", "rap", "hype", "hiphop"], 
            "icon": "agame.jpg", 
            "playlistUrl": "your-a-game", 
            "playlistDescription": "Get your A Game on and get in the zone with the ultimate hyped gaming playlist.", 
            "playlistSpotifyUrl": "6Fq3fzV8aF0dsQmozfc6Nr"
          },
          {
            "id": 7, 
            "playlistName": "the BIG pre's playlist", 
            "categories": ["house", "hype", "pop", "dance", "charts"], 
            "icon": "preplaylist.jpg", 
            "playlistUrl": "the-big-pre-playlist", 
            "playlistDescription": "The ultimate BIG pre drink playlist to get you are your homies turnt.", 
            "playlistSpotifyUrl": "7HFbALR8wY6wosL9oQZt2K"
          },
        ]
      }
      // The Chill Dude
      if(option === 'chill') {
        removePlaylistsById = [0, 4, 5, 6, 7, 8, 10, 11, 12]
        addPlaylists = [
          {
            "id": 2, 
            "playlistName": "chill rap", 
            "categories": ["rap", "pop", "chill rap"], 
            "icon": "chillrap.jpg", 
            "playlistUrl": "chill-rap", 
            "playlistDescription": "The chillest rap hits of our modern times.", 
            "playlistSpotifyUrl": "2oDbLTGsHGOuWxF13NOzWd"
          },
          {
            "id": 16, 
            "playlistName": "summer chillouts", 
            "categories": ["summer", "lofi", "chill beats"], 
            "icon": "summerchillouts.jpg", 
            "playlistUrl": "summer-chillouts", 
            "playlistDescription": "Set the vibe this summer with our Summer Chillouts playlist,,, perfect for any sunset.", 
            "playlistSpotifyUrl": "2kRwScBH7EZNVTdpfqNHfO"
          },
          {
            "id": 18, 
            "playlistName": "feel good friday", 
            "categories": ["feel good", "pop"], 
            "icon": "feelgoodfriday.jpg", 
            "playlistUrl": "feel-good-friday", 
            "playlistDescription": "Mood boosting songs to Jam to whilst you're riding the wave of that friday feeling!", 
            "playlistSpotifyUrl": "2KPl0kIhDjHlyfVElPq7Pk"
          },
        ]
      }
      // The Outsider
      if(option === 'outsider') {
        addPlaylists = [
          {
            "id": 8, 
            "playlistName": "techno town", 
            "categories": ["techno"], 
            "icon": "technotown.jpg", 
            "playlistUrl": "techno-town", 
            "playlistDescription": "Techno Classics to give you that hyped Nightclub feeling.", 
            "playlistSpotifyUrl": "65xSJDjREcMMO4y4BAeKFp"
          },
          {
            "id": 11, 
            "playlistName": "rock city", 
            "categories": ["rock"], 
            "icon": "rockcity.jpg", 
            "playlistUrl": "rock-city", 
            "playlistDescription": "Get your jam on with Rock City... the finest Rock and Roll playlist to Rock out to.", 
            "playlistSpotifyUrl": "4Ou7x9q3KzXohmwfi4OzZg"
          },
          {
            "id": 12, 
            "playlistName": "90's hip-hop", 
            "categories": ["hiphop"], 
            "icon": "90hiphop.jpg", 
            "playlistUrl": "90s-hip-hop", 
            "playlistDescription": "Classic Hip-Hop hits that defined the 90's and influenced the Rap scene as we know it.", 
            "playlistSpotifyUrl": "1Q7OxoOnUDj6dQO8lhtiYx"
          },
        ]
      }

      // Remove Playlists
      this.removePlaylists(removePlaylistsById)
      // Add Playlists
      this.addPlaylists(addPlaylists)

    },
    question4() {
      console.log('hello')
    },
    // Playlist Actions
    addPlaylists(addPlaylists) {
      for(var i = 0; i < addPlaylists.length; i++) {
        const found = this.playlists.find((element) => element.id == addPlaylists[i].id);
        if(!found) {
          this.playlists.push(addPlaylists[i])
        }
      }
    },
    removePlaylists(removePlaylistsById) {
      // Remove Playlists
      for(var i = 0; i < removePlaylistsById.length; i++) {
        const found = this.playlists.find((element) => element.id == removePlaylistsById[i]);
        if(found) {
          var index = this.playlists.findIndex(x => x.id === found.id)
          this.playlists.splice(index, 1)
        }
      }
    }

  },
  watch: {
    moodScale() {
      this.question4()
    }
  }
}
</script>

<style>

</style>
