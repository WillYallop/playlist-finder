<template>
    <div class="resultCompCon">
        <div class="resultComp globWrapper">
            
            <div class="playlistInfoCon">
                <h1 class="playlistTitle">{{playlistData.playlistName}}</h1>
                <p class="playlistDescP">{{playlistData.playlistDescription}}</p>
            </div>

            <div class="iframeCon">
                <div class="homeBtnCon">
                    <div class="homeBtn"></div> 
                </div>
                <div class="grillCon">
                    <div class="grill"></div>
                </div>
                <iframe :src="'https://open.spotify.com/embed/playlist/' + playlistData.playlistSpotifyUrl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>

            <a :href="'https://open.spotify.com/playlist/' + playlistData.playlistSpotifyUrl" class="followPlaylistBtn">Follow Playlist</a> 

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        playlistData: Object
    }
}
</script>

<style scoped>
.resultCompCon {
  width: 100%;
}
.resultComp {
    width: 100%;
    margin: 0 auto 20px;
}

/* Device */
.iframeCon {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 10px 20px 10px 40px;
    position: relative;
}
.iframeCon iframe {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    margin-bottom: -4px;
}

.homeBtnCon {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.homeBtn {
    height: 20px;
    width: 20px;
    background-color: #FFF;
    border-radius: 50%;
} 
.grillCon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
} 
.grill {
    width: 6px;
    height: 40px;
    background-color: #FFF;
    border-radius: 10px;
}

/* PLaylist iNfo */
.playlistInfoCon {
    width: 100%;

    margin-bottom: 20px;
} 
.playlistTitle {
    text-align: center;
    color: #FFF;
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.playlistDescP {
    text-align: center;
    color: #FFF;
    font-size: 18px;
}
.followPlaylistBtn {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    background-color: #3DA389;
    border-radius: 25px;
    margin-top: 20px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
.followPlaylistBtn:hover {
    background-color: #36927B;
}

@media only screen and (max-width: 600px)  {
    .iframeCon {padding: 20px 10px 40px 10px;}
    .homeBtnCon {top: auto;bottom: 0;left: 0;right: 0;width: 100%;height: 40px;}
    .grillCon {top: 0;right: 0;right: 0;bottom: auto;height: 20px;width: 100%;} 
    .grill {width: 40px;height: 6px;}
}
</style>