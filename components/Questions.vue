<template class="questionCompCon">
  <div class="questionsComp globWrapper">

    <!-- Questions -->
    <div class="questionWrapper">
      <!-- Question 1 -->
      <div class="questionsCon" v-if="question === 1">
        <h1>When do you listen to your music most?</h1>
        <p class="questionP">Make sure to select the option that best matches the question for the most accurate results.</p>
        <p class="questionNumP">{{question}} of 4</p>
        <div class="optionCon">
          <button class="questionOptionBtn topRowBtns" v-on:click="question1Data = 'gym'" :class="{ 'activeQuestion' : question1Data === 'gym' }">At the gym</button>
          <button class="questionOptionBtn topRowBtns" v-on:click="question1Data = 'studying'" :class="{ 'activeQuestion' : question1Data === 'studying' }">While studying</button>
          <button class="questionOptionBtn" v-on:click="question1Data = 'working'" :class="{ 'activeQuestion' : question1Data === 'working' }">While working</button>
          <button class="questionOptionBtn" v-on:click="question1Data = 'relaxing'" :class="{ 'activeQuestion' : question1Data === 'relaxing' }">In freetime</button>
        </div>
      </div>

      <!-- Question 2 -->
      <div class="questionsCon" v-if="question === 2">
        <h1>What is your favourite time of year?</h1>
        <p class="questionP">Make sure to select the option that best matches the question for the most accurate results.</p>
        <p class="questionNumP">{{question}} of 4</p>
        <div class="optionCon">
          <button class="questionOptionBtn" v-on:click="question2Data = 'summer'" :class="{ 'activeQuestion' : question2Data === 'summer' }">Summer</button>
          <button class="questionOptionBtn" v-on:click="question2Data = 'winter'" :class="{ 'activeQuestion' : question2Data === 'winter' }">Winter</button>
        </div>
      </div>

      <!-- Question 3 -->
      <div class="questionsCon" v-if="question === 3">
        <h1>What option best describes you at a party?</h1>
        <p class="questionP">Make sure to select the option that best matches the question for the most accurate results.</p>
        <p class="questionNumP">{{question}} of 4</p>
        <div class="optionCon">
          <button class="questionOptionBtn topRowBtns" v-on:click="question3Data = 'dance'" :class="{ 'activeQuestion' : question3Data === 'dance' }">The Dancer</button>
          <button class="questionOptionBtn topRowBtns" v-on:click="question3Data = 'hype'" :class="{ 'activeQuestion' : question3Data === 'hype' }">The Hype Man</button>
          <button class="questionOptionBtn" v-on:click="question3Data = 'chill'" :class="{ 'activeQuestion' : question3Data === 'chill' }">The Chill Dude</button>
          <button class="questionOptionBtn" v-on:click="question3Data = 'outsider'" :class="{ 'activeQuestion' : question3Data === 'outsider' }">The Outsider</button>
        </div>
      </div>

      <!-- Question 4 -->
      <div class="questionsCon" v-if="question === 4">
        <h1>Slide to represent your mood!</h1>
        <p class="questionP">Make sure to select the option that best matches the question for the most accurate results.</p>
        <p class="questionNumP">{{question}} of 4</p>
        <VueSlider class="sliderCon" ref="slider" v-model="moodScale" v-bind="options" :hide-label="true"/>
        <div class="moodScaleCon">
          <p>Sad</p>
          <p>Joyful</p>
        </div>
      </div>

      <!-- Question Nav -->
      <div class="questNav">
        <button class="nextQuestionBtn" v-on:click="incrementQuestion"><span v-if="question != 4">Next Question</span><span v-if="question === 4">Results</span></button>
      </div>
    </div>

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
          "selected": true,
          "weight": 0,
          "playlistName": "house party hits", 
          "categories": ["dance", "party", "house", "charts"], 
          "icon": "houseparty.jpg", 
          "playlistUrl": "house-party-hits", 
          "playlistDescription": "Turn your average house party into project X with this ultimate House Party Playlist.", 
          "playlistSpotifyUrl": "2DCj1kDzWlA69FsVE13XtE"
        },
        {
          "id": 1, 
          "selected": true,
          "weight": 0,
          "playlistName": "in my feels", 
          "categories": ["rap", "chill rap"], 
          "icon": "inmyfeels.jpg", 
          "playlistUrl": "in-my-feels", 
          "playlistDescription": "No matter the vibe, this playlist will hit you in your feels.", 
          "playlistSpotifyUrl": "0M4j2Rnny3wwxjuYCrSZqM"
        },
        {
          "id": 2, 
          "selected": true,
          "weight": 0,
          "playlistName": "chill rap", 
          "categories": ["rap", "pop", "chill rap"], 
          "icon": "chillrap.jpg", 
          "playlistUrl": "chill-rap", 
          "playlistDescription": "The chillest rap hits of our modern times.", 
          "playlistSpotifyUrl": "2oDbLTGsHGOuWxF13NOzWd"
        },
        {
          "id": 3, 
          "selected": true,
          "weight": 0,
          "playlistName": "lo-fi waves", 
          "categories": ["lofi", "chill beats"], 
          "icon": "lofiwaves.jpg", 
          "playlistUrl": "lo-fi-waves", 
          "playlistDescription": "Whether you're studying or just relaxing, Lo-Fi Waves brings a smooth vibe to any scenario.", 
          "playlistSpotifyUrl": "7kMaAnpX2KBaVBYOOL4yJX"
        },
        {
          "id": 4, 
          "selected": true,
          "weight": 0,
          "playlistName": "FULL SEND", 
          "categories": ["party", "house", "rap"], 
          "icon": "fullsend.jpg", 
          "playlistUrl": "full-send", 
          "playlistDescription": "Shotgun some beers with your beauties and send it.", 
          "playlistSpotifyUrl": "6k6dPox7a8Ntvc5Kg6dSY9"
        },
        {
          "id": 5, 
          "selected": true,
          "weight": 0,
          "playlistName": "bodybuilding beats", 
          "categories": ["hype", "dance", "rap"], 
          "icon": "bodybuildingbeats.jpg", 
          "playlistUrl": "bodybuilding-beats", 
          "playlistDescription": "The perfect pre workout to get you pumped in the house of gains.", 
          "playlistSpotifyUrl": "47gIFX3EBZNNbKSyoRzP41"
        },
        {
          "id": 6, 
          "selected": true,
          "weight": 0,
          "playlistName": "your a game", 
          "categories": ["pop", "rap", "hype", "hiphop"], 
          "icon": "agame.jpg", 
          "playlistUrl": "your-a-game", 
          "playlistDescription": "Get your A Game on and get in the zone with the ultimate hyped gaming playlist.", 
          "playlistSpotifyUrl": "6Fq3fzV8aF0dsQmozfc6Nr"
        },
        {
          "id": 7, 
          "selected": true,
          "weight": 0,
          "playlistName": "the BIG pre's playlist", 
          "categories": ["house", "hype", "pop", "dance", "charts"], 
          "icon": "preplaylist.jpg", 
          "playlistUrl": "the-big-pre-playlist", 
          "playlistDescription": "The ultimate BIG pre drink playlist to get you are your homies turnt.", 
          "playlistSpotifyUrl": "7HFbALR8wY6wosL9oQZt2K"
        },
        {
          "id": 8, 
          "selected": true,
          "weight": 0,
          "playlistName": "techno town", 
          "categories": ["techno"], 
          "icon": "technotown.jpg", 
          "playlistUrl": "techno-town", 
          "playlistDescription": "Techno Classics to give you that hyped Nightclub feeling.", 
          "playlistSpotifyUrl": "65xSJDjREcMMO4y4BAeKFp"
        },
        {
          "id": 9,
          "selected": true,
          "weight": 0,
          "playlistName": "get a groove on", 
          "categories": ["disco"], 
          "icon": "groove.jpg", 
          "playlistUrl": "get-a-groove-on", 
          "playlistDescription": "Groovy Tunes to get ya Funk on in the disco... Boogie all night!", 
          "playlistSpotifyUrl": "6DS0pOSgwBRQae1sHKHQkD"
        },    
        {
          "id": 10, 
          "selected": true,
          "weight": 0,
          "playlistName": "black lives matter", 
          "categories": ["hiphop", "rap"], 
          "icon": "blm.jpg", 
          "playlistUrl": "black-lives-matter", 
          "playlistDescription": "Let us take a stand for what is right. And let us raise our voice against injustice | #BlackLivesMatter", 
          "playlistSpotifyUrl": "1airbmK6Cxn9juSSLLJ2Fi"
        },
        {
          "id": 11, 
          "selected": true,
          "weight": 0,
          "playlistName": "rock city", 
          "categories": ["rock"], 
          "icon": "rockcity.jpg", 
          "playlistUrl": "rock-city", 
          "playlistDescription": "Get your jam on with Rock City... the finest Rock and Roll playlist to Rock out to.", 
          "playlistSpotifyUrl": "4Ou7x9q3KzXohmwfi4OzZg"
        },
        {
          "id": 12, 
          "selected": true,
          "weight": 0,
          "playlistName": "90's hip-hop", 
          "categories": ["hiphop"], 
          "icon": "90hiphop.jpg", 
          "playlistUrl": "90s-hip-hop", 
          "playlistDescription": "Classic Hip-Hop hits that defined the 90's and influenced the Rap scene as we know it.", 
          "playlistSpotifyUrl": "1Q7OxoOnUDj6dQO8lhtiYx"
        },
        {
          "id": 14, 
          "selected": true,
          "weight": 0,
          "playlistName": "reggae beach", 
          "categories": ["reggae"], 
          "icon": "reggaebeach.jpg", 
          "playlistUrl": "reggae-beach", 
          "playlistDescription": "Experience the One Love with the ultimate chilled Reggae playlist... perfect for a day at the beach.", 
          "playlistSpotifyUrl": "3aqk7kE1D1c6C9L1PQ5vcf"
        },
        {
          "id": 15, 
          "selected": true,
          "weight": 0,
          "playlistName": "summer 2020", 
          "categories": ["pop", "charts", "summer"], 
          "icon": "summer2020.jpg", 
          "playlistUrl": "summer-2020", 
          "playlistDescription": "Dive into Summer 2020 with the hottest hits to keep your summer lit!", 
          "playlistSpotifyUrl": "4e0sTORWUGLLBbC4jwBRpQ"
        },
        {
          "id": 16, 
          "selected": true,
          "weight": 0,
          "playlistName": "summer chillouts", 
          "categories": ["summer", "lofi", "chill beats"], 
          "icon": "summerchillouts.jpg", 
          "playlistUrl": "summer-chillouts", 
          "playlistDescription": "Set the vibe this summer with our Summer Chillouts playlist,,, perfect for any sunset.", 
          "playlistSpotifyUrl": "2kRwScBH7EZNVTdpfqNHfO"
        },
        {
          "id": 17, 
          "selected": true,
          "weight": 0,
          "playlistName": "campfire tunes", 
          "categories": ["indie", "rock", "chill beats"], 
          "icon": "campfiretunes.jpg", 
          "playlistUrl": "campfire-tunes", 
          "playlistDescription": "Laid back Tunes to toast your marshmellows by the campfire. Sit back... and relax.", 
          "playlistSpotifyUrl": "4BOyHi4x2oTZyxbqiu2LZa"
        },
        {
          "id": 18, 
          "selected": true,
          "weight": 0,
          "playlistName": "feel good friday", 
          "categories": ["feel good", "pop"], 
          "icon": "feelgoodfriday.jpg", 
          "playlistUrl": "feel-good-friday", 
          "playlistDescription": "Mood boosting songs to Jam to whilst you're riding the wave of that friday feeling!", 
          "playlistSpotifyUrl": "2KPl0kIhDjHlyfVElPq7Pk"
        },
        {
          "id": 19,
          "selected": true,
          "weight": 0,
          "playlistName": "summer road trip", 
          "categories": ["rock", "summer"], 
          "icon": "summerroadtrip.jpg", 
          "playlistUrl": "summer-road-trip", 
          "playlistDescription": "Classic songs to give you that summer feeling whilst cruising down the highway.", 
          "playlistSpotifyUrl": "32NHolISBMsAGVkPEWAi1g"
        }
      ],

      //Slider Options
      moodScale: 1,
      options: {
        min: 1,
        max: 10,
        dotSize: 20,
        height: 15,
      },

      // Question Answers 
      question1Data: '',
      question2Data: '',
      question3Data: '',

    }
  },
  components: {
    VueSlider
  },
  methods: {
    // Question Navigation Logic
    incrementQuestion() {
      if(this.question === 4) {
        this.question4()
      }
      if(this.question === 3) {
        if(this.question3Data.length > 0) {
          this.question3(this.question3Data)
          this.question++
        }
      }
      if(this.question === 2) {
        if(this.question2Data.length > 0) {
          this.question2(this.question2Data)
          this.question++
        }
      }
      if(this.question === 1) {
        if(this.question1Data.length > 0) {
          this.question1(this.question1Data)
          this.question++
        }
      }
    },
    // Questions
    question1(option) {

      var removePlaylistsById = []

      // For Gym
      if(option === 'gym') {
        // Playlists to remove
        removePlaylistsById = [9, 14, 16, 17, 18, 19]
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
        addPlaylists = [14, 15, 16, 17, 19]
      }
      // For Winter
      if(option === 'winter') {
        removePlaylistsById = [14, 15, 16, 17, 19]
        addPlaylists = [1, 2, 3]
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
        removePlaylistsById = [1, 2, 3, 11, 12, 14, 16, 17]
        addPlaylists = [0, 4, 7, 9]
      }
      // The Hype Man
      if(option === 'hype') {
        removePlaylistsById = [1, 2, 3, 14, 16, 17, 19]
        addPlaylists = [0, 4, 5, 6, 7]
      }
      // The Chill Dude
      if(option === 'chill') {
        removePlaylistsById = [0, 4, 5, 6, 7, 8, 10, 11, 12]
        addPlaylists = [2, 16, 18]
      }
      // The Outsider
      if(option === 'outsider') {
        addPlaylists = [8, 11, 12]
      }

      // Remove Playlists
      this.removePlaylists(removePlaylistsById)
      // Add Playlists
      this.addPlaylists(addPlaylists)

    },
    question4() {

      var removePlaylistsById = []
      var addPlaylists = []

      // Sad
      if(this.moodScale <= 4) {
        removePlaylistsById = [8, 5, 4]
        addPlaylists = [1, 2]
      }
      // Average
      if(this.moodScale > 4 && this.moodScale <= 7) {
        removePlaylistsById = []
        addPlaylists = [
          
        ]
      }
      // Joyful
      if(this.moodScale > 7 && this.moodScale <= 10) {
        removePlaylistsById = [1, 2, 3]
        addPlaylists = [18]
      }

      // Remove Playlists
      this.removePlaylists(removePlaylistsById)
      // Add Playlists
      this.addPlaylists(addPlaylists)
      // Results
      this.showResultsAction()

    },
    // Playlist Actions
    addPlaylists(addPlaylists) {
      for(var i = 0; i < addPlaylists.length; i++) {
        const found = this.playlists.find((element) => element.id == addPlaylists[i]);
        if(found) {
          var index = this.playlists.findIndex(x => x.id === found.id)
          this.playlists[index].selected = true
          this.playlists[index].weight++
        }
      }
    },
    removePlaylists(removePlaylistsById) {
      // Remove Playlists
      for(var i = 0; i < removePlaylistsById.length; i++) {
        const found = this.playlists.find((element) => element.id == removePlaylistsById[i]);
        if(found) {
          var index = this.playlists.findIndex(x => x.id === found.id)
          this.playlists[index].selected = false
          this.playlists[index].weight--
        }
      }
    },
    showResultsAction() {
      this.showResults = true

      // Set result
      var largestWeight = Math.max.apply(Math, this.playlists.map(function(o) { return o.weight; }))
      var playlistResults = [] // array of objects with highest matching weights

      for(var i = 0; i < this.playlists.length; i++) {
        if(this.playlists[i].selected) {
          // If weight is equal to the largest
          if(this.playlists[i].weight === largestWeight) {
            playlistResults.push(this.playlists[i])
          }
        }
      }

      // If the result has multiple with same weight, get a random one from selection
      var randomIndex = Math.floor(Math.random() * playlistResults.length);
      playlistResults[randomIndex]
      this.$router.push('/' + playlistResults[randomIndex].playlistUrl)

    },

  }
}
</script>

<style>
.questionCompCon {
  width: 100%;
}
.questionsComp {
  width: 100%;
  margin: 0 auto 20px;
}
.questionsCon {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 20px;
}
.questionsCon h1 {
  font-size: 24px;
  color: #FFF;
}
.questionP {
  color: #FFF;
  margin: 5px 0 10px;
}
.questionNumP {
  font-size: 14px;
  color: #FFF;
}
.optionCon {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
} 
.questionOptionBtn {
  width: calc(50% - 5px);
  height: 50px;
  border-radius: 25px;
  border: 2px solid #FFF;
  background-color: #FFF;
  cursor: pointer;
  transition: 0.1s;
}
.questionOptionBtn:hover {
  border: 2px solid #F6F6F6;
  background-color: #F6F6F6;
}
.questionOptionBtn.activeQuestion {
  border: 2px solid #000000;
}
.topRowBtns {
  margin-bottom: 10px;
}

.sliderCon {
  margin-top: 10px;
}
.moodScaleCon {
  display: flex;
  justify-content: space-between;
}
.moodScaleCon p {
  color: #FFF;
  font-size: 14px;
}

/* Next Btn */
.nextQuestionBtn {
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #3DA389;
  border: none;
  color: #FFF;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.nextQuestionBtn:hover {
  background-color: #36927B;
}

</style>

<style>
/* Slider Styling */
.vue-slider-dot-tooltip-inner {
  background-color: #E52A50 !important;
  border-color: #E52A50 !important;
}
.vue-slider-process {
  background-color: #3DA389 !important;
}
.vue-slider:hover .vue-slider-process {
  background-color: #3DA389 !important;
}
.vue-slider-dot-handle {
  border: 3px solid #E52A50 !important;
}
</style>