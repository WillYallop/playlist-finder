<template>
    <header class="headCon globWrapper">
        <a href="/"><img class="siteLogo" src="../assets/images/siteLogo.png" alt="Melody Melon"></a>
        <div class="shareBtnCon">
            <button class="shareBtn" v-on:click="socialDropdown = !socialDropdown" ref="shareBtn"><img class="btnIcon" src="../assets/images/shareIcon.svg" alt="Share"></button>

            <div class="shareDropdownCon" v-if="socialDropdown" v-closable="{exclude: ['shareBtn'], handler: 'closeShareDropdown'}">
                <ul>
                    <ShareNetwork class="socialCol fbCol"
                        :network="'facebook'"
                        :url="'https://finder.melodymelon.com'"
                        :title="'Find your perfect playlist with Melody Melon'"
                        :description="'Go though Melody Melons quick and easy questionnaire to find your perfect playlist to fuel your day.'">
                        <li><div class="incon" style="background-color: #4267B2;"><img class="inconSvg" src="../assets/images/facebookIcon.svg" alt="Share on Facebook"></div>Facebook</li>
                    </ShareNetwork>
                    <ShareNetwork class="socialCol twitCol"
                        :network="'Twitter'"
                        :url="'https://finder.melodymelon.com'"
                        :title="'Find your perfect playlist with Melody Melon'"
                        :description="'Go though Melody Melons quick and easy questionnaire to find your perfect playlist to fuel your day.'">
                        <li><div class="incon" style="background-color: #1DA1F2;"><img class="inconSvg" src="../assets/images/twitterIcon.svg" alt="Share on Twitter"></div>Twitter</li>
                    </ShareNetwork>
                    <ShareNetwork class="socialCol emailCol"
                        :network="'Email'"
                        :url="'https://finder.melodymelon.com'"
                        :title="'Find your perfect playlist with Melody Melon'"
                        :description="'Go though Melody Melons quick and easy questionnaire to find your perfect playlist to fuel your day.'">
                        <li><div class="incon" style="background-color: #FF0000;"><img class="inconSvg" src="../assets/images/emailIcon.svg" alt="Share via Email"></div>Email</li>
                    </ShareNetwork>

                    <li v-clipboard:copy="'https://finder.melodymelon.com'" v-clipboard:success="linkCopiedFunct"><div class="incon"><img class="inconSvg" src="../assets/images/linkIcon.svg" alt="Copy URL"></div><span v-if="!linkCopied">Copy Link</span><span v-else>Link Copied</span></li>
                    <li v-clipboard:copy="embedCode" v-clipboard:success="embedCopiedFunct"><div class="incon"><img class="inconSvg" src="../assets/images/codeIcon.svg" alt="Copy Embed Code"></div><span v-if="!embedCopied">Copy Embed Code</span><span v-else>Embed Code Copied</span></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            socialDropdown: false,

            // Copy
            embedCode: '<iframe src="https://finder.melodymelon.com/" style="border:0px none; border-radius: 20px;" name="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="540px" width="800px" allowfullscreen></iframe>',
            embedCopied: false,
            linkCopied: false
        }
    },
    methods: {
        closeShareDropdown() {
            this.socialDropdown = false
        },

        linkCopiedFunct() {
            this.linkCopied = true
            setTimeout(() => {
                this.linkCopied = false
            }, 1000)
        },
        embedCopiedFunct() {
            this.embedCopied = true
            setTimeout(() => {
                this.embedCopied = false
            }, 1000) 
        }
    }
}
</script>

<style scoped>
.headCon {
    width: 100%;
    margin: 0 auto;
    z-index: 20;
    position: relative;
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 40px;
}
.siteLogo {
    height: 40px;
}
.shareBtn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background-color: #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btnIcon {
    height: 15px;
}
/* Dropdown */
.shareDropdownCon {
    position: absolute;
    top: 70px;
    right: 20px;
    min-width: 250px;
    padding: 10px;
    background-color: #FFF;
    border-radius: 20px;
    z-index: 20;
}
.shareDropdownCon ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.shareDropdownCon ul li {
    display: flex;
    align-items: center;
    padding: 5px 5px;
    cursor: pointer;
    background-color: #FFF;
    transition: 0.3s;
    border-radius: 10px;
}
.shareDropdownCon ul li:hover {
    background-color: #EFEFEF;
}
.incon {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #232323;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inconSvg {
    height: 10px;
}
</style>