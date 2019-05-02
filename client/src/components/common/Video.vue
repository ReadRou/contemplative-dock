<template>
    <div id="video">
        <h2 class="title">{{title}}</h2>
        <d-player ref="player" :options="options"></d-player>
    </div>
</template>

<script>
    import VideoCover from "@/assets/video_cover.png";

    export default {
        name : "Video",
        props: {
            url  : {
                type   : String,
                default:
                    "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"
            },
            title: {
                type   : String,
                default: '未知视频',
            }
        },
        data() {
            return {
                options: {
                    theme   : "#fff",
                    autoplay: false,
                    lang    : "zh-CN",
                    hotkey  : false,
                    video   : {
                        pic: VideoCover,
                        url: this.url
                    }
                }
            };
        },
        mounted() {
            // const player = this.$refs.player.dp;
            // player.on("fullscreen", () => {
            // });
        }
    };
</script>

<style lang="less" scoped>
    #video {
        .title {
            text-align: center;
            font-size: 1.5rem;
        }

        .dplayer {
            height: 15rem;
            width: 100%;
        }
    }
</style>

